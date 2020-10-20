import React, {useContext, useEffect, useState} from "react";
import io from 'socket.io-client'
const SocketContext = React.createContext()

export function useSocket () {
    return useContext(SocketContext)
}

export function SocketProvider({id, children}) {
    const [socket, setSocket] = useState(null)

    useEffect(()=> {
        const newSocket = io('http://localhost:4000')
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}