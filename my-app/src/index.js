import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Dropdown, Flag, Grid, Header, Icon, Image, Label, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className='topmenu'>
        <Menu.Item><Image src="https://s3.amazonaws.com/cd.bluemic.com/img/layout/Logitech_For_Creators.svg" size='small'/></Menu.Item>
        <Menu.Item onClick position='right'>
          <Header as='h5' style={{ color: 'white' }}>
            FREE SHIPPING ON ORDERS OVER $29
          </Header>
        </Menu.Item>
        <Menu.Item position='right' style={{ backgroundColor: '#363636', fontSize: '25px' }}>
          <Label style={{ backgroundColor: '#363636', fontSize: '16px' }}>
            <Flag name='us flag'/>US<Dropdown>
            <Dropdown.Menu style={{ backgroundColor: '#363636' }}>
              <Dropdown.Item className='text'> <i className="ca flag"/> CA (EN)</Dropdown.Item>
              <Dropdown.Item> <i className="ca flag"/> CA (FR)</Dropdown.Item>
              <Dropdown.Item> <i className="au flag"/> AU</Dropdown.Item>
              <Dropdown.Item> <i className="gb flag"/> GB</Dropdown.Item>
              <Dropdown.Item> <i className="fr flag"/> FR</Dropdown.Item>
              <Dropdown.Item> <i className="jp flag"/> JP</Dropdown.Item>
              <Dropdown.Item> <i className="de flag"/> DE</Dropdown.Item>
              <Dropdown.Item> <i className="ca flag"/> ES</Dropdown.Item>
              <Dropdown.Item> <i className="nl flag"/> NL</Dropdown.Item>
              <Dropdown.Item> <i className="se flag"/> SE</Dropdown.Item>
              <Dropdown.Item> <i className="dk flag"/> DK</Dropdown.Item>
              <Dropdown.Item> <i className="no flag"/> NO</Dropdown.Item>
              <Dropdown.Item> <i className="fi flag"/> FI</Dropdown.Item>
              <Dropdown.Item> <i className="cn flag"/> CN</Dropdown.Item>
              <Dropdown.Item> <i className="kr flag"/> KR</Dropdown.Item>
              <Dropdown.Item> <i className="ru flag"/> RU</Dropdown.Item>
              <Dropdown.Item> <i className="br flag"/> BR</Dropdown.Item>
              <Dropdown.Item> <i className="ar flag"/> AR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Label>
        </Menu.Item>
      </Menu>
    )
  }
}

class SecondMenu extends React.Component {
  render() {
    return (
      <Menu borderless className='secondmenu'>
        <Menu className="ui borderless secondmenu menu">
          <Menu.Item onClick><Image src="https://s3.amazonaws.com/cd.bluemic.com/img/layout/logo-inverted.svg" size='tiny'/></Menu.Item>
          <Menu.Item onClick position='right' style={{ fontSize: '13px' }}><strong>MICROPHONES</strong></Menu.Item>
          <Menu.Item onClick style={{ fontSize: '13px' }}><strong>HEADPHONES</strong></Menu.Item>
          <Menu.Item onClick style={{ fontSize: '13px' }}><strong>ACCESSORIES</strong></Menu.Item>
          <Menu.Item onClick style={{ fontSize: '13px' }}><strong>GET STARTED</strong></Menu.Item>
          <Menu.Item onClick style={{ fontSize: '13px' }}><strong>SUPPORT</strong></Menu.Item>
          <Menu.Item onClick style={{ fontSize: '13px' }}><strong>BLOG</strong></Menu.Item>
          <Menu.Item position='right'>
            <Button inverted color='red'> <Icon name="shop icon"/> </Button>
          </Menu.Item>
        </Menu>
      </Menu>
    )
  }
}

class BottomMenu extends React.Component {
  render() {
    return (
      <List.Item class="footer-background">
        <Grid container columns="four">
          <Grid.Column>
            <Image size='huge' src="https://s3.amazonaws.com/cd.bluemic.com/img/layout/logo_footer.svg"/>
            <Header style={{fontSize: '10px', color: 'white', marginTop: '5px' }} textAlign='center'>
              © Blue (Baltic Latvian Universal Electronics, LLC) 2022.
              <Header style={{fontSize: '10px', color: 'white' }} textAlign='center'>All rights reserved.</Header>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: 'white' }}>CONNECT</Header>
            <List style={{ color: 'white' }}>
              <List.Item><i class="facebook"/> Facebook </List.Item>
              <List.Item><i class="twitter icon"/> Twitter </List.Item>
              <List.Item><i class="youtube icon"/> Youtube </List.Item>
              <List.Item><i class="instagram icon"/> Instagram </List.Item>
              <List.Item><i class="soundcloud icon"/> Soundcloud </List.Item>
              <List.Item><i class="flickr icon"/> Flickr </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: 'white' }}>COMPANY</Header>
            <List style={{ color: 'white' }}>
              <List.Item>Promotions</List.Item>
              <List.Item>Careers</List.Item>
              <List.Item>Contact us</List.Item>
              <List.Item>Privacy Statement</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: 'white' }}>CUSTOMER CARE</Header>
            <List style={{ color: 'white' }}>
              <List.Item>Support</List.Item>
              <List.Item>Registration</List.Item>
              <List.Item>Find a Dealer</List.Item>
              <List.Item>Legacy Products</List.Item>
              <List.Item>Student Discounts</List.Item>
              <List.Item>Certified Refurbished Products</List.Item>
              <List.Item>Recycling</List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </List.Item>
    )
  }
}


class BlueMic extends React.Component {

  render() {
    return (
      <div className='main'>
        <TopMenu/>
        <SecondMenu/>
        <BottomMenu/>
      </div>
    );
  }
}

ReactDOM.render(<BlueMic/>, document.getElementById('root'));