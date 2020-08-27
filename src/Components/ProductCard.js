import React from 'react'
import styled from 'styled-components'
import { device } from '../Data/Constants'

const Card = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 250px;
    height: 400px;
    margin: 1rem;
    margin-bottom: -5px;
    background-color: #ecf0f1;
    border-radius: .25rem .25rem 0 0;
    box-shadow: none;

    @media ${device.laptopS}{
        width:275px;
    }

    @media ${device.laptop}{
        width:300px;
    }

    img{
        position: relative;
        display: flex;
        flex-flow: row;
        flex: 0 0 auto;
        height: 50%;
        overflow: hidden;
        border-radius: .25rem .25rem 0 0;
    }
`

const PriceTag = styled.div `
    position: absolute;
    background-color: rgba(44,62,80,.95);
    color: #ecf0f1;
    border-radius: .25rem;
    padding: .125rem .5rem;
    top: 1rem;
    left: 1rem;
`

const Description = styled.div `
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    flex: 0 0 auto;
    height: 50%;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    background-color: #ecf0f1;

    h1{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight:normal;
        letter-spacing: 3px;
        color: #2c3e50;
        margin: 1em 0;
    }

    p{
        color: #95a5a6;
        font-size: .75rem;
        letter-spacing: 2px;
    }
`


const ProductCard = ({ photo, price, name, details })=>(
    <Card>
        <img src={photo} alt={photo}/>
        <PriceTag> {price} </PriceTag>
        <Description>
            <h1>{name}</h1>
            <p>{details}</p>
        </Description>
    </Card>
) 

export default ProductCard