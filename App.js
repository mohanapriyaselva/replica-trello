import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomeFooter } from './Components/HomeFooter/HomeFooter';
import { NavBar } from './Components/NavBar/NavBar';
import {Sectionseven} from'./Components/Sectionseven/Sectionseven'
import { Footer } from './Components/Footer/Footer';
import { Footer_About } from './Components/Footer_About/Footer_About';
import { Footer_job } from './Components/Footer_Job/Footet_job';  
import { Footer_App } from './Components/Footer_App/Footer_app';
import { Footer_Contact } from './Components/Footer_Contact/Footer_contact';
import { PrivacyPolicy } from './Components/PrivacyPolicy/PrivacyPolicy';
import { Lang } from './Components/Languages/Lang';

function App() {
  return (
   <>
  
  <div className='bgm'>
  <h1 className='text-center'>Trello Project</h1>

  
  <BrowserRouter>
<Routes>
  <Route path='/' element={<NavBar/>}></Route>
  <Route path='/Section5' element={[<NavBar/>,<Sectionseven/>]}></Route>
  <Route path='/Footer' element={[<NavBar/>,<Footer/>]}></Route>
  <Route path='/HomeFooter' element={[<NavBar/>,<HomeFooter/>]}></Route>

  <Route path='/FooterAbout'element={[<NavBar/>,<Footer_About/>,<HomeFooter/>]}></Route>
  <Route path='/FooterJob'element={[<NavBar/>,<Footer_job/>,<HomeFooter/>]}></Route>
  <Route path='/FooterAPP' element={[<NavBar/>,<Footer_App/>,<HomeFooter/>]}></Route>
  <Route path='/Contactus'element={[<NavBar/>,<Footer_Contact/>,<HomeFooter/>]}></Route>
  <Route path='/PrivacyPolicy' element={[<NavBar/>,<PrivacyPolicy/>]}></Route>
  <Route path='/Language' element={[<NavBar/>,<Lang/>]}></Route>
</Routes>
</BrowserRouter>
  </div>


   </>
  );
}

export default App;
