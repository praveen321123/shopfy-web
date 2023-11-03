import React from 'react'
import { ImTruck, ImAddressBook } from "react-icons/im"
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareWhatsapp} from "react-icons/fa6";

const About = () => {
  return (
    <div>
        <section className='about-bg'>
				  <div className="container">
						<div className="row">
              <div className="col-md-6">

						  </div>
						  <div className="col-md-6 justify-content-center">
							  <h2 className='about-header mt-4 text-center position-relative'>About</h2>
								<h1 className='text-end mt-4'>Custom<br/>your own clothes</h1>
								<p className='mt-4'><span className='me-1 text-primary'><ImTruck/></span>Delivery of mail directly to the recipient's address without charge to the recipient: Before free delivery people had to pick up their mail at the post office or pay a letter carrier to Grap your order🤩</p>
								<div class="d-grid gap-2 col-6 mx-auto mt-2">
                  <button class="btn btn-dark mt-2" type="button"><ImAddressBook/>&nbsp;Contact Us</button>
                </div>
						  </div>
						</div>
						<div className="row">
              <div className="col-md-12 text-end mt-3"> 
								<span className='fs-2 p-1'><FaSquareFacebook /></span>
								<span className='fs-2 p-1'><FaSquareInstagram/></span>
								<span className='fs-2 p-1'><FaSquareTwitter/></span>
								<span className='fs-2 p-1'><FaSquareWhatsapp/></span>
							</div>
						</div>
          </div>
        </section>
    </div>
  )
}

export default About