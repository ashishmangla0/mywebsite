import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Container from './components/container';
import NavbarBrand from './components/navbarBrand';
import Logo from './components/Logo';
function App() {
  return (
    <>
<Header>
    <Container>
      <NavbarBrand href="/">
        <Logo text="udemy" />
      </NavbarBrand>
    </Container>

</Header>
<section>
  <Container>
    this is container
  </Container>
</section>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </> 
  );
}
export default App;
