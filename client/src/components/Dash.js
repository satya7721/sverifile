import React, { useState } from 'react'
import {  Menu,Grid, Button, Container, Dropdown,Label,Icon, Modal } from 'semantic-ui-react'
import '../style/main.css'
 
export default function  MenuExampleSecondary()  {
 
   const Delete = ()=>{
   
    setOpen(false)
   }
     
    
  

  const [open,setOpen]=useState(false);
  return(
    
      <Grid.Column  >
        <div className="NavBar">
        <Menu fixed='top' inverted >
      <Container>
        <Menu.Item as='a' header>
          
          SEVERI Files
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple icon="paper plane outline">
          <Dropdown.Menu>
            <Dropdown.Item>Log data</Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item>
            <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Label color="red">
        <Icon name='checkmark' />
            23
        <Label.Detail>Clear Server</Label.Detail>
         </Label>  
      }
    >
      <Modal.Header>Are you sure..!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Type "YES".
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={Delete}>OK</Button>
      </Modal.Actions>
    </Modal>
            
            </Dropdown.Item>
            <Dropdown.Item >Statistics</Dropdown.Item>
            
            <Dropdown.Divider />
           
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         
      </Container>
    </Menu>

         </div>

      
      </Grid.Column>
 
  )
}
