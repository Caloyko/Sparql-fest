import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllQueries from './pages/AllQueries'
import QueryDetail from './pages/QueryDetail'
import AllOntologies from './pages/AllOntologies'
import Tutorials from './pages/Tutorials'
import OtherResources from './pages/OtherResources'

const App = () => {
  return (
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sparql-queries" element={<AllQueries/>}/>
              <Route path="sparql-queries/:slug" element={<QueryDetail/>} />
              <Route path="/ontologies" element={<AllOntologies/>}/>
              <Route path="/tutorials" element={<Tutorials/>}/>
              <Route path="/other-resources" element={<OtherResources/>}/>
            </Routes>
            <Footer />
      </BrowserRouter>
  )
}

export default App