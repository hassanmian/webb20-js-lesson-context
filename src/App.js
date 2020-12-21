import React, {useState} from 'react'
import UserInfo from './components/UserInfo'
import { UserContext } from './contexts/UserContext';

function App() {
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Doe")

  return (
    <div >
      <UserContext.Provider value={{firstName, setFirstName, lastName, setLastName}}>
        <UserInfo />
        <hr/>
        {firstName} {lastName}
      </UserContext.Provider>
    </div>
  );
}

export default App;
