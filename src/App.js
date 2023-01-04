import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ApplyJobs from './Components/ApplyJobs';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="ApplyJobs/:id" element={<ApplyJobs />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
