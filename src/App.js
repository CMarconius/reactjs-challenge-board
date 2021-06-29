import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CardSection from './Components/CardSection';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>

          {/* MAIN BODY OF PAGE */}

          <CardSection/>

          {/* END MAIN BODY OF PAGE */}

        <Footer/>
      </div>
    </>
  );
}

export default App;
