import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid text-white">
            <Link className="navbar-brand text-white" to="/">Newzzo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/spo">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/ent">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/bus">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/tec">Tech</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/sci">Science</Link>
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
