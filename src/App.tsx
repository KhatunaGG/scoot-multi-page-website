import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Location from './Pages/Location'
import Careers from './Pages/Careers'
import { useEffect, useState } from 'react'
import Root from './Pages/Root'



function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  const router = createBrowserRouter((
    createRoutesFromElements(
      <Route path={'/'} element={<Root screenWidth={screenWidth} />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/location' element={<Location />}/>
        <Route path='/careers' element={<Careers />}/>
      </Route>
    )
  ))


  return (
    <div className="App w-full ">
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
 
  )
}

export default App
