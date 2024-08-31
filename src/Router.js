import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import { SideBar } from './components/sidebar/Sidebar';
import { Home } from './components/main/Home';

export const RouterComp = () => {
    return (
      <BrowserRouter basename='/planet-web'>
          <SideBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    );
  };