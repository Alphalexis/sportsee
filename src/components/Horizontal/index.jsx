import React from "react";
import "./Horizontal.css";
import logo from '../../assets/logo.png'

export default function Horizontal() {

return (
<header>
<nav className="horizNav">
<ul>
<li><img src={logo} alt="logo" /></li>
<li>Accueil</li>
<li>Profil</li>
<li>Réglages</li>
<li>Communauté</li>
</ul>
</nav>
</header>
);
}
