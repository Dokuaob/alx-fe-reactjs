import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './UserProfile.jsx';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Nana Dokua" age={32} bio="Learning React and loving it!" />
      <Footer />
    </>
  );
}

export default App;
