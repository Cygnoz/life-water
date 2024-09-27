
import { Route, Routes } from 'react-router-dom'
import Createorder from './pages/Createorder'
import ViewOrder from './components/ViewOrder'
import NewOrder from './components/NewOrder'


function App() {


  return (
    <>
     
    <Routes>
    <Route path='/createorder' element={<Createorder/>} />
    <Route path='/view' element={<ViewOrder/>} />
    <Route path='/addneworder' element={<NewOrder/>} />

    </Routes>
    </> 
  )
}

export default App