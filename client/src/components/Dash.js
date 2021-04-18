import React, { Component } from 'react'
import { Input, Menu,Grid, Card, Container, Dropdown,Label,Icon, MenuItem } from 'semantic-ui-react'
import '../style/main.css'
export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
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
            <Label color="green">
          <Icon name='checkmark' />
              23
          <Label.Detail>checked pdf</Label.Detail>
           </Label>  
            </Dropdown.Item>
            <Dropdown.Item>My account</Dropdown.Item>
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
}
