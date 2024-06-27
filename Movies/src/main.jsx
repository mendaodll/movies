import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import '../globals.css'
import Popular from './pages/Popular.jsx';
import NowPlaying from './pages/NowPlaying.jsx';
import Upcoming from './pages/Upcoming.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}> 
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
