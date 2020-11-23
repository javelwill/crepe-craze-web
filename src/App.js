import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div className="py-5">
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
