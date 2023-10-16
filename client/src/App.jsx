import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/shared/SharedLayout';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs'; // Import the ContactUs component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contact-us' element={<ContactUs />} /> {/* Add this line */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
