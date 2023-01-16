import { React, useState, useEffect } from 'react'
import './index.css';
import Header from './components/Header.js'
import Landing from './components/Landing.js'
import Divider from './components/Divider.js'
import Experience from './components/Experience.js'
import DividerLeft from './components/DividerLeft.js'
import DividerRight from './components/DividerRight.js'
import Mission from './components/Mission.js'
import Match from './components/Match.js'
import MobileWarningJS from './components/MobileWarning.js'

function App() {

  const [MobileWarning, setShowMobileWarning] = useState(() => {
    if (window.innerWidth <= 800){
      console.log("Mobile Default size");
      return true;
    }
    console.log("Desktop Default size");
    return false;
  })

  useEffect(() => {

    function handleResize() {
      if (window.innerWidth <= 800)
        setShowMobileWarning(true)
      if (window.innerWidth > 800)
        setShowMobileWarning(false)
    }

    window.addEventListener('resize', handleResize)

  })

  useEffect(() => {
    console.log(MobileWarning);
    console.log(window.innerWidth);
  })

  return (

    MobileWarning ? <MobileWarningJS /> : <Landing /> 

    // <> 
    //   <Header /> 
    //   <Landing /> 
    //   <Divider />
    //   <Experience />
    //   <DividerLeft />
    //   <Mission />
    //   <DividerRight />
    //   <Match />
    // </>
  );
}

export default App;
