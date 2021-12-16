import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, HiddenField, SelectField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Roles } from 'meteor/alanning:roles';
import { NavLink, Redirect } from 'react-router-dom';
import { BirdReport } from '../../api/report/BirdReport';

const bridge = new SimpleSchema2Bridge(BirdReport.schema);

/** Renders the Page for editing a single document. */
class EditBirdSighting extends React.Component {

  constructor(props) {
    super(props);
    this.state = { redirectToReferer: false };
  }

  // On successful submit, insert the data.
  submit(data) {
    const { date, time, animalName, name, phone, location, latitude, longitude, description, markers, numPeople, image, Submit, _id } = data;
    BirdReport.collection.update(_id, { $set: { date, time, animalName, name, phone, location, latitude, longitude, description, markers, numPeople, image, Submit } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success').then(() => {
        this.setState({ redirectToReferer: true });
      })));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {

    const { from } = { from: { pathname: '/birdadminlist' } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Seabird Sighting</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='date' type='date'/>
              <TextField name='time' type='time'/>
              <TextField name='animalName'/>
              <TextField name='name'/>
              <TextField name='phone' decimal={false}/>
              <TextField name='location'/>
              <TextField name='latitude'/>
              <TextField name='longitude'/>
              <LongTextField name='description'/>
              <SelectField name='markers'/>
              <SelectField name='numPeople'/>
              <TextField name='image'/>
              <SubmitField value='Submit'/>
              <HiddenField name='owner'/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Report in the props object. Uniforms adds 'model' to the props, which we use.
EditBirdSighting.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Report documents.
  const subscription = Roles.userIsInRole(Meteor.userId(), 'admin') ? (
    Meteor.subscribe(BirdReport.adminPublicationName)) : (Meteor.subscribe(BirdReport.userPublicationName));
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = BirdReport.collection.findOne('documentId');
  return {
    doc,
    ready,
  };
})(EditBirdSighting);
