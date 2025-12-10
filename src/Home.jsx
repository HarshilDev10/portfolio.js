
import './App.css'
import About from './components/About'
import CursorBlob from './components/CursorBlob'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Area from './components/Area'
import Contact from './components/Contact'


function App() {

  return (
    <><div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    </div>
    <CursorBlob></CursorBlob>
    <Header></Header>
    <About></About>
    <Education></Education>
    <Skills></Skills>
    <Experience></Experience>
    <Projects></Projects>
    <Area></Area>
    <Contact></Contact>
    </div>
    </>
  )
}

export default App
