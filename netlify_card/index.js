import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Audience from "./components/Audience"
import Footer from "./components/Footer"

function App() {
   return(    
       <div className="app">
            <Info />
            <About />
            <Audience />
            <Footer />
        </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))