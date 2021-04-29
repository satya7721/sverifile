import {React} from 'react'

 

import SuperForm from './components/SuperForm';
import Track from './components/Track';
import Dash from './components/Dash';
import Feed from './components/Feed';
import Teacher from './components/TeachLogin';


import { Grid} from 'semantic-ui-react'

import './style/main.css';
 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  
  } from "react-router-dom";

export default function App() {
  


    
  const pathname = window.location.pathname;
   
  function NavBar(){
    if(pathname==="/board"){
      return <Dash></Dash>
    }
  }

    return (
        <div >
    
            <Router>
              
                 {
                   NavBar()
                 }
             
      <Grid centered container columns='equal'>
    
   
    <Switch>
<Route exact path="/">
  <SuperForm/>
</Route>
<Route exact path="/track">
 <Track/>
 </Route>
<Route exact path="/board">
  <div className="UpperSpace" >

  </div>
<Feed></Feed>
</Route>
<Route exact path="/proctor">
  <div style={{marginTop:"15%"}}>
    </div>
<Teacher/>
 
</Route>
 

</Switch>
    
   
  </Grid>

     
    </Router>
           
        </div>
    )
}




