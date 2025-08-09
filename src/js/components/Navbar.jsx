import React from "react"

export const Navbar = () => {
    console.log("navbar esta funcionando");
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark pb-5 ">
            <div className="container-fluid ">
                <a className="navbar-brand fw-bold fs-2" href="#">Galaxias</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div></div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto me-5 ft-4">
                        <li className="nav-item">
                            <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

