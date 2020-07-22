import React from 'react'

export default function PlayerForm (props) {
    const { 
      values, 
      submit,
      inputChange,
      checkboxChange,
      disabled,
      errors, 
    } = props 

    const onInputChange = evt => {
      const { name, value } = evt.target
      inputChange(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    const onCheckboxChange = evt => {
      const { name, checked } = evt.target
      checkboxChange(name, checked)
    }

    return (
        <div>
        <form onSubmit = {onSubmit}>
            <h1>Join the Team! 🏀</h1>
          <label htmlFor='nameInput'></label>
          <input
          id='nameInput'
          name='name'
          type='text'
          maxLength='20'
          placeholder='Full Name'
          value={values.name}
          onChange={onInputChange}
          />
          <br/>
          <label htmlFor='emailInput'></label>
          <input
          id='emailInput'
          name='email'
          type='email'
          maxLength='25'
          placeholder='Enter Email'
          value={values.email}
          onChange={onInputChange}
          />
          <br/>
          <label htmlFor='numberInput'></label>
          <input
          id='numberInput'
          name='number'
          type='number'
          maxLength='20'
          placeholder='Jersey Number'
          value={values.number}
          onChange={onInputChange}
          />
          <br/>
          <label htmlFor='passwordInput'></label>
          <input
          id='passwordInput'
          name='password'
          type='password'
          maxLength='20'
          placeholder='Enter Password'
          value={values.password}
          onChange={onInputChange}
          />
          <br/>
    
          <div className='form-group checkboxes'>
            <h3>Desired Positions</h3>

            <label>Forward
              <input
                type='checkbox'
                name='forward'
                checked={values.position.forward === true}
                onChange={onCheckboxChange}
                />
            </label>

            <label>Guard
              <input
                type='checkbox'
                name='guard'
                checked={values.position.guard === true}
                onChange={onCheckboxChange}
                />
            </label>

            <label>Center
              <input
                type='checkbox'
                name='center'
                checked={values.position.center === true}
                onChange={onCheckboxChange}
                />
            </label>
          </div>
          <br/>
          <button>Lets GO!!!</button> 
          <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.number}</div>
            <div>{errors.position}</div>
            <div>{errors.password}</div>
          </div>
        </form>
        </div>
    )
}

