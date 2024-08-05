import './App.css';
import NavBar from './components/navBar/navBar'
import Welcome from './components/welcome/welcome'
import OurPrograms from './components/ourPrograms/ourPrograms'
import ProgramsStats from './components/programsStats/programsStats'
import Methodology from './components/methodology/methodology'
import OurStories from './components/ourStories/ourStories'
import WhoWeAre from './components/whoWeAre/whoWeAre'
import KuepaAttitude from './components/kuepaAttitude/kuepaAttitude'
import Headquarters from './components/headquarters/headquarters'
import Blogs from './components/blogs/blogs'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
