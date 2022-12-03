import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">Quotes center</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Quotes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/quotes/add" className="nav-link">
                Submit new quote
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;