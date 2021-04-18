import React from 'react'
import { Card ,Grid,Menu,Label, Icon,Button} from 'semantic-ui-react'

 import Modal from './Elements/Modal'
 
export default function Feed() {
    
    return (
      <Grid centered container columns='equal'>
<Grid.Column   mobile={16} tablet={16} computer={16} >
<Card fluid  >
      <Card.Content>
      <Button color="green" style={{position:"absolute",right:"20px"}} icon labelPosition='left' >
      <Icon name='mail' />
      Notify
    </Button>
        <Card.Header>Subject name</Card.Header>
        <Card.Meta>Year-Division</Card.Meta>
      
        <Card.Description>
        <Menu compact>
    
    <Menu.Item as='a'>
      <Icon name='check'  color="green"/> Checked
      <Label color='green' floating>
        22
      </Label>
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='wait' /> Unchecked
      <Label color='teal' floating>
        22
      </Label>
    </Menu.Item>
    
    
  
  </Menu>
  
    
        </Card.Description>
        
     
      </Card.Content>
      
    </Card>
 </Grid.Column>

<Grid.Column   mobile={16} tablet={16} computer={14} >
 

<Card.Group centered>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card><Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>
    <Card >
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <Modal   />
         
      </Card.Content>
    </Card>

  </Card.Group>
 
</Grid.Column>
</Grid> 
         
    )
}
