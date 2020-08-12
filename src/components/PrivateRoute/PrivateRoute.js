import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ children }) => {

    const { isSignedIn } = useContext(DataContext)

    return (
        <Route>
            {isSignedIn ?
                children
            :
                <Redirect to='signin' />
            }
        </Route>
    )
}

export default PrivateRoute;