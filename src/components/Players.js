import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #EEF0F2;
    color:#0D21A1;
    padding: 30px;
    margin: 10px;
    border: 10px solid #EEC643;
`


export default function Player ({ props }) { 
    if(!props){
        return <h3>not good enough</h3>
    }
    
    return (  
        <Card className='card'>
            <h2>Name: {props.name}</h2>
            <p>Email: {props.email}</p>
            <p>Jersey Number: {props.number}</p>
            <p>Password: {props.password}</p>
            {
            !!props.position && !!props.position.length &&
            <div>
            Positions:
            <ul>
                {props.position.map((like, idx) => <li key={idx}>{like}</li>)}
            </ul>
            </div>
            }
        </Card>
    )
}