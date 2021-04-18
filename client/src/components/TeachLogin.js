import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import { Button, Checkbox, Form,Grid, Icon, Input,Dropdown} from 'semantic-ui-react'

 
 
const TeacherLogin = () => (

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
 
 </div>
    
      <label>Mail</label>
      <input placeholder='mail..' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password..' />
    </Form.Field>

    
   
    <Form.Field>
    <label>Subject</label>
    <Input list='languages' placeholder='Choose Subject...' />
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
    <Button fluid type='submit' color="blue" >Submit <Icon name="angle right" ></Icon></Button>
    </Grid.Column>
    
    
  </Form>
</Grid.Column>

)

export default TeacherLogin;