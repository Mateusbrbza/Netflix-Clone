import React, { useEffect } from 'react';
import "./Nav.css";


function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          setShow(window.scrollY > 100);
      }); 
  }, []);

  return (<div className={`nav-container ${show && "nav-container-black"}`}>
    <img className="nav-logo" 
    src="http://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    alt="Netflix"
    ></img>
    <img className="nav-avatar" 
    src="https://th.bing.com/th/id/OIP.mRVWwlJuuX-OdFt5NjyGYQHaHa?pid=ImgDet&rs=1" 
    alt="Osmarmedeiros"
    ></img>
    </div>
  );
}

export default Nav