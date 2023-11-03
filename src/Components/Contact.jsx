import React from 'react'

const Contact = () => {
  return (
    <div>
			<section className='contact-bg'>
        <div className="container">
				<div className="row pt-2">
						<div className="col-md-12">
					    <div className='position-relative'>
					      <h2 className='about-header my-4 text-center'>ContactUs</h2>
					    </div>
						</div>
					</div>
				<form className="row g-3 position-relative pb-4">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label text-white">Name</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label text-white">Email</label>
    <input type="Email" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label text-white">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label text-white">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label text-white">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label text-white">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label text-white">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label text-white" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Contact</button>
  </div>
       </form>
        </div>
			</section>

    </div>
  )
}

export default Contact