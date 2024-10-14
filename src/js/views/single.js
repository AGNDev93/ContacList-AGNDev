import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Single = () => {
  //const { store, actions } = useContext(Context);
  const { idContact } = useParams();
  const [currentContact, setCurrentContact] = useState({ name: "", phone: "", email: "", address: "" })
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  async function submitForm(e) {
    e.preventDefault()
    let formData = new FormData(e.target)
    let updatedContact = {}
    formData.forEach((val, key) => updatedContact[key] = val)
    // console.log(updatedContact)
    // console.log(currentContact.id)
    if (currentContact.id) {
      let resp = await actions.updateContact(currentContact.id, updatedContact)
      if (resp) {
        navigate("/")
      }
      else {
        alert("Ups, algo salió mal !!")
      }
    } else {
      // console.log("Create")
      let resp = await actions.createNewContact(updatedContact)
      // console.log(resp)
      if (resp) {
        navigate("/")
      }
      else {
        alert("Ups, algo salió mal !!")
      }
    }
  }

  useEffect(() => {
    if (store.contacts) {
      if (store.contacts.length > 0 && idContact) {
        let contact = store.contacts.find(contact => contact.id == idContact)
        setCurrentContact(contact)
      }
    }
  }, [idContact, store.contacts])

  return (
    <div className="jumbotron container bg-white mt-5" style={{ width: "1030px", height: "787px" }}>
      <h1 className="display-4 d-flex justify-content-center pt-3">{!idContact ?
        "Add a new contact" :
        "Actualizando contacto " + currentContact.id
      }</h1>
      {store.loading ?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        :
        <form onSubmit={submitForm}>
          <label htmlFor="Full Name">Full Name</label>
          <input type="text" className="form-control  mt-1 my-3" name="name" placeholder="Full Name" value={currentContact.name} onChange={(e) => setCurrentContact({ ...currentContact, name: e.target.value })} />
          <label htmlFor="Enter Phone">Enter phone</label>
          <input type="text" className="form-control mt-1 my-3 h1" name="phone" placeholder="Enter phone" value={currentContact.phone} onChange={(e) => setCurrentContact({ ...currentContact, phone: e.target.value })} />
          <label htmlFor="Enter Email">Enter Email</label>
          <input type="email" className="form-control mt-1 my-3" name="email" placeholder="Enter email" value={currentContact.email} onChange={(e) => setCurrentContact({ ...currentContact, email: e.target.value })} />
          <label htmlFor="Enter address<">Enter address</label>
          <input type="text" className="form-control mt-1 my-3" name="address" placeholder="Enter address" value={currentContact.address} onChange={(e) => setCurrentContact({ ...currentContact, address: e.target.value })} />
          <button className="btn btn-primary mt-1 container-fluid" type="submit" role="button" >Save</button>
          <Link to="/ ">
            <span className="navbar-brand mb-0 h1">or get back to contacts</span>
          </Link>
        </form>
      }
    </div>
  );
};
