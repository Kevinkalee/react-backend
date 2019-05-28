import React from "react";
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import Routes from './routes';

ReactDom.render(<Routes />, document.getElementById('root'))

class App extends React.Component {

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;