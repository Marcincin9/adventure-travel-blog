import React from 'react';
import './App.css';
import BlogHeader from './components/BlogHeader';
import BlogIntro from './components/BlogIntro';
import CardThingsTodo from './components/Reusable/CardThingsTodo';
import CardWhereToStay from './components/Reusable/CardWhereToStay.';
import BlogFooterTop from './components/BlogFooterTop';
import BlogFooterBottom from './components/BlogFooterBottom';

const App = () => {
  return (
    <div>
      <BlogHeader />
      <div className="container mx-auto py-14 px-8 lg:max-w-7xl md:items-center md:px-8">
        <BlogIntro />
        <div className="text-3xl text-center font-bold pt-20 pb-5 text-sky-800">
          CHOOSE THINGS TO DO
        </div>
        <CardThingsTodo />
        <div className="text-3xl text-center font-bold pt-20 pb-5 text-sky-800">
          CHOOSE WHERE TO STAY
        </div>
        <CardWhereToStay />
      </div>
      <BlogFooterTop />
      <BlogFooterBottom />
    </div>
  );
};

export default App;
