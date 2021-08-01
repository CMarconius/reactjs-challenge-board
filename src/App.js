import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CardSection from './Components/CardSection';
import BubbleFlyer from './Components/Challenges/BubbleFlyer/BubbleFlyer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>

          {/* MAIN BODY OF PAGE */}

          <CardSection/>

          {/* <BubbleFlyer/> */}

          {/* END MAIN BODY OF PAGE */}

        <Footer/>
      </div>
    </>
  );
}

export default App;
