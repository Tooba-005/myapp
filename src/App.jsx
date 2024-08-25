// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Category from './Components/Category'
import Food from './Components/Food'
import HeadlineCards from './Components/HeadlineCards'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
  // <img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div>
    <div className="App">
    <div>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
    </div>
    </div>
    </div>
  )
}

export default App
