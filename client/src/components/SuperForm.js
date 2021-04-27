import {React, useRef,useState,useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Image,Divider,Segment, Form,Grid, GridColumn, Icon, Input,Dropdown} from 'semantic-ui-react'
 
var querystring = require('querystring');
const options = [
    { key: '1', text: 'A', value: 'A' },
    { key: '2', text: 'B', value: 'B' },
    { key: '3', text: 'C', value: 'C' },
  ]

  

const FormExampleForm = (props) => {
  
  const history = useHistory();
  const handleClick = () => history.push('/track');

  const [state,setState]=useState({
    name:"",
    mail:"",
    subject:"",
    roll:"",
    division:"",
    year:"",
    exam:"",
    filename:"",
    file:null,
    id:""
  })

  const [loading,setLoading]=useState(false);
 
  const fileInputRef = useRef(null);
  const onTargetClick = () => {
    fileInputRef.current.click()
  }
  // file upload

  const FilePush=(e)=>{
    const value =e.target.files[0];
    setState({
      ...state,
      [e.target.name]:value,
       
      
    })
  }

  const onPush=  (e)=>{
    const value = e.target.value;
    console.log(e.target.name,value)
    setState({
      ...state,
      [e.target.name]:value,
       
      
    })
     
   
    e.preventDefault();
  }

  useEffect(() => {
    setState(state)
        
 })
 
 
 const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const config1 = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}


 // on submit 

 const PUSH=()=>{
  axios.post("http://localhost:4000/submit" ,querystring.stringify({
    id:state.id,
    name:state.name,
    mail:state.mail,
    mode:state.exam,
    year:state.year,
    division:state.division,
    subject:state.subject,
    roll:state.roll
  }),config).then(res=>{
  
    setLoading(false);
    
  }).catch(err=>{
    console.log(err);
    setLoading(false);
  })
 }

 const PUSHFILE=()=>{
   setLoading(true);
   let formData =new FormData();
   
   formData.append("file", state.file);
   console.log(state.file)
   formData.append("newname", "909090");
  console.log(formData)
 
  axios.post("http://localhost:4000/upload/" ,formData,config1).then(res=>{
     const idTmp = res.data.filename;
     const T = idTmp.split(".")
      
      
    setState({
      ...state,
      ["id"]:T[0],
       
      
    })
    setState({
      ...state,
      ["id"]:T[0],
       
      
    })
    PUSH();
    
  }).catch(err=>{
    console.log(err);
    setLoading(false);
  })
 }

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
         
        </div>
       
        
    <Form.Field >
    <div className="containerSpace">
 
 </div>
    
      <label>Name</label>
      <input required name="name" placeholder='Name..' onChange={onPush} />
    </Form.Field>
    <Form.Field>
      <label>Mail</label>
      <input required name="mail" placeholder='Mail..' onChange={onPush} />
    </Form.Field>
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <Form.Field>
      <label>Year</label>
      <input required name="year" placeholder='1 or 2 or 3 or 4' onChange={onPush} />
      
    </Form.Field>
      </Grid.Column>
      <Grid.Column  >
      <Form.Field>
      <label>Roll no.</label>
    <input required  name="roll" placeholder='roll number..' onChange={onPush} />
    
    </Form.Field>
      </Grid.Column>
       <Grid.Column  >
      
    
  <Form.Field>
    <label>Division</label>
    <Input list='div' required name="division" placeholder='Choose Division...' onChange={onPush} />
    <Grid.Column >
    <datalist id='div'>

      <option value='A'>A</option>
      <option value='B'>B</option>
      <option value='C'>C</option>      
             
    </datalist>
    </Grid.Column>
    </Form.Field>
      </Grid.Column>
      <Grid.Column>
      <Form.Field>
    <label>Exam</label>
    <Input list='exam' required name="exam" placeholder='Choose exam...' onChange={onPush} />
    <Grid.Column >
    <datalist id='exam'>
      
      <option value='ISE1'>ISE 1</option>
      <option value='ISE2'>ISE 2</option>
      <option value='ISE3'>ISE 3</option>      
      <option value='CT'>CT</option>
      <option value='UT'>UT</option>
      
    </datalist>
    </Grid.Column>
    
   
    </Form.Field>
      </Grid.Column>
    </Grid>

    <Divider vertical>-</Divider>
  </Segment>
   
   

    
    <Form.Field>
    <label>Subject</label>
    <Input required list='languages' name="subject" placeholder='Choose Subject...' onChange={onPush} />
    <Grid.Column >
    <datalist id='languages'>

      <option value='CPP'>CPP</option>
      <option value='Python'>Python</option>
      <option value='Java'>Java</option>      
      <option value='Distributed Systems'>Distributed Systems</option>
      <option value='Web Technology'>Web Technology</option>
      
    </datalist>
    </Grid.Column>
    
   
    </Form.Field>

   


    <div className="containerSpace">
 
 </div>
    <Form.Field  >
    <input required type="file" ref={fileInputRef} onChange={FilePush} name="file" style={{display:"none"}} />
   
<Button onClick={onTargetClick}   fluid   icon labelPosition='left'  color="blue" inverted > <Icon name="file alternate" ></Icon>{
  state.file!=null ? state.file.name : "File"
}</Button>  
     
    
     </Form.Field>
   
    <Grid.Column>
    <Button fluid type='submit' onClick={PUSHFILE} color="blue" >  
    {loading&& <Icon loading name='spinner' />}
    {!loading&& "Submit"}
    {!loading&&  <Icon name="angle right" ></Icon>}
    </Button>
    </Grid.Column>
    
    
  </Form>
</Grid.Column>
);
}

export default FormExampleForm








