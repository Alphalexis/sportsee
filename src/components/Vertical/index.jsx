import React from "react";
import "./Vertical.css";
import logo1 from '../../assets/icon1.png'
import logo2 from '../../assets/icon2.png'
import logo3 from '../../assets/icon3.png'
import logo4 from '../../assets/icon4.png'

export default function Horizontal() {

return (

<div className="vertical">
<div className="display">
<img src={logo1} alt="logo1" className="icon"/>
<img src={logo2} alt="logo2" className="icon"/>
<img src={logo3} alt="logo3" className="icon"/>
<img src={logo4} alt="logo4" className="icon"/>
</div>
<h4 className="copyright">Copyright, SportSee 2020</h4>
</div>

);
}
