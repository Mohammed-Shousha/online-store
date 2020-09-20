import { useState, useEffect } from 'react'

const usePersistedState = (key, defaultValue) => {
    const [state, setState] = useState(() =>
        JSON.parse(localStorage.getItem(key)) || defaultValue
    )
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])
    return [state, setState]
}

export default usePersistedState