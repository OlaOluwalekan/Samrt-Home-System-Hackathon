import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/shared/SharedLayout'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs' // Import the ContactUs component
import { useSelector } from 'react-redux'
import Toast from './components/alert/Toast'

const App = () => {
  const { toastIsShown, toastMessage, toastType } = useSelector(
    (store) => store.general
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contact-us' element={<ContactUs />} />{' '}
          {/* Add this line */}
        </Route>
      </Routes>

      {toastIsShown && <Toast message={toastMessage} type={toastType} />}
    </BrowserRouter>
  )
}

export default App
