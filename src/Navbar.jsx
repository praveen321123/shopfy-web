import React from 'react'
import { FaPhoenixSquadron } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
				  <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#74B9FF"}}>
            <div className="container-fluid">
              <a className="navbar-brand ms-1" href="#"><span classNameName='me-1'><FaPhoenixSquadron/></span> Shopfy</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/"className="nav-link" href="#">Home</Link>
                  <Link to="about" className="nav-link" href="#">About</Link>
                  <Link to="product" className="nav-link" href="#">Product</Link>
                  <Link to="contact" className="nav-link" href='#'>Contact Us</Link>
                </div>
              </div>
            </div>
          </nav>
				</div>
      </div>
    </div>
  )
}

export default Navbar