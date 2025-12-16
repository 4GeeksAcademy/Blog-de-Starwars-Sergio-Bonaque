import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="card">
				<img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">...</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
			</div>
		</div>
	);
}; 