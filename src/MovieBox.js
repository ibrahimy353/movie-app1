import { Modal } from "react-bootstrap";
import React from "react";

const API_IMG="https://image.tmdb.org/t/p/w500"
const MovieBox =({title, poster_path, vote_avarage,release_date, overview})=>{
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path}/>
                <div className="card-body">
                    <button type="button" className="btn btn-dark">View More</button>

                    <Modal>
                        <Modal.Header closeButton>
                            <Modal.Title>

                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" src={API_IMG+poster_path}></img>
                            <h3>{title}</h3>
                            <h4>ImDb:</h4>
                            <h5>Release Date</h5>
                            <br></br>
                            <h6>Overview</h6>
                            <p>overview</p>

                        </Modal.Body>

                    </Modal>
                
                </div>
            </div>
        

        </div>
    )
}

export default MovieBox;