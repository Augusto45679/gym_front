import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomePage } from './components/HomePage/HomePage'

function App() {

  return (
    <div className="flex flex-col h-screen w-screen font-sans bg-black text-white">
    <Header />
    <main className="flex-grow">
      <HomePage />
    </main>
    <Footer />
  </div>
  )
}

export default App
