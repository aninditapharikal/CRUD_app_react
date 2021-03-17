import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import { Nav } from './components/Nav'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <main className="form-signin">

          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

        </main>
      </BrowserRouter>


    </div>
  );
}

export default App;
