import React from 'react'
import img1 from "../assets/crop-top-with-palazzo-pant.webp"
import img2 from "../assets/girls-jacket-9.avif"
import img3 from "../assets/bagges-jeans.jpeg"
import img4 from "../assets/crop-top.webp"
import img5 from "../assets/Cargo-mens.avif"
import img6 from "../assets/cotton-plain-shirt.webp"
import img7 from '../assets/Lycra-pants.webp'
import img8 from "../assets/tone-jeans.jpg"

const Product = () => {
  return (
    <div>
			<section className='product-bg'>
        <div className="container">
					<div className="row pt-2">
						<div className="col-md-12">
					    <div className='position-relative'>
					      <h2 className='about-header mt-4 text-center'>Products</h2>
					    </div>
						</div>
					</div>

          {/* Product row-1 */}
				  <div className="row mt-5 ms-5">
						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img1} className="card-img-top shadow-sm" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Top-with-palazzo</p>
                </div>
              </div>
						</div>

						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img2} className="card-img-top shadow-sm" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Jacket</p>
                </div>
              </div>
						</div>

						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img3} className="card-img-top shadow" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Bagges-Jeans</p>
                </div>
              </div>
						</div>

						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img4} className="card-img-top shadow-sm" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Crop-Top</p>
                </div>
              </div>
						</div>
				  </div>

					{/* Product row-2 */}
					<div className="row mt-5 ms-5 pb-5">
						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img6} className="card-img-top shadow-sm" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Mens-shirt</p>
                </div>
              </div>
						</div>

						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img5} className="card-img-top shadow-sm" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Cargo-pants</p>
                </div>
              </div>
						</div>

						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img7} className="card-img-top shadow" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Lycra-pants</p>
                </div>
              </div>
						</div>

						<div className="col-md-3 pb-2">
						  <div className="card" style={{width: "12rem"}}>
                <img src={img8} className="card-img-top shadow-sm" alt="img1" height="180px"/>
                <div className="card-body">
                  <p className="card-text text-center">Tone-jeans</p>
                </div>
              </div>
						</div>
				  </div>
			  </div>
			</section>
    </div>
  )
}

export default Product