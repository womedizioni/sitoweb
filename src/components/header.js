import React from "react";
import {Link} from "gatsby";
import headerStyles from "./header.module.sass"

const Header = () => {
  return (
    <header className={headerStyles}>
      <nav>
        <ul>
          <li><Link to="/" activeClassName={headerStyles.active}>Home</Link></li>
          <li><Link to="/lacasaeditrice" activeClassName={headerStyles.active}>Casa Editrice</Link></li>
          <li><Link to="/catalogo" activeClassName={headerStyles.active}>Catalogo</Link></li>
          <li><Link to="/lagenda" activeClassName={headerStyles.active}>Agenda</Link></li>
          <li><Link to="laperiodico" activeClassName={headerStyles.active}>l'aperiodico</Link></li>
          <li><Link to="labottega" activeClassName={headerStyles.active}>la bottega</Link></li>
          <li><Link to="contatti" activeClassName={headerStyles.active}>contatti</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
