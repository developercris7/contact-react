import React from 'react'
import { BsPersonFillAdd } from 'react-icons/bs'

const Features = ({ setForm, search, setSearch, setCheckEdit, setFormTitle }) => {

  const handleNewContact = () => {
    setForm(true)
    setCheckEdit(0);
    setFormTitle('Create New ')
  }

  return (
    <div className='d-flex justify-content-between mt-3'>
      <form className='ms-md-2' id='form1' onSubmit={(e) => e.preventDefault()}>
        <label className='form-label label'
          htmlFor='search'
        >
          Search
        </label>
        <input type="text"
          className='form-control
            border border-dark'
          placeholder='Search Here....'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </form>
      <button
        className='btn text-white d-md-block d-none fw-bold d-flex justify-content-center align-items-center me-md-3 '
        onClick={() => handleNewContact()}
        style={{backgroundColor:"#6C63FF"}}
      >

        <span> Create New </span>                         <BsPersonFillAdd
          className='fs-5'
        />
      </button>

      <button
        className="btn text-white  ms-5 me-2 d-md-none p-0 px-2 fs-2 "
        onClick={() => handleNewContact()
        }
        style={{backgroundColor:"#6C63FF"}}
      >
        <BsPersonFillAdd />
      </button>
    </div>
  )
}

export default Features