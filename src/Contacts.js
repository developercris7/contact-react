import React from 'react'
import { FaEdit, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { BsPersonFillAdd } from 'react-icons/bs'
import img1 from './images/not found.png'

const Contacts = ({ contact, handleContactDelete, setForm, setCheckEdit, setFormTitle, setName, setNumber, setEmail, setAddress }) => {

    const handleNewContact = () => {
        setForm(true)
        setCheckEdit(0);
        setFormTitle('Create New ')
    }


    const handleEditContact = (id) => {
        setForm(true)
        setCheckEdit(id);
        setFormTitle('Edit')
        const editOne = contact.filter((contact) => contact.id === id)
        setName(editOne[0].name)
        setNumber(editOne[0].number)
        setEmail(editOne[0].email)
        setAddress(editOne[0].address)
    }

    return (

        <main className='mx-auto mt-4 '>
            {
                (contact.length) ? (
                    contact.map((contact) =>
                        <div className="card border border-dark" key={contact.id}>
                            <div className="card-header  d-flex justify-content-between align-items-center py-2"
                             style={{backgroundColor:"#6C63FF"}}
                            >
                                <span className='text-white fw-bold fs-5'
                                >
                                    Details
                                </span>
                                <span className='text-white fs-5'
                                    role='button' onClick={() => handleContactDelete(contact.id)}>
                                    <FaTimes />
                                </span>
                            </div>
                            <div className="card-body  text-center" >
                                <div className="profile 
                                mx-auto"
                                    style={{ backgroundImage: `url(${contact.image})` }}
                                >
                                </div>
                                <div className='details text-center mx-auto mt-1'>
                                    <strong className='fs-5'> {contact.name}</strong>
                                    <br />
                                    <span className='fs-6'>{contact.number}</span>
                                    <br />
                                   <span className='fs-6'> {contact.email}</span>

                                    <address className='text-justify '>
                                        <span className='text-muted'>{contact.address}</span>
                                    </address>
                                </div>

                            </div>
                            <div className="card-footer">
                                <button className="EditBtn  info float-start fw-bold d-flex align-items-center gap-1" onClick={() => handleEditContact(contact.id)}
                                
                                >
                                    <span>Edit</span>
                                    <FaEdit />
                                </button>

                                <button
                                    className="btn btn-outline-danger float-end fw-bold  d-flex align-items-center gap-1"
                                    onClick={() => handleContactDelete(contact.id)}
                                >
                                    <span>Delete</span> <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    )
                ) :

                    <div className="box d-flex flex-column mt-5">

                        <img src={img1} alt="Image" className='img-fluid img' />
                        <p className='fs-1 '>No Contacts Found !</p>
                        <button className='btn
                        text-white mx-auto fw-bold d-flex justify-content-center align-items-center createBtn' onClick={() => handleNewContact()}
                        style={{backgroundColor:"#6C63FF"}}
                        >
                            <span> Create New </span>
                            <BsPersonFillAdd
                                className='fs-5 ms-1'
                            />

                        </button>
                    </div>
            }

        </main>


    )
}

export default Contacts