import React, { Component } from 'react';
import RecordList from './components/RecordList/RecordList'
import RecordService from './services/RecordService'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      records: []
    }
  }

  componentDidMount() {
    RecordService.query()
      .then(({ data }) => {
        this.setState({
          ...this.state,
          records: data
        })
      })
  }

  render() {
    const { records } = this.state
    return (
      <div>
        <h2>Records</h2>
        <RecordList records={records} />
      </div>
    );
  }
}

export default App;