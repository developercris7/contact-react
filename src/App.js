import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Features from './Features';
import Contacts from './Contacts';
import FormNew from './FormNew';
import { useState } from 'react';
import img1 from './images/profile.png'


function App() {

 
  const [checkUpload, setCheckUpload] = useState(img1)
  const [checkEdit, setCheckEdit] = useState(0)
  const [feedback, setFeedback] = useState(false)
  const [formTitle, setFormTitle] = useState('')
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState(JSON.parse(localStorage.getItem('contact')) || [])

  const handleChange = (e) => {
    const newImage = URL.createObjectURL(e.target.files[0])
    setCheckUpload(newImage)
  }

  const handleNewContact = () => {
    setFeedback(true)
    const Email = (email) ? (email) : ("No Mail ID")
    const Address = (address) ? (address) : ("No Address")
    const id = (contact.length) ? (contact[contact.length - 1].id + 1) : (1);
    const newContact = { id, name, number, email: Email, address: Address, image: img1 }
    const updatedList = [...contact, newContact]
    setContact(updatedList)
    localStorage.setItem('contact', JSON.stringify(updatedList))
  }
  // handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckUpload(img1)
    if (checkEdit) {
      handleContactEdit(checkEdit)
    }
    else {
      handleNewContact();
    }
  }
  // delete contact

  const handleContactDelete = (id) => {

    const deletedList = contact.filter((contact) => contact.id !== id)
    setContact(deletedList)
    localStorage.setItem('contact', JSON.stringify(deletedList))
  }

  // Edit Contact

  const handleContactEdit = (id) => {
    setFeedback(true)
    const Email = (email) ? (email) : ("No Mail ID")
    const Address = (address) ? (address) : ("No Address")
    const editedList = contact.map((contact) => (contact.id === id) ? ({ id, name, number, email:Email, address :Address, image: checkUpload }) : (contact))
    setContact(editedList)
    localStorage.setItem('contact', JSON.stringify(editedList))
  }

  const handleFormClose = () => {
    setForm(false)
    setName('')
    setNumber('')
    setEmail('')
    setAddress('')
    setFeedback(false)
  }

  return (
    <div className="App container-fluid p-0">
      <Header />
      <Features
        setForm={setForm}
        search={search}
        setSearch={setSearch}
        setCheckEdit={setCheckEdit}
        setFormTitle={setFormTitle}
      />

      <Contacts
        contact={contact.filter((contact) => contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
        handleContactDelete=
        {handleContactDelete}
        handleContactEdit={handleContactEdit}
        setForm={setForm}
        setCheckEdit={setCheckEdit}
        setFormTitle={setFormTitle}
        setName={setName}
        setNumber={setNumber}
        setEmail={setEmail}
        setAddress={setAddress}
      />
      {form && <FormNew
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
        address={address}
        setAddress={setAddress}
        checkEdit={checkEdit}
        formTitle={formTitle}
        handleFormClose={handleFormClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        feedback = {feedback}
      />}

    </div>
  );
}

export default App;
