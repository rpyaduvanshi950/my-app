import React, { Component } from 'react'

import { Link } from 'react-router-dom'
export class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">NewsMonkey</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="About">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="sports">sports</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="bussiness">bussiness</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="entertainment">entertainment</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="health">health</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="science">science</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="technology">technology</Link>

                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar