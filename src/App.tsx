import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
