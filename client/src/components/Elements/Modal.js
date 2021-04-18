import React from 'react'
import { Button, Header, Form,Checkbox, Modal, Icon, Segment } from 'semantic-ui-react'
import {SketchField, Tools} from 'react-sketch';
import F from './sample.pdf'
function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)
 


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="blue"   >Check<Icon name="file pdf" color="white" style={{marginLeft:"10px"}} ></Icon> </Button>}
      style={{position:"absolute",top:"100px",width:"80%"}}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
      <SketchField width='70%' 
                         height='650px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         style={{position:"absolute"}}
                        
                         lineWidth={3}></SketchField>
    <object
  data={F}
  type="application/pdf"
  width="100%"
  height="650px">
  <p>Your browser does not support PDFs.
    <a href="https://example.com/test.pdf">Download the PDF</a>.</p>
</object> 
<div style={{margin:"25px"}}>

</div>
<Segment padded>
  

        <Modal.Description>
          <Header>Evaluvation</Header>
         
          <Form>
    <Form.Field>
      <label>obtained</label>
      <input placeholder='00' />
    </Form.Field>
    <Form.Field>
      <label>out of</label>
      <input placeholder='00' />
    </Form.Field>
    
    <Button type='submit'>Submit</Button>
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
