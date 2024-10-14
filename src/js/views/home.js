import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Contact from "../component/Contact";
import { Navbar } from "../component/navbar";
// import { Navbar } from "../component/navbar";


const Home = () => {
	const { store, actions } = useContext(Context);
	//id, name, phone, email, address 
	return (
		<div className="text-center container-fluid bg-white pb-4" style={{ width: "1024px" }}>
			<Navbar />
			{store.contacts == null ? <h1>Cargando contactos...</h1> :
				store.contacts == false ? <h1>No hay contactos</h1> :
					store.contacts && store.contacts.length > 0 && store.contacts.map((item) => (
						<Contact
							key={item.id}
							id={item.id}
							name={item.name}
							phone={item.phone}
							email={item.email}
							address={item.address}
						/>
					)
					)}
		</div>
	);
}
export default Home;