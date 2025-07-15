import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx';
import Counter from './components/Counter.jsx'; // 👈 Import the Counter component

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Nana Dokua" age={32} bio="Learning React and loving it!" />
      <Counter /> {/* 👈 Use the Counter component here */}
      <Footer />
    </>
  );
}

export default App;
