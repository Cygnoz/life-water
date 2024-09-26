
import { Route, Routes } from 'react-router-dom'
import Createorder from './pages/Createorder'

function App() {


  return (
    <>
        
    <Routes>
    <Route path='/createorder' element={<Createorder/>} />

    </Routes>
    </> 
  )
}

export default App
