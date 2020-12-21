import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import TextComponent from './TextComponent'

export default function FirstName() {
  const { firstName, setFirstName } = useContext(UserContext)
  
  return (
    <>
      <TextComponent name={firstName} />
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </>
  )
}
