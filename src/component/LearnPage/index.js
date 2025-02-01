
import Header from "../Header"

import Footer from "../Footer"

import "./index.css"


const LearnPage = () => {

    return(
        <div className="learn-background">
            <Header />
            <div className="startded-container">
                <h1 className="headlearn">Learn from the best,be your best..</h1>
                <p className="paralearn">Give yourself an upgrade with our inspiring online courses  and join a global community of leaners</p>
                <button className="btn">Get startded</button>

            </div>
            <div className="second-container">
                <h1 className="hdlearn">Our Placement Partners</h1>
                <div className="patner-col">
                    <div className="first">
                        <img src="/images/img/airbnb.png" className="iimg" alt="airbnb-img"/>
                        <img src="/images/logo/Lifegroups.png" className="iimg" alt="Lifegroups-img"/>
                        <img src="/images/img/tailus.png" className="iimg" alt="tailus-img"/>
                        <img src="/images/img/coty.png" className="iimg" alt="coty-img"/>

                    </div>
                    <div className="second">
                        <img src="/images/logo/client-8.png" className="iimg" alt="client-img"/>
                        <img src="/images/logo/myob.png" className="iimg" alt="myob-img"/>
                        <img src="/images/img/microsoft.png" className="iimg" alt="microsoft-img"/>
                        <img src="/images/img/lilly.png" className="iimg" alt="lilly-img"/>


                    </div>


                </div>
                <button className="btn2">and,more<br />compines</button>

                


            </div>
            <hr />
            <div className="third-container">
                <p className="paratheme">OPEN SOURCE THEME AND UI COMPONENTS</p>
                <h1 className="paracontent">Geaux Astro helps you craft beautiful websites efficiently</h1>
                <div className="imgandcerti">
                <ul className="unorder1">
                    <li className="liorder1">
                        <img src="/images/logo/medal.svg" className="img2" alt="medal-img"/>
                        <div>
                            <h1 className="hh1">Certificate Distribution</h1>
                            <p>We offer certificates to validate and recognize your achievement.</p>
                        </div>


                    </li>
                    <li className="liorder1">
                        <img src="/images/logo/thought.png" className="img2" alt="thought-img"/>
                        <div>
                            <h1 className="hh1">Knowledge</h1>
                            <p>We deliver transformative knowledge that empowers and inspires.</p>
                        </div>
                    </li>
                    <li className="liorder1">
                        <img src="/images/logo/training.png" className="img2" alt="training-img"/>
                        <div>
                            <h1 className="hh1">Hands-on Experience</h1>
                            <p>We provide hands-on experience for real-world learning. You learn best by doing.</p>
                        </div>
                    </li>


                </ul>
                <img src="/images/img/AboutDashboard.png" className="dash" alt="AboutDashboard-img"/>


                </div>
            </div>
            <hr />
            <div className="fourth-container">
                <p className="para1">Empower your future with cutting-edge skillsNew, Embrace innovation, master technology, & shape the digital world Your journey to success starts here.</p>
                <div>
                    <p className="para2">Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.</p>
                    <div className="btns">
                        <div className="countbtns">
                            <button className="buttn">Total students</button>
                            <h1>12</h1>



                        </div>
                        <div className="countbtns">
                            <button className="buttn">placed students</button>
                            <h1>5</h1>


                        </div>
                        <div className="countbtns">
                            <button className="buttn">Unplaced students</button>
                            <h1>7</h1>
                        </div>


                    </div>

                </div>
            </div>
            <hr />
            <Footer />


        </div>
    )

}

export default LearnPage