import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null|WebSocket>(null)
  const [messages,setMessages] = useState<string>("")
  const [label,setLabel]= useState<string>("")

  useEffect(()=>{
    const socket= new WebSocket('ws://localhost:8080')
    socket.onopen=()=>{
      console.log("connected!!!")
      setSocket(socket);
    }
    socket.onmessage=(message)=>{
      console.log("message received : ",message.data)  
      setMessages(message.data)
    }

    return ()=>{
      socket.close()
    }
  },[])
  
  
  if(!socket){
    return <div>connecting to the websocket server...</div>
  }
  return (
    <>
    <input onChange={(e)=>{
      setLabel(e.target.value)
    }}></input>
    <button onClick={()=>{
      socket.send(label)
    }}>submit</button>
    {messages}
    </>
  )
}

export default App
