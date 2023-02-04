import './App.css';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Reviews from './pages/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/search' element={<SearchResults />}/>
            <Route path='/my_reviews' element={<Reviews />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/create_account' element={<Register />}/>
            <Route path='/search_results' element={<SearchResults />}/>
            <Route path='/movie_details' element={<MovieDetails />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
