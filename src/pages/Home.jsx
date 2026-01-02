import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5 ">
			<h1>Characters</h1>
			<div className="d-flex flex-nowrap gap-3 justify-content-center">
				<div className="card">
					<img className="card-img-top" src="https://cdn.zendalibros.com/wp-content/uploads/2025/01/luke-skaywalker-star-wars.jpg" alt=""  style={{ width: '172px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Luke Skywalker</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: blue</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<i class="bi bi-hand-thumbs-up-fill"></i>
					</div>
				</div>

				<div className="card">
					<img className="card-img-top" src="https://www.ecured.cu/images/f/f3/Leia.jpg" alt="" style={{ width: '172px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Leia Organa</h5>
						<small className="d-block">Gender: Female</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/personajesaleatorios/images/2/2f/ThumbnailCA27HS8M.jpg/revision/latest/scale-to-width-down/300?cb=20120205225045&path-prefix=es" alt="" style={{ width: '178px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Obi-Wan Kenobi</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://im.ziffdavisinternational.com/ign_es/screenshot/default/han-solo-texto_n923.jpg" alt="" style={{ width: '178px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Han Solo</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: black</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://sm.ign.com/t/ign_latam/screenshot/default/anakinsky1_7kyq.1280.jpg" alt="" style={{ width: '178px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Anakin Skywalker</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/starwars/images/1/1b/SwillaCorey1.jpg/revision/latest?cb=20050820090427" alt="" style={{ width: '178px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Swilla Corey</h5>
						<small className="d-block">Gender: Female</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/starwars/images/4/43/Tiree.png/revision/latest?cb=20130303144216" alt="" style={{ width: '178px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Gold Two</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
			</div>
			
			<h1>Planets</h1>
			<div className="d-flex flex-nowrap gap-3 justify-content-center">
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/esstarwars/images/4/4e/PurplePlanet-FT.jpg/revision/latest?cb=20160806163714" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Festuciar</h5>
						<small className="d-block">Population:100.000'</small>
						<small className="d-block">Element: Fire</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>

				<div className="card">
					<img className="card-img-top" src="https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/internal_resources/121/Star_Wars_Kepler-22b_Kamino.png?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint" alt="" style={{ width: '172px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Meet 8</h5>
						<small className="d-block">Population:345.975</small>
						<small className="d-block">Element: Water</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" alt="" style={{ width: '172px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Popon</h5>
						<small className="d-block">Population:100.00</small>
						<small className="d-block">Element: Air</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg" alt="" style={{ width: '172px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Mahari</h5>
						<small className="d-block">Population:200.700</small>
						<small className="d-block">Element:Ground</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://cdna.artstation.com/p/assets/images/images/017/390/192/large/brian-hagan-pla-ossus-final.jpg?1555781865" alt="" style={{ width: '172px', height: '150px' }}/>
					<div className="card-body">
						<h5 className="card-title">Pepique</h5>
						<small className="d-block">Population 350.000</small>
						<small className="d-block">Element: God</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
					</div>
				</div>
				
			</div>
		</div>

	);
}; 