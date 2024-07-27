import React, { Component } from 'react'
import Loader from './Fading line.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4 '> <img src={Loader}  alt="" /> </div>
    )
  }
}

export default Spinner