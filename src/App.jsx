import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllQueries from './pages/AllQueries'
import QueryDetail from './pages/QueryDetail'
import AllPrefixes from './pages/AllPrefixes'
import Tutorials from './pages/Tutorials'
import OtherResources from './pages/OtherResources'
import PrefixDetail from './pages/PrefixDetail'
import ResourceDetail from './pages/ResourceDetail'
import { Toaster } from 'react-hot-toast'
import SingleTuto from './pages/SingleTuto'


const App = () => {
  return (
      <BrowserRouter basename="/Sparql-fest">
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sparql-queries" element={<AllQueries/>}/>
              <Route path="sparql-queries/:slug" element={<QueryDetail/>} />
              <Route path="/sparql-prefixes" element={<AllPrefixes/>}/>
              <Route path="sparql-prefixes/:slug" element={<PrefixDetail/>} />
              <Route path="/tutorials" element={<Tutorials/>}/>
              <Route path="/tutorials/:slug" element={<SingleTuto/>}/>
              <Route path="/other-resources" element={<OtherResources/>}/>
              <Route path="/other-resources/:slug" element={<ResourceDetail/>}/>
            </Routes>
            <Footer />
      </BrowserRouter>
  )
}

export default App