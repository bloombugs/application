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
            <Header as="h3">Hawaii Wildlife Center:<br/>Rescue and Response<br/></Header><p> for all native species</p>
              <Header as="h3"><a className="black-link" href="tel:[808-884-5000]">(808) 884-5000</a></Header>
            <Image src={dlnr} size="tiny" centered alt='State of Hawaii Department of Land and Natural Resources logo'/>
            <Header as="h3"> State of Hawaii:<br/>Department of Land and Natural Resources<br/>Oahu Division of Forestry and Wildlife (DOFAW)<br/></Header><p> for all native species</p>
              <Header as="h3"><a className="black-link" href="tel:[808-973-9786]">(808) 973-9786</a>
              <a className="black-link" href="tel:[808-295-5896]">(808) 295-5896</a>
              <a className="black-link" href="tel:[808-226-6050]">(808) 226-6050</a></Header>
            <Image src={hpd} size="tiny" centered alt='Honolulu Police Department logo'/>
            <Header as="h3"> Honolulu Police Department:<br/>Non-Emergency Line<br/>
              <a className="black-link" href="tel:[808-529-3111]">(808) 529-3111</a></Header>
            <div className="ui hidden divider"></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Other;
