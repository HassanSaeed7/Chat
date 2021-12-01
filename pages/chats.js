import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const ChatEngine = dynamic(() => 
  import("react-chat-engine").then((module) => module.ChatEngine)
)
const MessageFromSocial = dynamic(() => 
  import("react-chat-engine").then((module) => module.MessageFromSocial)
)

export default function Chats() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true)
    }
  })

  if (!showChat) return <div />


  return <div className="background">
  <div className="shadow">
    <ChatEngine 
    height="calc(100ch-200px)"
    projectID='447a4ef2-8b6b-4621-bd87-20ebba6954da'
    userName={username}
    userSecret={secret}
    />
  </div>
  </div>;
}
