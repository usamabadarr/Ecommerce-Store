import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_DEPARTMENT_NAME } from "../../utils/queries";
import "./styles.css";

const HeaderNavbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const { data } = useQuery(QUERY_DEPARTMENT_NAME);

  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">Ecommerce-Store</Link>

        

        <div className="header-auth">
          {isLoggedIn ? (
            <>
          <input className="navbar-search" type="text" placeholder="Search products..." />
          <select className="navbar-category">
            <option value="">Departments</option>
            {data?.departments?.map(({ id, name }: { id: string; name: string }) => (
              <option key={id} value={name}>{name}</option>
            ))}
          </select>
              <Link className="btn-primary" to="/me">My Profile</Link>
              <button className="btn-secondary" onClick={logout}>Logout</button>
              <Link to="/cart" className="navbar-cart">
            🛒 <span className="cart-count">0</span>
          </Link>
            </>
          ) : (
            <>
              <Link className="btn-primary" to="/login">Login</Link>
              <Link className="btn-secondary" to="/signup">Signup</Link>
            </>
          )}
          
        </div>
      </div>
     
    </header>
  );
};

export default HeaderNavbar;
