import './App.css';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Reviews from './pages/Reviews';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="content">
          <AuthContextProvider>
            <Routes>
              <Route path='/my_account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
              <Route path='/login' element={ <Login />}/>
              <Route path='/create_account' element={<Register />}/>
              {/* <Route path='/login' element={!user ? <Login /> : <Navigate to="/login"></Navigate>}/>
              <Route path='/create_account' element={!user ? <Register /> : <Navigate to="/create_account"></Navigate>}/> */}
              {/* <Route path='/search' element={user ? <SearchResults /> : <Navigate to="/login"/>}/> */}
              {/* <Route path='/my_reviews' element={user ? <Reviews /> : <Navigate to="/create_account"/>}/> */}
              {/* <Route path='/search_results' element={user ? <SearchResults /> : <Navigate to="/create_account"/>}/> */}
              {/* <Route path='/movie_details' element={user ? <MovieDetails /> : <Navigate to="/create_account"/>}/> */}
            </Routes>
          </AuthContextProvider>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
  }

export default App;
