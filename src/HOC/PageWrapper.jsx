// hoc/withSidebar.js
import React, { useState } from 'react';

// Shared components
import Navbar from '../pages/home/components/Navbar';
import Sidebar from '../pages/home/components/Sidebar';
import Footer from '../pages/home/components/Footer';

const PageWrapper = (WrappedComponent) => {
  const WithSidebar = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar((prev) => !prev);

    return (
      <div className="App">
        <Navbar click={toggleSidebar} />
        <Sidebar effect={sidebar} click={toggleSidebar} />

        <main>
          <WrappedComponent {...props} />
        </main>

        <Footer />
      </div>
    );
  };

  return WithSidebar;
};

export default PageWrapper;
