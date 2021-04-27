import React, { useState ,useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import { Button, Checkbox, Form,Grid, Icon, Input,Message} from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage'; 
var querystring = require('querystring');
 
const TeacherLogin = () =>{

  const history = useHistory();
  const handleClick = () => history.push('/board');

  const [state,setState]= useState({
    name:"",
    mail:"",
    password:"",
    subject:"",
    
  })
  const [loading,setLoading]=useState(false);
  const [fail,setFail]=useState(false);

 const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const change=(e)=>{
  setState({
    ...state,
    [e.target.name]:e.target.value,
     
    
  })
  
 
}
useEffect(() => {
  setState({
    ...state,
    [state.mail]:"ok",
     
    
  })
      
})
const update=()=>{
 
  console.log(state)
}



const PUSH=()=>{
  update()
  setLoading(true);
  axios.post("https://sverifiles.herokuapp.com/teacherlogin" ,querystring.stringify({
    mail:state.mail,
    password:state.password
  }),config).then(res=>{
  
    setLoading(false);
    if(res.data==false){
      setFail(true)
    }else{
    
      let name = state.mail;
      reactLocalStorage.set('name', state.subject);
      handleClick()
    }
    
    
  }).catch(err=>{
    console.log(err);
    setLoading(false);
  })
 
 }

 useEffect(() => {
  setState(state)
    
} )

return(
  <Grid.Column mobile={16} tablet={8} computer={6} >
    <Form className="FormMain">
        <div className="mt-3 mb-5">
        <h3>
        <Icon circular color='teal' name='student' /> SVERI Forms
        </h3>
        <p>
            A platform for all academics related submissions
        </p>
        <div className="container mb-3">

        </div>
        </div>
        
    <Form.Field >
    <div className="containerSpace">
 {
   fail&&
   <Message color='red'>wrong Credentials</Message>
 }
 </div>
    
      <label>Mail</label>
      <input name="mail" onChange={change} required placeholder='mail..' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name="password" type="password" onChange={change} required  placeholder='Password..' />
    </Form.Field>

    
   
    <Form.Field>
    <label>Subject</label>
    <Input name="subject" onChange={change} list='languages' required placeholder='Choose Subject...' />
    <Grid.Column >
    <datalist id='languages'>
      <option value='CPP'>CPP</option>
      <option value='Python'>Python</option>
      <option value='Java'>Java</option>
    </datalist>
    </Grid.Column>
    
   
    </Form.Field>
    <div className="containerSpace">
 
 </div>
  
    <Grid.Column>
    <Button fluid type='submit' color="blue" onClick={PUSH} >Submit <Icon name="angle right" ></Icon></Button>
    </Grid.Column>
    
    
  </Form>
</Grid.Column>
);
}

export default TeacherLogin;