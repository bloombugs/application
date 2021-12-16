import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { DistressTable } from './DistressTable';
import { DistressReport } from '../../api/report/DistressReport';
import { BirdTable } from './BirdTable';
import { BirdReport } from '../../api/report/BirdReport';
import { SealTable } from './SealTable';
import { SealReport } from '../../api/report/SealReport';
import { TurtleTable } from './TurtleTable';
import { TurtleReport } from '../../api/report/TurtleReport';

/** Renders a table containing all of the Report documents. Use <ReportItem> to render each row. */
class UserListReport extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <div id='user-list-report-page' className="ui fluid vertical menu">
        <Header as="h2" textAlign="center">User Distress Reports</Header>
        <DistressTable reports={this.props.reports2}/>
        <Header as="h2" textAlign="center">User Seabird Reports</Header>
        <BirdTable reports={this.props.reports} />
        <Header as="h2" textAlign="center">User Hawaiian Monk Seal Reports</Header>
        <SealTable reports={this.props.reports3}/>
        <Header as="h2" textAlign="center">User Sea Turtle Reports</Header>
        <TurtleTable reports={this.props.reports4}/>
      </div>
    );
  }
}

// Require an array of Report documents in the props.
UserListReport.propTypes = {
  reports: PropTypes.array.isRequired,
  reports2: PropTypes.array.isRequired,
  reports3: PropTypes.array.isRequired,
  reports4: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Report documents.
  const subscription = Meteor.subscribe(BirdReport.userPublicationName);
  // const subscription2 = Meteor.subscribe(BirdReport.adminPublicationName);
  const subscription2 = Meteor.subscribe(DistressReport.userPublicationName);
  // const subscription4 = Meteor.subscribe(DistressReport.adminPublicationName);
  const subscription3 = Meteor.subscribe(SealReport.userPublicationName);
  // const subscription6 = Meteor.subscribe(SealReport.adminPublicationName);
  const subscription4 = Meteor.subscribe(TurtleReport.userPublicationName);
  // const subscription8 = Meteor.subscribe(TurtleReport.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready() && subscription2.ready() && subscription3.ready() && subscription4.ready();
  // Get the Report documents
  const reports = BirdReport.collection.find({}).fetch();
  const reports2 = DistressReport.collection.find({}).fetch();
  const reports3 = SealReport.collection.find({}).fetch();
  const reports4 = TurtleReport.collection.find({}).fetch();
  return {
    reports,
    reports2,
    reports3,
    reports4,
    ready,
  };
})(UserListReport);
