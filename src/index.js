import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './components/page/homepage';
import MovieListPage from './components/page/moviespage';
import MovieDetails from './components/page/detailpage';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Navigation from './components/headers/navbars/navbar';
import Footers from './components/footers/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // nested route 
  // layout 
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:category/:property' element={<MovieListPage />} />
          <Route path='/:movieId' element={<MovieDetails />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
