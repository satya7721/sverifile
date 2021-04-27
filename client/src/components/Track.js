import {React,useEffect,useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import { Card,Progress} from 'semantic-ui-react'
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
        </div>
    )
}
