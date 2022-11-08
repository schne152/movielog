import './App.css';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Reviews from './pages/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/search' element={<Search />}/>
          <Route path='/my_reviews' element={<Reviews />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/create_account' element={<Register />}/>
          <Route path='/search_results' element={<SearchResults />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
