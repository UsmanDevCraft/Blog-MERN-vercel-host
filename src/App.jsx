import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Introduction from './components/Introduction'
import Firststep from './components/Firststep'
import Secondstep from './components/Secondstep'
import Deploybackend from './components/Deploybackend'
import Deployfrontend from './components/Deployfrontend'
import Checkcors from './components/Checkcors'
import Conclusion from './components/Conclusion'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <section id='intro'>
      <Introduction />
      </section>
      <section id='first'>
      <Firststep />
      </section>
      <section id='second'>
      <Secondstep />
      </section>
      <section id='deployback'>
      <Deploybackend />
      </section>
      <section id='deployfront'>
      <Deployfrontend />
      </section>
      <section id='errors'>
      <Checkcors />
      </section>
      <section id='conclude'>
      <Conclusion />
      </section>
    </div>
  )
}

export default App
