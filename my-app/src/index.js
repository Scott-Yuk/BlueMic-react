import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Container, Dropdown, Header, Icon, Image, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className='topmenu'>
        <Image src="https://s3.amazonaws.com/cd.bluemic.com/img/layout/Logitech_For_Creators.svg" size='tiny'/>
        <Header as='h5' style={{ color: 'white' }}>FREE SHIPPING ON ORDERS OVER $29</Header>
        <Dropdown item text="US">
          <Dropdown.Menu>
            <Dropdown.Item>Kr</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}

class SecondMenu extends React.Component {
  render() {
    return (
      <Menu borderless className='secondmenu'>
        <Container>
          <Menu className="ui borderless secondmenu menu">
            <Image src="https://s3.amazonaws.com/cd.bluemic.com/img/layout/logo-inverted.svg" size='tiny'/>
            <Menu position='center'>MICROPHONES</Menu>
            <Menu>HEADPHONES</Menu>
            <Menu>ACCESSORIES</Menu>
            <Menu>GET STARTED</Menu>
            <Menu>SUPPORT</Menu>
            <Menu>BLOG</Menu>
            <Menu.Item></Menu.Item>
            <Menu><Icon name="shop icon"/></Menu>
          </Menu>
        </Container>
      </Menu>
    )
  }
}


class BlueMic extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <SecondMenu/>
      </div>
    );
  }
}

ReactDOM.render(<BlueMic/>, document.getElementById('root'));