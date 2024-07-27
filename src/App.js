import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  apikey=process.env.MY_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="general" country={'in'} category={'general'} />} />
            <Route exact path="/bussiness" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="business" country={'in'} category={'business'} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="sports" country={'in'} category={'sports'} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="entertainment" country={'in'} category={'entertainment'} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="health" country={'in'} category={'health'} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="science" country={'in'} category={'science'} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pagesize={8} apikey={this.apikey} key="technology" country={'in'} category={'technology'} />} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
