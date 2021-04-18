import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import { Button, Checkbox, Form,Grid, GridColumn, Icon, Input,Dropdown} from 'semantic-ui-react'

const options = [
    { key: '.com', text: 'A', value: 'A' },
    { key: '.net', text: 'B', value: 'B' },
    { key: '.org', text: 'C', value: 'C' },
  ]

  function jk(e){
      console.log(e.target.textContent);
  }
const FormExampleForm = () => (

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
        <div className="mb-3  " >
        <h5>
                Select mode
        </h5>
        <Grid columns={2} >
            
           
            <Grid.Column floated='left' >
            <button className="ButtonTest">
                ISE
            </button>
            </Grid.Column>
            <Grid.Column floated='right'>
            <button className="ButtonTest ButtonTestActive">
                ISE
            </button>
            </Grid.Column>
             </Grid>
            
        </div>
        
    <Form.Field >
    <div className="containerSpace">
 
 </div>
    
      <label>Name</label>
      <input placeholder='Name..' />
    </Form.Field>
    <Form.Field>
      <label>Mail</label>
      <input placeholder='Mail..' />
    </Form.Field>

    <Form.Field>
    <Input
    label={<Dropdown defaultValue='.com' options={options}   onChange={jk} />}
    labelPosition='right'
    placeholder='Roll number'
    
  />
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
    <Form.Field  >
    <input type="file" name="myFile" id="myFile" style={{display:"none"}}/>
   
     <Button for="myFile" fluid type='submit' icon labelPosition='left' color="blue" inverted > <Icon name="file alternate" ></Icon>File</Button>  
     
     </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Grid.Column>
    <Button fluid type='submit' color="blue" >Submit <Icon name="angle right" ></Icon></Button>
    </Grid.Column>
    
    
  </Form>
</Grid.Column>

)

export default FormExampleForm