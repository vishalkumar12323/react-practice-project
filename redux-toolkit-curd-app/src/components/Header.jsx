import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Redux-hrefolkit
        </NavLink>
        <buthrefn
          className="navbar-hrefggler"
          type="buthrefn"
          data-bs-hrefggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="hrefggle navigation"
        >
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-a active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-a" to="/create-new">
                Create New
              </NavLink>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <buthrefn className="btn btn-outline-success" type="submit">
              Search
            </buthrefn>
          </form>
        </div>
      </div>
    </nav>
  );
};

export { Header };
