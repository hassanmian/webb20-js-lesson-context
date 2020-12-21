import React, {useState} from 'react'
import UserInfo from './components/UserInfo'

function App() {
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Doe")

  return (
    <div >
      <UserInfo firstName={firstName} lastName={lastName}/>
    </div>
  );
}

export default App;
