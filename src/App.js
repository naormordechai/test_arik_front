import React, { Component } from 'react';
import RecordService from './services/RecordService'
import logo from './logo.svg';
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
    return (
      <div>
        <h2>Records</h2>
        <div>
          {this.state.records.map(record => (
            <div key={record._id}>
              <audio src={record.src} controls={true} autoPlay={false}></audio>
            </div>
          ))}
        </div>
        <div>test1 <span>2</span></div>
      </div>
    );
  }
}

export default App;
