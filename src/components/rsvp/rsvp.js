import React from 'react'
import { useInput } from '../../hooks/input-hook'
import { RsvpForm } from '../forms/rsvp_form'
import Axios from 'axios'

const API_KEY = process.env.REACT_APP_GOOGLE_KEY
const url = `https://script.google.com/macros/s/${API_KEY}/exec`

export default function RSVP(props) {
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('')
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('')
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
  const { value: isComing, bind: bindIsComing, reset: resetIsComing } = useInput('')
  const { value: notes, bind: bindNotes, reset: resetNotes } = useInput('')

  const handleSubmit = () => {
    Axios({
      url: `${url}?firstName=${firstName}&lastName=${lastName}&email=${email}&isComing=${isComing}&notes=${notes}`,
      method: 'get',
    })
      .then(() => props.history.push('/thanks'))
      .catch(error => console.log(error))
    resetFirstName()
    resetLastName()
    resetEmail()
    resetNotes()
    resetIsComing()
  }

  return (
    <RsvpForm
      handleSubmit={handleSubmit}
      bindFirstName={bindFirstName}
      bindLastName={bindLastName}
      bindEmail={bindEmail}
      bindIsComing={bindIsComing}
      bindNotes={bindNotes}
    />
  )
}
