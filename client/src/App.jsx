import { BrowserRouter, Routes, Route } from 'react-router-dom'
import home from './Pages/home'
import about, { ABout } from './Pages/ABout'
import signin from './Pages/signin'
import signup from './Pages/signup'
import dashboard from './Pages/dashboard'
import projects from './Pages/projects'




export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/about' element={<ABout/>} />
        <Route path='/signin' element={<signin/>} />
        <Route path='/signup' element={<signup/>} />
        <Route path='/dashboard' element={<dashboard/>} />
        <Route path='/projects' element={<projects/>} />


    </Routes>
    </BrowserRouter>
  )
}
