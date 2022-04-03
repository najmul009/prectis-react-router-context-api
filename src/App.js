import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componenets/About/About';
import Header from './Componenets/Header/Header';
import NotFound from './Componenets/NotFound/NotFound';
import Orders from './Componenets/Orders/Orders';
import Shop from './Componenets/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
