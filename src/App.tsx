import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className="bg-gradient-to-br from-primary via-primary to-tertiary from-30% to-80%">
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
