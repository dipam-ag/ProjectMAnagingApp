import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import ProjPage from './components/ProjPage';

function App() {
  
    return (
          <Router>
             <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
       <NavLink to="/"  className="button rounded">
         <span className="icon-home"></span>
         Home
       </NavLink>
       <NavLink to="/projects" className="button rounded">
         Projects
     </NavLink>
      </header>
          <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjPage />} />
             </Routes>
            </div>
          </Router>
       );
  
}

export default App;
