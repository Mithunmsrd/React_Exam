
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Firstlayout from './layouts/Firstlayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Mainlayout from './layouts/Mainlayout'
import Home from './pages/Home'
import Add from './pages/Add'
import Index from './pages/Index'



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Firstlayout/>}>
      <Route index element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>


      </Route>

      <Route path='/' element={<Mainlayout/>}>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/new-booking' element={<Add/>}/>

      </Route>

      
      </>
    )
  )
 

  return (
    <>
    <RouterProvider router={router}/>
   
      
    </>
  )
}

export default App
