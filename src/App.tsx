import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Location from './Pages/Location'
import Careers from './Pages/Careers'
import { useEffect, useState } from 'react'
import Root from './Pages/Root'
import { createContext } from 'react'


type GlobalStateType = {
  openSidebar: () => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const GlobalState = createContext<GlobalStateType | null>(null);





function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  console.log(open)

  const openSidebar = () => {
    console.log('hi')
    setOpen(!open)

  }



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
        <Route path='/about' element={<About />} />
        <Route path='/location' element={<Location />} />
        <Route path='/careers' element={<Careers />} />

        {/* <Route path={'/neptune'} element={<Neptune />} /> */}
      </Route>
    )
  ))


  return (
    <div className="App w-full ">
      <GlobalState.Provider value={{
        openSidebar,
        setOpen,
        open
      }}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalState.Provider>
    </div>

  )
}

export default App
