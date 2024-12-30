import React from 'react';
import Header from '../components/Header'; // Import Header (adjust the path if it's in a different folder)
import Steps from '../components/Steps';
import BgSlider from '../components/BgSlider';
import Testimonials from '../components/Testimonials';
import Upload from '../components/Upload'; 
import Footer from '../components/footer';


const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />
      <Footer />



     
    </div>
  );
}

export default Home;
