import React,{useEffect,useState} from 'react'
import { Card ,Grid,Menu,Label, Icon,Button,Modal,Image} from 'semantic-ui-react'
import ReactExport from "react-export-excel";
import {reactLocalStorage} from 'reactjs-localstorage'; 
import axios from 'axios';
import ModalOP from '../components/Elements/Modal.js'
export default function Feed() {
  const [name, setName] = useState("Python")

  const [open, setOpen] = React.useState(false)
  const [list,setList]=useState([]);
  const [load,setLoad]=useState(false);
  
  const [count,setCount]=useState({
    check:0,
    uncheck:0
  })
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


  useEffect(() => {
    if(!load){
    setName(localStorage.getItem('name',"CPP"))
    console.log(name)
    axios.get(`https://sverifiles.herokuapp.com/allpdf`,{
      params:{
        subject:name
      }
    })
    .then(function (response) {
      setList(response.data)
      
      setLoad(true);
    })
    setLoad(true)
   }
   let c=0;
   let u=0;
     for(const i of list){
        if(i.check){
          c=c+1;
        }else{
          u=u+1;
        }
     }
     setCount({
       check:c,
       uncheck:u
     })
   
  })
    
    return (
      <Grid centered container columns='equal'>
<Grid.Column   mobile={16} tablet={16} computer={16} >
 
<Card fluid  >
      <Card.Content>
      <Button color="green" style={{position:"absolute",right:"20px"}} icon labelPosition='left' >
      <Icon name='mail' />
      {name}
    </Button>
     
        <Card.Header> {name}</Card.Header>
    <Card.Meta>{"CSE"}</Card.Meta>
      
        <Card.Description>
        <Menu compact>
    
    <Menu.Item as='a'>
      <Icon name='check'  color="green"/> Checked
      <Label color='green' floating>
        {count.check}
      </Label>
    </Menu.Item>
    <Menu.Item  >
      <Icon name='wait' /> Unchecked
      <Label color='red' floating>
        {count.uncheck}
      </Label>
    </Menu.Item>
    <Menu.Item>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Xl Sheet</Button>}
    >
      <Modal.Header>Submited Students</Modal.Header>
      <Modal.Content image>
       <Modal.Description>
        <ul>
        {
            list.map(i=>(
              <li>{i.name}</li>
            ))
        }
        </ul> 
        <ExcelFile element={<button>Download Data</button>}>
              
                <ExcelSheet data={list} name="Data">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Year" value="year"/>
                    <ExcelColumn label="Division" value="division"/>
                    <ExcelColumn label="roll" value="roll"/>
                    <ExcelColumn label="Obtained marks" value="obtainedmark"/>
                    <ExcelColumn label="outofmark" value="outofmark"/>
                </ExcelSheet>
            </ExcelFile>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
    </Menu.Item>
    <Menu.Item>
    <Button color="grey" onClick={() => setLoad(false)} positive>
    <Icon name='refresh' size='small' />
        </Button>
      </Menu.Item>
    
  
  </Menu>
  
    
        </Card.Description>
        
     
      </Card.Content>
      
    </Card>
 </Grid.Column>

<Grid.Column   mobile={16} tablet={16} computer={14} >
 

<Card.Group centered>
{
    list.map(i=>(
      <Card key={i.id} >
      <Card.Content>
        <Card.Header>{i.name}</Card.Header>
        <Card.Meta>{i.division}</Card.Meta>
        <Card.Description>
          {i.mode}
        </Card.Description>
<div style={{marginTop:"15px"}}>

</div>
        <ModalOP  name={i.fileid}  />
        
      </Card.Content>
    </Card>
    ))
  }
  </Card.Group>
 
</Grid.Column>
</Grid> 
         
    )
}
