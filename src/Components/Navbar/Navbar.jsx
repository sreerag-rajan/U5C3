import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="home" to="/" >Home</Link>
        <Link className="history" to="/section/history" >history</Link>
        <Link className="Mystery" to="/section/Mystery" >Mystery</Link>
        <Link className="Technology" to="/section/Technology" >Technology</Link>
        <Link className="Mythology" to="/section/Mythology" >Mythology</Link>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
