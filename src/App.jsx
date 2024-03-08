import Navigator from './components/Navigator'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactForm from './views/Contact'
import Home from './views/Home'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
