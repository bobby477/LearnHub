import { Component } from "react";

import Header from "../Header"

import Footer from "../Footer"

import "./index.css"

class Home extends Component {

    

    render(){
        console.log("bdsb")

        return(
            <div className="background-container">
                <div className="head">
                    <Header />
                </div>
                <div className="content">
                    <div className="front">
                        <h1 className="headfront">Front-end Guide</h1>
                        <ul className="unorderlis">
                            <li className="liorder">Clone the exact project</li>
                            <li className="liorder">Fill out the form</li>
                            <li className="liorder">The card length will be added</li>
                            <li className="liorder">If we delete the card it will be updated</li>
                            <li className="liorder">
                                Our requirement:
                                <ol>

                                    <li className="ol">HTML</li>
                                    <li className="ol">CSS</li>
                                    <li className="ol">JavaScript</li>
                                    <li className="ol">Reactjs</li>
                                </ol>



                            </li>
                        </ul>


                    </div>
                    <div className="full">
                        <h1 className="headfront">Front-end Guide</h1>
                        <ul className="unorderlis">
                            <li className="liorder">Clone the exact project</li>
                            <li className="liorder">Fill out the form</li>
                            <li className="liorder">The card length will be added</li>
                            <li className="liorder">If we delete the card it will be updated</li>
                            <li className="liorder">
                                Our requirement:
                                <ol>

                                    <li className="ol">HTML</li>
                                    <li className="ol">CSS</li>
                                    <li className="ol">JavaScript</li>
                                    <li className="ol">Reactjs</li>
                                    <li className="ol">Node</li>
                                    <li className="ol">Python</li>
                                    <li className="ol">JAVA</li>
                                    <li className="ol">SQL</li>
                                    <li className="ol">MangoDB</li>
                                </ol>



                            </li>
                            <li className="liorder">For the backend,connect with the database using any lanuange</li>
                        </ul>


                    </div>
                    
                </div>
                <hr className="forhr" />
                <div className="notes">
                        <h1 className="headfront fmt">Important Notes</h1>
                        <ul className="unorderlis3">
                           <li className="liorder">No need for notes files; they are for guidance only.</li>
                           <li className="liorder">Once completed, deploy the project to Github,Vercel or Netlify and upload the link in the given form.</li>
                           <li className="liorder">We have attached asset files in zip format, check them out.</li>

                        </ul>

                </div>
                <hr className="forhr" />

                <Footer />


            </div>
        )
    }

}

export default Home