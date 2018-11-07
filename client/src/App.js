import React from "react";
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import Routes from './routes';

ReactDom.render(<Routes />, document.getElementById('root'))

class App extends React.Component {

}

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default App;