export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-danger text-white ">

            <a className="navbar-brand" href="#">
                <img src="https://img.icons8.com/color/512/star-wars.png" width="80" height="80" className="d-inline-block align-top ms-4 " alt="" />
            </a>
            <a className="btn btn-primary bg-dark text-white rounded-pill border-0 me-4" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favorites 0
            </a>
        </nav>
    )
}

