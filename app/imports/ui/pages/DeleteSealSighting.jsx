import React from 'react';
import { Grid, Loader, Header, Segment, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, HiddenField, SubmitField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Roles } from 'meteor/alanning:roles';
import { SealReport } from '../../api/report/SealReport';
import { NavLink } from 'react-router-dom';

const bridge = new SimpleSchema2Bridge(SealReport.schema);

/** Renders the Page for editing a single document. */
class DeleteSealSighting extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { _id } = data;
    SealReport.collection.remove({ _id: _id }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item deleted successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Delete Seal Sighting</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <SubmitField value='Delete'/>
              <Button as={NavLink} className="infoButton" exact to="/sealadminlist">Cancel</Button>
              <HiddenField name='owner'/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Report in the props object. Uniforms adds 'model' to the props, which we use.
DeleteSealSighting.propTypes = {
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
    Meteor.subscribe(SealReport.adminPublicationName)) : (Meteor.subscribe(SealReport.userPublicationName));
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = SealReport.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(DeleteSealSighting);