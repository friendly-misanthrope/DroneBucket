import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AddPhoto from './components/AddPhoto'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={< Register/>}/>
        <Route path={'/photos/add'} element={< AddPhoto /> } />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
