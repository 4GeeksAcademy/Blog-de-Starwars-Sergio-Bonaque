import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {
	

	const { store, dispatch } = useGlobalReducer()
	
const characters = [
  { name: "Luke Skywalker", gender: "Male", hair_color: "blond", eye_color: "blue" },
  { name: "Leia Organa", gender: "Female", hair_color: "brown", eye_color: "brown" },
  { name: "Obi-Wan Kenobi", gender: "Male", hair_color: "blond", eye_color: "brown" },
  { name: "Han Solo", gender: "Male", hair_color: "black", eye_color: "brown" },
  { name: "Anakin Skywalker", gender: "Male", hair_color: "brown", eye_color: "brown" },
  { name: "Swilla Corey", gender: "Female", hair_color: "blond", eye_color: "brown" },
  { name: "Gold Two", gender: "Male", hair_color: "brown", eye_color: "brown" }
];

const planets = [
  { name: "Festuciar", population: "100.000", element: "Fire" },
  { name: "Meet 8", population: "345.975", element: "Water" },
  { name: "Popon", population: "100.00", element: "Air" },
  { name: "Mahari", population: "200.700", element: "Ground" },
  { name: "Pepique", population: "350.000", element: "God" }
];
	return (
		<div className="text-center mt-5 ">
			<h1>Characters</h1>
			<div className="d-flex flex-nowrap gap-3 justify-content-center">
				<div className="card">
					<img className="card-img-top" src="https://cdn.zendalibros.com/wp-content/uploads/2025/01/luke-skaywalker-star-wars.jpg" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Luke Skywalker</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: blue</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>

				<div className="card">
					<img className="card-img-top" src="https://www.ecured.cu/images/f/f3/Leia.jpg" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Leia Organa</h5>
						<small className="d-block">Gender: Female</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/personajesaleatorios/images/2/2f/ThumbnailCA27HS8M.jpg/revision/latest/scale-to-width-down/300?cb=20120205225045&path-prefix=es" alt="" style={{ width: '178px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Obi-Wan Kenobi</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
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
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://sm.ign.com/t/ign_latam/screenshot/default/anakinsky1_7kyq.1280.jpg" alt="" style={{ width: '178px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Anakin Skywalker</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/starwars/images/1/1b/SwillaCorey1.jpg/revision/latest?cb=20050820090427" alt="" style={{ width: '178px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Swilla Corey</h5>
						<small className="d-block">Gender: Female</small>
						<small className="d-block">Hair Color: blond</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static.wikia.nocookie.net/starwars/images/4/43/Tiree.png/revision/latest?cb=20130303144216" alt="" style={{ width: '178px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Gold Two</h5>
						<small className="d-block">Gender: Male</small>
						<small className="d-block">Hair Color: brown</small>
						<small className="d-block">Eye-color: brown</small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
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
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>

				<div className="card">
					<img className="card-img-top" src="https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/internal_resources/121/Star_Wars_Kepler-22b_Kamino.png?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Meet 8</h5>
						<small className="d-block">Population:345.975</small>
						<small className="d-block">Element: Water</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Popon</h5>
						<small className="d-block">Population:100.00</small>
						<small className="d-block">Element: Air</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Mahari</h5>
						<small className="d-block">Population:200.700</small>
						<small className="d-block">Element:Ground</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
				<div className="card">
					<img className="card-img-top" src="https://cdna.artstation.com/p/assets/images/images/017/390/192/large/brian-hagan-pla-ossus-final.jpg?1555781865" alt="" style={{ width: '172px', height: '150px' }} />
					<div className="card-body">
						<h5 className="card-title">Pepique</h5>
						<small className="d-block">Population 350.000</small>
						<small className="d-block">Element: God</small>
						<small className="d-block"></small>
						<a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill ms-3" viewBox="0 0 16 16">
							<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}; 