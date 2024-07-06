import './App.css';
import NavBar from './components/NavBar';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='main'>
        <Router/>
      </div>
    </div>
  );
}

export default App;
