import React,{useState,useCallback} from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './components/index';

import Header from './components/Header';
import NavbarBrand from './components/navbarBrand';
import Logo from './components/Logo';

function App() {
  
  const [showText, setShowText] = useState(true);
  const aa = () =>{
    setShowText(!showText);
  }

  return (
    <>
      <Header>
        <Container>
          <NavbarBrand href="/" className="Header__navbar" >
            <Logo text="udemy" logoLink="logo.png" className="header__Logo" />
          </NavbarBrand>
          <nav className="ml-auto">
              <ul className="navbar-nav">
                <li>
                  <a>
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    About
                  </a>
                </li>
                <li>
                  <a>Services
                  </a>
                </li>
                <li>
                  <a>
                    Products
                  </a>
                </li>
                <li>
                  <a>
                    Industries
                  </a>
                </li>
                <li>
                  <a>
                    Career
                  </a>
                </li>
                <li>
                  <a>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <span onClick={aa}>
              clickme
            </span>
        </Container>
      </Header>
      <section>
        <Container>
          this is container <p> 
    {showText && <div>This text will show!</div>}</p>
  </Container>
      </section>
      
    </>
  );
}
export default App;
