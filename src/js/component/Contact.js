import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
const Contact = ({ id, name, phone, email, address }) => {
    // console.log(id)
    const { actions } = useContext(Context)
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-white" style={{ width: "1000px" }}>
            <div className="card" style={{ width: "904px" }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img src="https://img.freepik.com/fotos-premium/mujer-gafas-sueter-dientes-blancos-grandes_1277187-60852.jpg?size=626&ext=jpg&ga=GA1.1.565848550.1728154810&semt=ais_hybrid"
                            className="img-fluid rounded-circle d-flex justify-content-center align-items-center" alt="..."
                            style={{ width: "130px", height: "130px" }} />
                    </div>
                    <div className="col-md-9 col-sm-12 d-flex">
                        <div className="card-body d-flex flex-column ps-0 letra">
                            <h5 className="card-title me-2 mb-3 mt-1 d-flex justify-content-start">{name}</h5>
                            <p className="card-text me-2 d-flex justify-content-start"><i className="fa-solid fa-phone-flip me-2"></i>{phone}</p>
                            <p className="card-text me-2  d-flex justify-content-start"><i className="fa-solid fa-envelope me-2"></i>{email}</p>
                            <p className="card-text me-2 mt-0 d-flex justify-content-start"><i className="fa-solid fa-location-dot me-2"></i>{address}</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <Link to={`/edit/${id}`} className="btn btn-white d-flex align-items-top">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Link>

                            {/* <button onClick={() => actions.deleteContact(id)} className="btn btn-white d-flex align-items-top" type="submit">
                                <i className="fas fa-trash-can"></i>
                            </button> */}

                            {/*Button de Bootstrap */}
                            <button type="button" className="btn btn-white d-flex align-items-top" style={{ height: "25px" }}
                                data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                                <i className="fas fa-trash-can"></i>
                            </button>
                            <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${id}`} aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id={`exampleModalLabel${id}`} >Are you sure!</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            If you delete this thing the entire universe will go down!
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                            <button onClick={() => actions.deleteContact(id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes, baby!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Contact;
