import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
// import Arrows from './components/Arrows'
import Paginator from './components/Paginator'
import Button from './components/Button'
// import background from './components/background.png'


function App() {
  return (
    <div>
      {/* <div id="backgroundimg"><img src={background} alt="background"/></div> */}
      <Navbar />
      <Header />
      <About />
      <Paginator />
      <Button />
      {/* <Arrows /> */}
    </div>
  );
}

export default App;
