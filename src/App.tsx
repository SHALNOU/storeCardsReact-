import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
	children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="card" style={{ width: '21rem' }}>
			{children}
		</div>
	);
}

function App() {
	return (
		<div>
			<div className="container">
				<Card>

					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>

				</Card>
				<Card>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
					</div>
					<div className="card-body">
						<a href="#" className="card-link">Card link</a>
						<a href="#" className="card-link">Another link</a>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default App;
