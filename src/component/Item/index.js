

import "./index.css"


const Item = (props) => {


    const {content,up} = props

    const {id} = content

    const func = () => {
        up(id)
    }


    return(
        <div className="itemcontainer">
            <div className="nametitle">
                <p className="indexfirst">{content.name[0]}</p>
                <p>{content.name}</p>


            </div>
            <div className="data">
                <h2 className="dataitem">Role: <span >{content.role}</span></h2>
                <h2 className="dataitem">Email: <span>{content.email}</span></h2>
                <h2 className="dataitem">Phone Number: <span>{content.ph}</span></h2>
                <h2 className="dataitem">Course: <span>{content.course}</span></h2>
                <h2 className="dataitem">Status : <span>{content.status}</span></h2>
            </div>
            <button className="delbtn" onClick={func}>Delete</button>

        </div>
    )




}

export default Item