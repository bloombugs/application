import React from 'react';
import { Grid, Segment, Header, Image, Button, Container } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { ReactSVG } from 'react-svg';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { BirdReport } from '../../api/report/BirdReport';
import { Locations } from '../../api/Locations';

// Create a schema to specify the structure of the data to appear in the form.

const formSchema = new SimpleSchema({
  date: String,
  time: String,
  animalName: String,
  name: String,
  phone: String,
  location: String,
  latitude: Number,
  longitude: Number,
  description: String,
  markers: {
    type: String,
    allowedValues: ['Bands', 'Scar', 'Unknown'],
    defaultValue: 'Unknown',
  },
  numPeople: {
    type: String,
    allowedValues: ['0 - 5', '5 - 10', '10+'],
    defaultValue: '0 - 5',
  },
  image: String,
},
{ tracker: Tracker });

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class BirdSighting extends React.Component {
  constructor(props) {
    super(props);
    this.myDate = React.createRef();
    this.myTime = React.createRef();
    this.myAnimalName = React.createRef();
    this.myName = React.createRef();
    this.myPhone = React.createRef();
    this.myDescription = React.createRef();
    this.myNumPeople = React.createRef();
    this.myImage = React.createRef();
    this.myMarkers = React.createRef();
    this.state = { showing: false, latitude: '',
      longitude: '', location: '', date: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.preserveValues = this.preserveValues.bind(this);
    BirdReport.collection.attachSchema(formSchema);
  }

  preserveValues() {
    this.setState({ date: this.myDate.current.value });
    this.setState({ time: this.myTime.current.value });
    this.setState({ animalName: this.myAnimalName.current.value });
    this.setState({ name: this.myName.current.value });
    this.setState({ phone: this.myPhone.current.value });
    this.setState({ description: this.myDescription.current.value });
    this.setState({ numPeople: this.myNumPeople.current.value });
    this.setState({ markers: this.myMarkers.current.value });
    this.setState({ image: this.myImage.current.value });

  }

  handleShow() {
    // eslint-disable-next-line no-unused-expressions
    this.state.showing ? this.setState({ showing: false }) : this.setState({ showing: true });
    this.preserveValues();
  }

  handleLocation(e) {
    const id = e.target.id;
    const tokens = id.split('-');
    const path1 = tokens[0];
    console.log(path1);
    const loc = Locations.collection.find({ path: path1 }).fetch()[0];
    console.log(loc);
    this.setState({ location: loc.location });
    this.setState({ latitude: loc.latitude });
    this.setState({ longitude: loc.longitude });
    this.preserveValues();
  }

  handleClick(e) {
    console.log(e.target);
    this.setState({ animalName: e.target.alt });
  }

  // On submit, insert the data.
  submit(data, formRef) {
    const { date, time, animalName, name, phone, location, latitude, longitude, description, markers, numPeople, image } = data;
    const username = Meteor.user().username;
    const owner = username;
    BirdReport.collection.insert({ date, time, animalName, name, phone, location, latitude, longitude, description, markers, numPeople, image, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Record added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid id='birdReportPage' centered style={{ background: '#87acb5' }}>
        <Container><Grid.Column>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
          <Header as="h2" textAlign="center" style={{ color: 'white' }}>Seabird Sighting Form</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} model={this.state}>
            <Segment>
              <Grid.Row>
                <div className="wrapper">
                  <div className="my-image-container">
                    <div className='bird-image'><Image onClick={this.handleClick} src='images/Laysan.jpg' width='200px' alt='Laysan Albatross'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/BlackFootAlbatross.jpg' width='200px' alt='Black Footed Albatross'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/ShortTail-3.jpg' width='200px' alt='Short Tailed Albatross'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/RedFootedBooby.jpg' width='200px' alt='Red Footed Booby'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/Brownbooby.jpg' width='200px' alt='Brown Booby'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/Bulwers-2.jpg' width='200px' alt="Bulwer's Petrel"/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/BandRumpedStorm.jpg' width='200px' alt='Band Rumped Storm Petrel'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/BoninPetrel.jpg' width='200px' alt='Bonin Petrel'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/WedgeShearwater.jpg' width='200px' alt='Wedge Tailed Shearwater'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/ChristmasShearwater.jpg' width='200px' alt='Christmas Shearwater'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/NewellShearwater.jpg' width='200px' alt='Newell Shearwater'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/BlueNoddy.jpg' width='200px' alt='Blue Noddy'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/BrownNoddy-2.jpg' width='200px' alt='Brown Noddy'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/BlackNoddy.jpg' width='200px' alt='Black Noddy'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/WhiteTailed.jpg' width='200px' alt='White Tail Tropicbird'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/RedTailed.jpg' width='200px' alt='Red Tail Tropicbird'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/Great_frigatebird_male-2.jpg' width='200px' alt='Great frigatebird male'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/Great_frigatebird_female.jpg' width='200px' alt='Great frigatebird female'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/Whitetern.jpg' width='200px' alt='White Tern'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/GreyBackedTern.jpg' width='200px' alt='Grey Backed Tern'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/SootyTern.jpg' width='200px' alt='Sooty Tern'/></div>
                    <div className="bird-image"><Image onClick={this.handleClick} src='images/unknown_bird.png' width='200px' alt='Unknown Seabird'/></div>
                  </div>
                </div>
              </Grid.Row>
            </Segment>
            <Segment>
              <Header textAlign='center'> Contact Info</Header>
              <TextField name='date' type='date' inputRef={this.myDate}/>
              <TextField name='time' type='time' inputRef={this.myTime}/>
              <p>Click on picture above for bird name. For unknown bird, click the last image.</p>
              <TextField name='animalName' inputRef={this.myAnimalName}/>
              <TextField name='name' inputRef={this.myName}/>
              <TextField name='phone' decimal={false} inputRef={this.myPhone}/>
              <TextField name='location' placeholder='Enter location or click a pin from the Get Location map'/>
              <Button onClick={this.handleShow} type='button'>{this.state.showing ? 'Location set' : 'Get Location'}</Button>
              {this.state.showing && <Segment>
                <ReactSVG src="/images/Oahu_NS_all.svg" onClick={this.handleLocation}/>
              </Segment>}

              <h2>Please provide the following: </h2>
              <ul>
                <li>Location Description (i.e. landmarks or building near by)</li>
                <li>Animal Behavior (i.e. sleeping, moving, eating, nesting)</li>
                <li>If there is more than one animal</li>
                <li>Interaction between the animal and people/other animals</li>
              </ul>
              <LongTextField name='description' inputRef={this.myDescription} placeholder='Example: Two baby birds fell from their nest by the campsite at Sherwoods campsite '/>

              <SelectField name='markers' inputRef={this.myMarkers}/>
              <SelectField name='numPeople' inputRef={this.myNumPeople}/>
              <TextField name='image' inputRef={this.myImage}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
          <div className="ui hidden divider"></div>
        </Grid.Column></Container>
      </Grid>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Location documents.
  const subscription = Meteor.subscribe(Locations.userPublicationName);
  const subscription2 = Meteor.subscribe(Locations.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  const ready2 = subscription2.ready();
  // Get the Report documents
  const reports = Locations.collection.find({}).fetch();
  return {
    reports,
    ready,
    ready2,
  };
})(BirdSighting);
