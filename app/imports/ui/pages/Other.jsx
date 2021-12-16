import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';

const hwc = '/images/HWC-Logo.jpg';
const dlnr = '/images/DLNR.png';
const hpd = '/images/hpd-logo.png';
class Other extends React.Component {
  render() {
    return (
      <Grid id='otherReportPage' textAlign='center' style={{ background: '#87acb5' }}>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={14}>
            <div className="ui hidden divider"></div>
            <Header as="h2" style={{ color: '#f6dcae' }}>Unfortunately HMAR only responds to Hawaiian Monk Seals, Sea Turtles and Seabirds.</Header>
            <Header as="h3">Below are numbers of other organzations that respond to other wildlife.</Header><br/>
            <Image src={hwc} size="tiny" centered alt='Hawaii Wildlife Center logo'/>
            <Header as="h3" >Hawaii Wildlife Center:<br/>Bird and Bat Help Line<br/>(808) 884-5000</Header>
            <Image src={dlnr} size="tiny" centered alt='State of Hawaii Department of Land and Natural Resources logo'/>
            <Header as="h3"> State of Hawaii:<br/>Department of Land and Natural Resources<br/>Marine Animal Response Hotline<br/>(888) 256-9840</Header>
            <Image src={hpd} size="tiny" centered alt='Honolulu Police Department logo'/>
            <Header as="h3"> Honolulu Police Department:<br/>Non-Emergency Line<br/>(808) 529-3111</Header>
            <div className="ui hidden divider"></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Other;
