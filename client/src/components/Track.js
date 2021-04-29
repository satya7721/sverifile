import {React,useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import { Card,Progress,Label} from 'semantic-ui-react'
import {reactLocalStorage} from 'reactjs-localstorage'; 

export default function Track() {
    const [pro,setPro]=useState(10);

    return (
        <div className="UpperSpace">
           <Card centered >
      <Card.Content>
        <Card.Header>Submission succesful </Card.Header>
         
        <Card.Description>

        <Progress percent={100} color="blue" label="Track id"/>
        <p>{reactLocalStorage.get("id")}</p>
        </Card.Description>
        
        
      </Card.Content>
    </Card>
    <Label as='a' color='blue' image style={{position:"absolute",bottom:"20px",left:"17%"}}>
      <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      Developed By
      <Label.Detail>Satyam Khandekar</Label.Detail>
    </Label>
        </div>
    )
}
