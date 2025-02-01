import Home from "./component/Home"

import LearnPage from "./component/LearnPage"

import Form from "./component/Form"

import {Route,Routes} from "react-router-dom";


const App = () => 
  
  (
    <Routes>
      <Route exact path="/Notes" Component={Home}/>
      <Route exact path="/" Component={LearnPage} />
      <Route exact path="/form" Component={Form}/>
    </Routes>    

  )   


export default App;
