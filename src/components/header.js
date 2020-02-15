import React from "react";
import {Link} from "gatsby";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lacasaeditrice">Casa Editrice</Link></li>
          <li><Link to="/catalogo">Catalogo</Link></li>
          <li><Link to="/lagenda">Agenda</Link></li>
          <li><Link to="laperiodico">l'aperiodico</Link></li>
          <li><Link to="labottega">la bottega</Link></li>
          <li><Link to="contatti">contatti</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
