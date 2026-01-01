import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5 ">
			<h1>Characters</h1>
			<div className="d-flex flex-nowrap gap-3 justify-content-center">
				<div className="card" style={{ width: "180px" }}>
					<img className="card-img-top" src=".../100px180/" alt="" />
					<div className="card-body">
						<h5 className="card-title">Luke Skywalker</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: blue</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>

				<div className="card" style={{ width: "180px" }}>
					<img className="card-img-top" src=".../100px180/" alt="" />
					<div className="card-body">
						<h5 className="card-title">Leia Organa</h5>
						<small className="d-block">Gender: Female</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
			</div>
			<h1>Planets</h1>
			<div className="card">
				<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">...</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>

	);
}; 