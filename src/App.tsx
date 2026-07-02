import { Route, Routes } from 'react-router-dom'
import { SmoothScrollProvider } from './providers/SmoothScrollProvider'
import { ScrollToTop } from './components/ScrollToTop'
import { Portfolio } from './Portfolio'

function App() {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </SmoothScrollProvider>
  )
}

export default App
