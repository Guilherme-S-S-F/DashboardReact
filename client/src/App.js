import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login/' element={<Login/>} />
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
