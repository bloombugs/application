import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { TurtleReport } from '../../api/report/TurtleReport';

/** Renders a single row in the List Report (Admin) table. See pages/ListReportAdmin.jsx. */
class TurtleReportItemAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    console.log(e.target);
    TurtleReport.collection.remove({ _id: this.props.report._id });
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.report.date}</Table.Cell>
        <Table.Cell>{this.props.report.time}</Table.Cell>
        <Table.Cell>{this.props.report.animalName}</Table.Cell>
        <Table.Cell>{this.props.report.name}</Table.Cell>
        <Table.Cell>{this.props.report.phone}</Table.Cell>
        <Table.Cell>{this.props.report.location}</Table.Cell>
        <Table.Cell>{this.props.report.latitude}</Table.Cell>
        <Table.Cell>{this.props.report.longitude}</Table.Cell>
        <Table.Cell>{this.props.report.description}</Table.Cell>
        <Table.Cell>{this.props.report.markers}</Table.Cell>
        <Table.Cell>{this.props.report.numPeople}</Table.Cell>
        <Table.Cell>{this.props.report.image}</Table.Cell>
        <Table.Cell>
          <Link to={`/editturtle/${this.props.report._id}`}>Edit</Link>
        </Table.Cell>
        <Table.Cell>
          <Link to={`/deleteturtle/${this.props.report._id}`}>Delete</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
TurtleReportItemAdmin.propTypes = {
  report: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    animalName: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    description: PropTypes.string,
    markers: PropTypes.string,
    numPeople: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }),
};

export default withRouter(TurtleReportItemAdmin);
