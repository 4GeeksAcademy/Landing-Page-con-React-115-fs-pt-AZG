import React from "react";
import { Navbar } from "./Navbar";
import CardsSection from "./CardsSection";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="pt-1">
				<div className="card text-bg-dark">
					<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwYWNpbyUyMGV4dGVyaW9yfGVufDB8fDB8fHww"
						alt=""
						style={{ height: '600px', objectFit: 'cover' }}
					/>
					<div className="card-img-overlay container-fluid">
						<div className="d-flex flex-column justify-content-center ">
							<h1 className="card-title display-3"><strong>A Warm Welcome!</strong></h1>
							<p className="card-text">El denso y brillante centro de una galaxia. En el centro de nuestra propia galaxia, la Vía Láctea, hay un supermasivo agujero negro y probablemente también lo haya en el centro de casi todas las galaxias.</p>
						</div>
						<div className="d-flex justify-content-start">
							<button className="btn btn-primary position-absolute bottom-0 start-0 m-3 mb-3">
								Mas Info!
							</button>
						</div>
					</div>
				</div>
			</div>
			<CardsSection />
			<Footer />
		</>
	);
};

export default Home;