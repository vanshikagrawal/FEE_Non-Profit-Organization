import React, { useState } from 'react';

const First =()=>{
    
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    return(
<>

  <div className="hearder">
    <div className="dark-bar">
      <a href="">
        <img
          className="text"
          src="images/image_9.png"
          alt="               "
          width={194}
          height={15}
        />
      </a>
    </div>
    <div className="row-7 group">
      <div className="logo group">
        <img
          className="ribbon-1402015_960_720"
          src="images/ribbon-1402015_960_720.png"
          alt=""
          width={34}
          height={69}
        />
        <p className="text-2">
          <strong className="text-style">non profit</strong>
          <br />
          organization
        </p>
      </div>
      <nav className="nav">
      <ul className={`nav-list group ${menuVisible ? 'show' : ''}`}>
          <li>
            <p className="nav-item-1">
              <a href="#">Home</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-2">
              <a href="#a">About</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-3">
              <a href="#c">Causes</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-4">
              <a href="#e">Event</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-5">
              <a href="#n">News</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-6">
              <a href="#c">Contact</a>
            </p>
          </li>
        </ul>
      </nav>
      <button className="menu-btn" onClick={toggleMenu} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </div>
  </div>

</>
    )
}
export default First