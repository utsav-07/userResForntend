
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pges/Home';
import About from './components/Pges/About';
import React , {useState , useEffect} from 'react'



function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

   const[dark , setDark] = useState(getMode);

  
  useEffect(() => {
    localStorage.setItem("mode" , JSON.stringify(dark))
}, [dark])

console.log("starting",dark);

let body = document.body;

   if(dark){
      body.style.background = "rgb(46,45,45)";
    }
    else{
      body.style.background = "white";
    }




const loadData = (data) => {
    
    
    setDark(data)
    // if(dark){
    //   body.style.background = "black";
    // }
    // else{
    //   body.style.background = "white";
    // }
    //console.log("hey",dark);
}

  return (

    <>
    <Router>

        <Navbar loadData = {loadData} dark = {dark}/>
        <Switch>
            {/* <Route path = '/' exact component={Home}/> */}
            <Route exact path='/' render={props => <Home dark={dark} />}
 />
            <Route path = '/about' component = {About}/>
        </Switch>
    </Router>
   

   </>
  );
}

export default App;
