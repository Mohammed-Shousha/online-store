import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom"
import { gql, useMutation, useQuery } from '@apollo/client'
import { ConfirmContainer, ConfirmTitle } from '../../Components/ConfirmComponents'
import { Button, LinkButton } from '../../Components/Buttons'
import { ConfirmNav } from '../../Components/Navbar'
import { LogoImg } from '../../Components/Logo'
import Loading from '../../Components/Loading'
import { DataContext } from '../../Data/DataContext'
import { confirm } from '../../Data/DataActions'


const Confirm = () => {

    let { id } = useParams()
    const { data, setData } = useContext(DataContext) 
    const { confirmed } = data
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [processing, setProcessing] = useState(false)

    const HANDLE_CONFIRMATION = gql `
        mutation HandleConfirmation($id: ID!){
            handleConfirmation(id: $id)
        }
    `

    const [handleConfirmation] = useMutation(HANDLE_CONFIRMATION, {
        onCompleted({handleConfirmation}){
            if(handleConfirmation){ // Int : 1 'Success' , 0 'Failed'
                setData(confirm())
                setProcessing(false)
            }
        }
    })

    const USER_BY_ID = gql `
        query UserById($id: ID!){
            userById(id: $id){
                name
                email
            }
        }
    `

    const { loading } = useQuery(USER_BY_ID, {variables: {id},
        onCompleted({userById}){
            setName(userById.name)
            setEmail(userById.email)
        }
    })

    const confirmEmail = async () => {
        setProcessing(true)
        handleConfirmation({variables: {id}})
        // const response = await fetch(`http://localhost:8888/confirm/${id}`, {
        //     method: "post",
        //     headers: { "Content-Type": "application/json" },
        // })
        // const result = await response.json()
        // if (result.nModified) {
        //     setData(confirm())
        //     setProcessing(false)
        // }
    }

    // useEffect(() => {
    //     refetch()
    //     async function fetchData() {
    //         const response = await fetch(`http://localhost:8888/findById/${id}`, {
    //             method: "get",
    //             headers: { "Content-Type": "application/json" },
    //         })
    //         const user = await response.json()
    //         const { name, email } = user
    //         setName(name)
    //         setEmail(email)
    //     }
    //     fetchData()
    // },[id])

    return (
        <>
        <ConfirmNav>
            <LogoImg/>
            <ConfirmTitle> Online Store</ConfirmTitle>
        </ConfirmNav>
        {loading ?
            <Loading/>
        : !confirmed ?
            <ConfirmContainer>
                <h1>Hi {name},</h1>
                <h2>Please CLick The Button Below To Confirm that</h2>
                <h2>{email} Is Your Email</h2>
                <Button
                    onClick={confirmEmail}
                    disabled={processing}
                >
                    CONFIRM
                </Button>
            </ConfirmContainer>
        :
            <ConfirmContainer>
                <h1>Congratulations {name} Your Email Has Been Confirmed</h1>
                <LinkButton to='/'>
                    Start Shopping
                </LinkButton>
            </ConfirmContainer>
        }
        </>
    )
}

export default Confirm