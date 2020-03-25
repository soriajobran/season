import { useState, useEffect } from 'react'

function useLocation() {
    const [lat, setLat] = useState(null)
    const [errMessage, setErrMessage] = useState( '' )
    
    useEffect( () => {
        navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrMessage(err.message)
        )
    }, [] )

    return [lat, errMessage]
}

export default useLocation
