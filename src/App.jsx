// App.jsx
import React from 'react';
import Layouts from './components/Layouts';
import RoutesPage from './routes';
import SidebarMenu from './components/Sidebar/SidebarMenu';


function App() {
  return (
    <Layouts>
      <SidebarMenu />
      <RoutesPage />
    </Layouts>
  );
}

export default App;
