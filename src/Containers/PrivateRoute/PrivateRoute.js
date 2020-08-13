import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { DataContext } from '../../Data/DataContext'


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