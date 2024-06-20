"use client"
import { signIn, signOut, useSession } from "next-auth/react"

const Appbar = () => {
    const session = useSession()
  return (
    <div>
        <button onClick={()=>{
            signIn()
        }}>signIn</button>
        
        <button onClick={()=>{
            signOut()
        }}>signOut</button>

            {JSON.stringify(session)}

    </div>
  )
}

export default Appbar