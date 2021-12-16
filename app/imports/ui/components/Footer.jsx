import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Image, Header } from 'semantic-ui-react';

const hmar = '/images/hmar-logo.png';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div style={{ background: 'white', padding: '5px' }} className="ui center aligned container">
            <Image src={hmar} width='60px' className="logo" alt='HMAR logo'/>
              Hawai&apos;i Marine Animal Response<br />
              <a href="https://h-mar.org/">Website</a><br />
              <a className="white-link" href="tel:[888-256-9840]">(888) 256-9840</a>
        </div>
      </footer>
    );
  }
}

// Declare the types of all properties.
Footer.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const FooterContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Footer);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(FooterContainer);
