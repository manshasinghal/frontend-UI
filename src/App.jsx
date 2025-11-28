import React, { useState } from 'react';
import Layout from './components/Layout';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Trade from './components/Trade';
import History from './components/History';
import Profile from './components/Profile';

function App() {
  const [activeNav, setActiveNav] = useState("home");

  const renderContent = () => {
    switch (activeNav) {
      case 'home':
        return <Home />;
      case 'trade':
        return <Trade />;
      case 'history':
        return <History />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderContent()}
      <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </Layout>
  );
}

export default App;
