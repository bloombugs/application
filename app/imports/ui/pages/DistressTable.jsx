import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import PropTypes from 'prop-types';
import '../../../client/dataTables.css';
import { Link } from 'react-router-dom';

const columns = [
  { name: 'Date', selector: row => row.date, sortable: true },
  { name: 'Time', selector: row => row.time, sortable: true },
  { name: 'Animal', selector: row => row.animal, sortable: true },
  { name: 'Name', selector: row => row.name, sortable: true },
  { name: 'Phone', selector: row => row.phone, sortable: true },
  { name: 'Location', selector: row => row.location, sortable: true },
  { name: 'Latitude', selector: row => row.latitude, sortable: true },
  { name: 'Longitude', selector: row => row.longitude, sortable: true },
  { name: 'Description', selector: row => row.description, sortable: true },
  { name: 'Image', selector: row => row.image, sortable: true },
  { name: 'Edit', selector: row => <Link to={`/edit/${row._id}`}>Edit</Link> },
  { name: 'Delete', selector: row => <Link to={`/delete/${row._id}`}>Delete</Link> },
];

export const DistressTable = (props) => {
  // eslint-disable-next-line
  const data = props.reports;
  const tableData = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableData}>
      <DataTable>
        columns={columns}
        data={data}
        noHeader
        pagination
      </DataTable>
    </DataTableExtensions>
  );
};

DistressTable.propTypes = {
  reports: PropTypes.array,
};
