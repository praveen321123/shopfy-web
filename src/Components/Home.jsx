import React from 'react'
import "../stylings/style.css"
import { RiArrowRightLine } from "react-icons/ri"
import img1 from "../assets/fashion-png-picture.png"

const Home = () => {
  return (
    <div>

			<section className='home-bg'>
			<div className="container position-relative">
        <div className="row pb-4">
					<div className="col-md-6 my-5">
            <h3 className='text-success my-2'>Diwali Collections</h3>
						<h1 className='my-4'>Fall - winter <br/>Collection 2023</h1>
						<p>A specialist label creating luxury essentials.ethically crafted with an unwavering commitment to exceptional quailty</p>
						<button type="button" class="btn btn-dark mt-2 px-3 text-uppercase font-monospace">Shop now<span className='text-white ms-2'><RiArrowRightLine/></span></button>
					</div>
					<div className="col-md-6 d-flex justify-content-end">
           <img src={img1} className='mt-4' alt='img-1'  width="300px"/>
					</div>
				</div>
      </div>
			</section>

    </div>
  )
}

export default Home