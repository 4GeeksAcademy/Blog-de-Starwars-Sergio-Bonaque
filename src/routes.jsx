import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { CharacterDetail } from "./pages/character"; 
import { PlanetDetail } from "./pages/planet";        
import { VehicleDetail } from "./pages/VehicleDetail";
import { Favorites } from "./pages/Favorites";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/planet/:id" element={<PlanetDetail />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    )
);