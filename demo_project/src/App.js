
import './App.css';
import NavComp from './Components/NavComp';
import AboutComp from './Components/AboutComp'
import HomeComp from './Components/HomeComp';
import SkillsComp from './Components/SkillsComp';
import WorkComp from './Components/WorkComp';
import ContactComp from './Components/ContactComp';
import FooterComp from './Components/FooterComp';

function App() {
  return (
    <div className="App">
      <NavComp/>
      <HomeComp/>
      <AboutComp/>
      <SkillsComp/>
      <WorkComp/>
      <ContactComp/>
      <FooterComp/>

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
