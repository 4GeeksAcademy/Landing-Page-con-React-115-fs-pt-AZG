import React from "react";

const card = ({ title, description, image, buttonText = "Go somewhere " }) => {

        return (

                <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card h-100">
                                <img src={image} className="card-img-top" alt={title} style={{ height: '180px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text flex-grow-1">{description}</p>
                                        <a href="#" className="btn btn-primary mt-auto">{buttonText}</a>
                                </div>
                        </div>
                </div>
        );
};

export default card;