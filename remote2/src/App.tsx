import React from 'react';
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

const Greeting: React.FC = () => {
  return (
    <div>
      <Link to="/landing">GO TO LANDING 2 </Link>
      <h1>hello from GREETING COMPONENT 2</h1>
    </div>
  )
}

const Landing: React.FC = () => {
  return (
    <div>
      <Link to="/">GO TO GREETING 2</Link>
      <h1>hello from LANDING COMPONENT 2</h1>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting/>}/>
        <Route path="landing-2" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;