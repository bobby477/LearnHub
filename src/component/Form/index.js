import "./index.css"

import Header from "../Header"

import {Component} from "react"

import { v4 as uuidv4 } from 'uuid';

import Item from "../Item"

import Footer  from "../Footer";



class Form extends Component{

    state={name:"",role:"",email:"",ph:"",course:"Select a course",status:"Unplaced",list:[]}

    updateName = (event) => {

        this.setState({name:event.target.value})
    }

    updateRole = (event) => {

        this.setState({role:event.target.value})
    }

    updateEmail = (event) => {
        this.setState({email:event.target.value})
    }
    updatePh = (event) => {
        this.setState({ph:event.target.value})
    }
    updateCourse = (event) => {
        this.setState({course:event.target.value})
    }
    updateStatus = (event) => {
        this.setState({status:event.target.value})
    }


    update = (event) => {

        event.preventDefault()

    

        const {name,role,email,ph,course,status} = this.state


        const newList = {
            id:uuidv4(),
            name,
            role,
            email,
            ph,
            course,
            status
        }

        this.setState(pre => ({list:[...pre.list,newList],name:"",role:"",email:"",ph:"",course:"Select a course",status:"unplaced"}))



    }

    updateDel = (id) => {


        const {list} = this.state

        const filtered = list.filter(each => each.id !== id)

        this.setState({list:filtered})
    }
    render(){

        const {list,name,role,email,ph,course,status} = this.state
        console.log(list)

        

        return(
            <div className="form">
                <div className="head-container">
                <Header />
                </div>
                <div className="form-container">
                    <h1 className="hh2">Fill This Form</h1>
                    <form className="fullform" onSubmit={this.update}>

                        <div className="firstForm">

                            <label className="lab" for="input1">Name:</label>
                            <input value={name} id="input1" type="text" className="inputbox" onChange={this.updateName} placeholder="Enter Your name"/>
                            <label className="lab" for="input2">Role:</label>
                            <input value={role} id="input2" type="text" className="inputbox" onChange={this.updateRole} placeholder="Enter Your role"/>
                            <label className="lab" for="input3">Email:</label>
                            <input value={email} id="input3" type="email" className="inputbox" onChange={this.updateEmail} placeholder="Enter Your email"/>
                        </div>
                        <div className="secondForm">
                            <label className="lab" for="input4" >Phone Number:</label>
                            <input value={ph} id="input4" type="tel" className="inputbox" placeholder="Enter Your Phone number" onChange={this.updatePh}/>
                            <label className="lab" for="input5">Course:</label>
                            <select className="inputbox"  id="input5" onChange={this.updateCourse}>
                                <option value={course} >{course}</option>
                                <option value="React Basics">React Basics</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
                                <option value="Advanced CSS">Advanced CSS</option>
                                <option value="Backend Development">Backend Development</option>
                            </select>
                            <label className="lab" for="input6">Status:</label>
                            <select id="input6" className="inputbox" onChange={this.updateStatus}>
                                <option  value={status} >{status}</option>
                                <option value="placed">Placed</option>



                            </select>

                            <div className="forbtn">
                                <button  type="submit" className="btn">submit</button>
                            </div>

                        </div>
                        
                    </form>


                </div>
                <div className="itemchilder">
                    {list.map(each => <Item key={each.id} content={each} up={this.updateDel}/>)}
                </div>
                <Footer />
            </div>


        )
    }
}

export default Form