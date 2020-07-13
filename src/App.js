import React from 'react';
import ReactDOM from 'react-dom';
// import Memo from './Example-2/Memo';
// import Memo from './Example-3/Memo';
// import Memo from './Example-4/Memo';
// import Memo from './Example-5/Memo';
import List from './Example-1/List';
import Topics from './Example-1/Topics';
import './App.css';

export default class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    const timer = setTimeout(() => {
      this.setState({ loading: false })
    }, 3000);
    return () => clearTimeout(timer);
  }

  renderLoader = () => <div className="loader"></div>;
  render() {
    return (
      <div className="App">
        {this.state.loading ? (this.renderLoader()) : (
          <>
            <Topics />
            <List />
          </>
        )}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));