import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
        <Weather temperature={25} ></Weather>
        <UserStatus loggedIn={true} isAdmin={true} ></UserStatus>
        <Greeting timeOfDay="morning" ></Greeting>
    </div>
  )
}

export default App