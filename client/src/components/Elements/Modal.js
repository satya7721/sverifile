import React,{useState} from 'react'
import { Button, Header, Form,Checkbox, Modal, Icon, Segment } from 'semantic-ui-react'
import {SketchField, Tools} from 'react-sketch';
import axios from 'axios';

var querystring = require('querystring');
function ModalExampleModal( props) {
  const [open, setOpen] = React.useState(false)
 
  const urls = "https://sverifiles.herokuapp.com/uploads/"+props.name+".pdf"
const [state,setState]=useState({
  id:props.name,
  obmarks:0,
  outmarks:0
})

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
const PUSH=()=>{
  axios.put("http://localhost:4000/marks" ,querystring.stringify({
    id:props.name,
    ob:state.obmarks,
    outm:state.outmarks
  }),config).then(res=>{
  
    
    if(res.data==false){
      console.log("error");
    }else{
    
     alert("op");
    }
    
    
  }).catch(err=>{
    console.log(err);
   
  })
}
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="blue" >Check<Icon name="file pdf" color="white" style={{marginLeft:"10px"}} ></Icon> </Button>}
      style={{position:"absolute",top:"100px",width:"80%"}}
    >
      <Modal.Header>{props.name} io</Modal.Header>
      <Modal.Content image>
      <SketchField width='70%' 
                         height='650px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         style={{position:"absolute"}}
                        
                         lineWidth={3}></SketchField>
  
<embed src={urls} type="application/pdf" width="100%" height="600px" />
<div style={{margin:"25px"}}>

</div>
<Segment padded>
  

        <Modal.Description>
          <Header>Evaluvation</Header>
         
          <Form>
    <Form.Field>
      <label>obtained</label>
      <input name="obmarks" onChange={change} placeholder='00' />
    </Form.Field>
    <Form.Field>
      <label>out of</label>
      <input name="outmarks" onChange={change} placeholder='00' />
    </Form.Field>
    
    <Button type='submit' onClick={PUSH} >Submit</Button>
  </Form>
        </Modal.Description>
        </Segment>  
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Done"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
