import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import TextComponent from './TextComponent'

export default function LastName() {
  const { lastName, setLastName } = useContext(UserContext)
  return (
    <div>
      <TextComponent name={lastName}/>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
  )
}
