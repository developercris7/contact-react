import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import completedImage from './images/completed3.jpg'


const FormNew = ({ name, setName, number, setNumber, email, setEmail, address, setAddress, checkEdit, formTitle, handleFormClose, handleSubmit, handleChange, feedback }) => {


  return (
    <div className='form-bg'>

      <div id='newContactForm' >
        {
          (feedback) ? (
            <section
              className="d-flex flex-column align-items-center justify-content-center fw-bold"
            >
              <div
                className='text-end w-100'
              >
                <FaTimes
                  className='fs-4'
                  onClick={handleFormClose}
                  style={{color:"#6C63FF"}}
                  role='button'
                />
              </div>

              <img
                src={completedImage}
                alt="Image"
                className='img-fluid CompletedImage mx-auto'
              />
              <p>Contact Saved Successfully !</p>
              <div
                className="d-grid"
              >
                <button
                  className=" btn btn-primary px-5 fw-bold" onClick={handleFormClose}
                  style={{backgroundColor:"#6C63FF"}}
                  >
                  Done
                </button>
              </div>
            </section>

          ) : (
            <div>
              <div
                className="form-header d-flex justify-content-between align-items-center "
              >

                <span
                  className='fs-4 fw-bold'
                  style={{color:"#6C63FF"}}
                >
                  {formTitle} Contact
                </span>

                <span
                  className='fs-1 fw-bold'
                  role="button"
                  onClick={() => handleFormClose()}
                  aria-label='form close button'
                  style={{color:"#6C63FF"}}
                >
                  &times;
                </span>
              </div>

              <form
                className='d-flex flex-column mt-3' onSubmit={handleSubmit}
              >
                <label
                  className="form-label"
                  htmlFor='Name'
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  autoFocus
                  placeholder='Name'
                  id='Name'
                  className='form-control mb-2 '
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete='off'
                />

                {(checkEdit) ? (
                  <div>
                    <label
                      className="form-label"
                      htmlFor='Name'
                    >
                      Profile
                    </label>
                    <input
                      type="file" className='form-control'
                      onChange={handleChange}
                      multiple
                      id='File'
                
                    />
                  </div>
                ) : ('')}

                <label
                  className="form-label"
                  htmlFor='Phone'
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder='Phone'
                  id='Phone'
                  className='form-control mb-2 '
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  autoComplete='off'

                />

                <label
                  className="form-label"
                  htmlFor='Email'
                >
                  Email
                </label>
                <input
                  type='text'
                  role='email Box'
                  name="email"
                  className='form-control mb-2'
                  placeholder='Email'
                  id='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='off'

                />

                <label
                  className="form-label"
                  htmlFor='Address'
                >
                  Address
                </label>
                <textarea
                  name="address" id="Address" cols="10" rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className='form-control'
                  placeholder='Address'
                  autoComplete='off'

                ></textarea>


                <div
                  className='d-flex justify-content-between '>
                  <button className="btn btn-danger px-4 mt-3" type='reset'
                    onClick={() => handleFormClose()}
                  >
                    Cancel
                  </button>

                  {
                    (!checkEdit) ? (
                      <button
                        type='submit' className='btn mt-3 px-5 d-none d-md-block text-white'
                        style={{backgroundColor:"#6C63FF"}}
                        >
                        Save Contact
                      </button>


                    ) : (<button
                      type='submit' className='btn  mt-3 px-5 d-none d-md-block text-white'
                      style={{backgroundColor:"#6C63FF"}}
                    >
                      Save Changes
                    </button>)

                  }
                  <button
                    type='submit'
                    className='btn text-white mt-3 px-5 d-md-none'
                    style={{backgroundColor:"#6C63FF"}}
                  >
                    Save
                  </button>
                </div>


              </form>
            </div>
          )}

      </div>

    </div>

  )
}

export default FormNew