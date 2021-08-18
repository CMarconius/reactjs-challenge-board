import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CardSection from './Components/CardSection';
import BubbleFlyer from './Components/Challenges/BubbleFlyer/BubbleFlyer';
import BioSection from './Components/BioSection';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>

          {/* MAIN BODY OF PAGE */}

          <BioSection/>

          

          <CardSection/>

          {/* <BubbleFlyer/> */}

          {/* END MAIN BODY OF PAGE */}

        <Footer/>
      </div>
    </>
  );
}

export default App;
