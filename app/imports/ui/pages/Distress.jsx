import React from 'react';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Background = 'https://h-mar.org/wp-content/uploads/2019/05/Seal-and-Turtle.jpg';

class Distress extends React.Component {
  render() {
    return (
      <Grid id='distress' textAlign='center'>
        <Grid.Row verticalAlign='middle' style={{ backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', backgroundPosition: 'center',
          paddingBottom: '30%' }}>
          <Grid.Column width={14}>
            <div className="ui hidden divider"></div>
            <Header as="h3" style={{ color: 'white' }}>If the animal is in distress, it is preferable to call HMAR
              so they can attend to the animal as soon as possible at <a className="white-link" href="tel:[888-256-9840]">(888) 256-9840</a></Header>
            <hr/>
            <Button animated size='big' color='red' icon labelPosition='left'>
              <Icon name='phone volume'/>
              <Button.Content visible>Click for Phone Call</Button.Content>
              <a href="tel:[888-256-9840]">
                <Button.Content hidden>
                  <Icon name="call" size='large'/>
                </Button.Content>
              </a>
            </Button>
            <hr/>
            <Header as="h3" style={{ color: 'white' }}>However, if you cannot call, please fill out the online reporting form</Header>
            <Button size='big' color='green' icon labelPosition='right'>
              <Icon name='file text'/>
              <Link to="/distressform" id='distressFormPage' style={{ color: 'white' }}>
                Click for Online Form
              </Link>
            </Button>
            <hr/><hr/><hr/>
            <Button size='medium' color='grey'>
              <Link to="/infodistress" style={{ color: 'white' }}>
                How to tell if an animal is in distress
              </Link>
            </Button>
            <div className="ui hidden divider" style={{ color: 'white', paddingBottom: '10%' }}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Distress;
