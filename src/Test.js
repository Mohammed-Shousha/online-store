import React from 'react'
import { useQuery, gql } from '@apollo/client'


const Test = ()=>{
    const Q = gql`
    {
        users{
            id,
            name
        }
    }
`
    const { data, error } = useQuery(Q)

    return(
        <>
            <h1 onClick={()=>console.log(data)}>Data</h1>
            <h1 onClick={()=>console.log(error)}>Error</h1>
        </>
    )
}

export default Test