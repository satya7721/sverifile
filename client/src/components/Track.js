import {React,useEffect,useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../style/main.css';
import { Card,Progress} from 'semantic-ui-react'

export default function Track() {
    const [pro,setPro]=useState(10);

    return (
        <div>
           <Card centered >
      <Card.Content>
        <Card.Header>Submission Progress</Card.Header>
         
        <Card.Description>
        <Progress percent={44} color="blue" label="Under Evaluation"/>
        </Card.Description>
      </Card.Content>
    </Card>
        </div>
    )
}
