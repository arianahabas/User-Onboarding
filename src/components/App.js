import React, { useState, useEffect } from 'react'
import Players from './Players'
import PlayerForm from './PlayerForm'
import styled from 'styled-components'

import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

//STYLES//
const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;    
`
const FormStyles= styled.div`
  border: 3px solid #EEC643;
  color: #EEF0F2;
  background-color: #0D21A1;
  padding: 50px;
  margin: 10px;
  border-radius: 20px;
  width: 60vw;
  text-align: center;
`
const PlayerCard= styled.div`
  margin: 20px; 
  border: 4px dashed  #EEF0F2;
`
//INTITIAL STATES//

const initialDisabled = true
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email:'',
  number: '',
  password: '',
  ///// CHECKBOX /////
  position: {
    Guard: false,
    Forward: false,
    Center: false,
  },
}
const initialFormErrors = {
  name: '',
  email: '',
  number: '',
  password: '',
}
const initialPlayersList = []

export default function App () {
  //STATES//
  const [players, setPlayers] = useState(initialPlayersList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)    
  
  //HELPER FUNCTIONS//
  //to [get] all players from API//
  const getPlayers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setPlayers(res.data)
    })
    .catch(err =>{
      debugger
    })
  }
  //to [post] newPlayer to API///
  const postNewPlayer = newPlayer => {
    axios.post('https://reqres.in/api/users', newPlayer)
    .then(res => {
      setPlayers([res.data, ...players])
      setFormValues(initialFormValues)
    })
    .catch(err =>{
      debugger
    })
  }
  //FORM ACTIONS//
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
          .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value 
      })
    }
    const checkboxChange = (name, isChecked) => {

      setFormValues({
        ...formValues,
        position: {
          ...formValues.position,
          [name]: isChecked, 
        }
      })
    }
    const submit = () => {
      const newPlayer = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        number: formValues.number.trim(),
        password: formValues.password.trim(),
        position: Object.keys(formValues.position).filter(p => formValues.position[p]),
      }
      postNewPlayer(newPlayer)
    }

    //SIDE EFFECTS//
    useEffect(() => {
      getPlayers()
    }, [])
  
    useEffect(() => {
      formSchema.isValid(formValues).then(valid => {
        setDisabled(!valid)
      })
    }, [formValues])

  return(
    <AppStyles className='App'>

      <FormStyles className='form'>
        <PlayerForm
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
        />
      </FormStyles>
      <PlayerCard className='playerCard'>
      {
      players.data && players.data.map(p => {
        return (
          <Players
            key={p.id}
            details={p}
          />
        )
      })
      }
      </PlayerCard>
    </AppStyles>
  )
}

