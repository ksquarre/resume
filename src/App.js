

import Navbar from './components/Navbar'
import Home from './components/Home'
import Connect from './components/Connect'
import About from './components/About'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
       
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
            <Route exact path='/Connect' element={<Connect/>}> </Route>
            <Route exact path='/About' element={ <About/>}></Route>
        </Routes>
       
          
      </div>
    </Router>
  );
}

export default App;
