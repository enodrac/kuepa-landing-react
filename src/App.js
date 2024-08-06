import React, { lazy, Suspense } from 'react'
import './App.css';

const NavBar = lazy(() => import('./components/navBar/navBar'))
const Welcome = lazy(() => import('./components/welcome/welcome'))
const OurPrograms = lazy(() => import('./components/ourPrograms/ourPrograms'))
const ProgramsStats = lazy(() => import('./components/programsStats/programsStats'))
const Methodology = lazy(() => import('./components/methodology/methodology'))
const OurStories = lazy(() => import('./components/ourStories/ourStories'))
const WhoWeAre = lazy(() => import('./components/whoWeAre/whoWeAre'))
const KuepaAttitude = lazy(() => import('./components/kuepaAttitude/kuepaAttitude'))
const Headquarters = lazy(() => import('./components/headquarters/headquarters'))
const Blogs = lazy(() => import('./components/blogs/blogs'))
const Footer = lazy(() => import('./components/footer/footer'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>cargando...</div>}>
        <NavBar />
        <div className={`content`}>
          <Welcome />
          <OurPrograms />
          <ProgramsStats />
          <Methodology />
          <OurStories />
          <WhoWeAre />
          <KuepaAttitude />
          <Headquarters />
          <Blogs />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
