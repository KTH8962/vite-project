import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import MainPage from '@pages/MainPage'
import BtnSelect from '@/pages/btnSelect/BtnSelect'
import TextInput from '@/pages/textInput/TextInput'
import Checkbox from './pages/checkbox/Checkbox'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/btnSelect"
          element={<BtnSelect />}
        />
        <Route
          path="/textInput"
          element={<TextInput />}
        />
        <Route
          path="/checkbox"
          element={<Checkbox />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
