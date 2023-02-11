import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [hamb, sethamb] = useState(false);
  return (
    <>
      <header className="sticky-top">
        <div className="upper_header">
          <ul className="login_signup">
            <li className="compo border-end">
              <i className="fa-solid fa-user mx-2"></i>
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="compo">
              <i className="fa-solid fa-power-off mx-2"></i>
              <a className="nav-link" href="/">
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <div className="main_header">
          <ul id="nvbr">
            <li className="menu">
              <a className="lk active nav-link" href="/">
                Home
              </a>
            </li>
            <li className="menu">
              <a className="lk nav-link" href="/">
                Men
              </a>
            </li>
            <li className="menu">
              <a className="lk nav-link" href="/">
                Women
              </a>
            </li>
            <li className="menu">
              <a className="lk nav-link" href="/">
                Ceramic Watches
              </a>
            </li>
          </ul>
          <div className="main">
            <a className="nav-link" href="https://www.google.com">
              Abcd
            </a>
          </div>

          {hamb && (
            <div className="mobilemenu">
              <ul>
                <li className="fw-bold">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="fw-bold">
                  <a className="nav-link" href="/">
                    Men
                  </a>
                </li>
                <li className="fw-bold">
                  <a className="nav-link" href="/">
                    Women
                  </a>
                </li>
                <li className="fw-bold">
                  <a className="nav-link" href="/">
                    Ceramic Watches
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div className="hmenu text-light" onClick={() => sethamb(!hamb)}>
            <div className="text-light ab">
              {hamb === false ? <GiHamburgerMenu /> : <AiOutlineClose />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
