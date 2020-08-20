import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #EEF0F2;
    color:#0D21A1;
    padding: 30px;
    margin: 10px;
    border: 10px solid #EEC643;
`


export default function Player ({ details }) { 
    if(!details){
        return <h3>not good enough</h3>
    }
    
    return (  
        <Card className='card'>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Jersey Number: {details.number}</p>
            <p>Password: {details.password}</p>
            {
            !!details.position && !!details.position.length &&
            <div>
            Positions:
            <ul>
                {details.position.map((like, idx) => <li key={idx}>{like}</li>)}
            </ul>
            </div>
            }
        </Card>
        
    )
}