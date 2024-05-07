import React from 'react';
import { Link } from 'react-router-dom';
// import './mainheader.css'; 

function MainHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light main-header">
      <div className="container">
        <Link className="navbar-brand" to="/">1310</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link className="nav-link" to="#">Каталог</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Взуття</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Одяг</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Аксесуари</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Бренди</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Знижки</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Блог</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">RU</Link></li>
          </ul>
          <div className="header-icons">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
