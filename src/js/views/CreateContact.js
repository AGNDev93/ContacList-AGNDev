import React, { useState, useContext } from "react"
import { Context } from "../store/appContext";

const CreateContact = () => {
    const { store, actions } = useContext(Context)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    return (
        <form onSubmit={submitForm}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control my-2" name="name" placeholder="name" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control my-2" name="phone" placeholder="phone" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" name="email" placeholder="email" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control my-2" name="address" placeholder="address" />

            <button className="btn btn-outline-success mt-2" type="submit" role="button" > Guardar contacto</button>
        </form>
    );
}