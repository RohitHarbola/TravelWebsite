import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'

import './index.css'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Haldwani from './Pages/Cities/Haldwani'
import Gurugram from './Pages/Cities/Gurugram'
import Delhi from './Pages/Cities/Delhi'
import Jaipur from './Pages/Cities/Jaipur'
import Nanital from './Pages/Cities/Nanital'
import PantNagar from './Pages/Cities/PantNagar'
import Haridwar from './Pages/Cities/Haridwar'
import RamNagar from './Pages/Cities/RamNagar'
import Chandigarh from './Pages/Cities/Chandigarh'
import Dehradun from './Pages/Cities/Dehradun'
import Rudrapur from './Pages/Cities/Rudrapur'
import Bareilly from './Pages/Cities/Bareilly'
import Rishikesh from './Pages/Cities/Rishikesh'
import Agra from './Pages/Cities/Agra'
import Cabs from './Components/Cabs/Cabs'
import CancellationPolicy from './Components/CancellationPolicy/CancellationPolicy'
import BookingForm from './Pages/Form/BookingForm'
import About from './Components/About/About'
import TermsandConditions from './Components/Terms and Conditions/TermsandConditions'
import UttrakhandPlaces from './Components/Uttrakhand/UttrakhandPlaces'
import Bhimtal from './Pages/Cities/Bhimtal'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      
      <Route path='haldwani' element={<Haldwani />} />
      <Route path='gurugram' element={<Gurugram />} />
      <Route path='delhi' element={<Delhi />} />
      <Route path='jaipur' element={<Jaipur />} />
      <Route path='nanital' element={<Nanital />} />
      <Route path='pantnagar' element={<PantNagar />} />
      <Route path='haridwar' element={<Haridwar />} />
      <Route path='ramnagar' element={<RamNagar />} />
      <Route path='chandigarh' element={<Chandigarh />} />
      <Route path='dehradun' element={<Dehradun />} />
      <Route path='rudrapur' element={<Rudrapur />} />
      <Route path='bareilly' element={<Bareilly />} />
      <Route path='rishikesh' element={<Rishikesh />} />
      <Route path='agra' element={<Agra />} />
      <Route path="/cabs" element={<Cabs />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/booking-form" element={<BookingForm />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/terms-and-conditions" element={<TermsandConditions/>}/>
      <Route path="/uttrakhand-places" element={<UttrakhandPlaces/>}/>
      <Route path="/bhimtal" element={<Bhimtal/>}/>
  
      <Route path='contact' element={<Contact />} />
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
