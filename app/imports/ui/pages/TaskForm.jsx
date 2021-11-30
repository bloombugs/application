import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import { AutoForm, SubmitField, TextField, ErrorsField } from 'uniforms-semantic';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import swal from 'sweetalert';
import { TasksCollection } from '../../api/TasksCollection';

const brbo = '/images/Brownbooby.jpg';
const rfbo = '/images/RedFootedBooby.jpg';
const wttr = '/images/WhiteTailed.jpg';
const rttr = '/images/RedTailed.jpg';

const taskSchema = new SimpleSchema({
  text: String }, { tracker: Tracker });
const bridge = new SimpleSchema2Bridge(taskSchema);

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animalName: '', location: '', longitude: '', latitude: '' };
    this.handleClick = this.handleClick.bind(this);
    this.schema = new SimpleSchema({
      text: String,
    }, { tracker: Tracker });
    TasksCollection.attachSchema(this.schema);
  }

  handleClick(e) {
    console.log(e.target);
    this.setState({ text: e.target.alt });
  }

  submit(data, formRef) {
    console.log('submit', data, formRef);
    const { text } = data;
    TasksCollection.insert({ text },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Record added successfully', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    let fRef = null;
    return (
      <AutoForm
        ref={ref => { fRef = ref; }}
        schema={bridge}
        onSubmit={data => this.submit(data, fRef)}
        model={this.state}
        // onChangeModel={model => console.log(model)}
      >
        <Grid centered container>
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
          <Grid.Row>
            <Image
              src={brbo}
              size='small'
              alt='Brown Booby'
              onClick={this.clickt1}
            />
            <Image
              src={rfbo}
              size='small'
              alt='Red Footed Booby'
              onClick={this.clickt1}
            />
          </Grid.Row>
          <Grid.Row>
            <Image
              src={wttr}
              size='small'
              alt='White Tail Tropicbird'
              onClick={this.clickt1}
            />
            <Image
              src={rttr}
              size='small'
              alt='Red Tail Tropicbird'
              onClick={this.clickt1}
            />
          </Grid.Row>
          <Segment>
            <TextField
              name='text'
            />
            <ErrorsField/>
            <SubmitField value='Submit'/>
          </Segment>
        </Grid>
      </AutoForm>
    );
  }
}
export default TaskForm;
