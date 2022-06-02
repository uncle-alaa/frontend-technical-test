import React, { useEffect, useState } from 'react'

import { MessageReceived, MessageSent } from '../message/message'
import Chat from '../Chat/Chat'
import { useRouter } from 'next/router'
import { ConversationPannel } from '../conversationsPannel/ConversationsPannel'
import { DesktopContainer } from './styles'
import { Conversation, Message } from '../../types'
import { fromTimestampToLocaleDate } from '../utils'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { Messages } from '../../pages/contexts'

interface DesktopMessagesProps {
  conversations: Conversation[]
  messagesOfConversations: { [id: string]: Message[] }
}

export const DesktopMessages: React.FC<DesktopMessagesProps> = ({
  conversations,
  messagesOfConversations,
}) => {
  const userId = getLoggedUserId()
  const router = useRouter()
  const conversationId = parseInt(router.query.id as string)
  console.log(conversationId)
  const initialState = conversationId
    ? messagesOfConversations[conversationId]
    : null
  const [messages, setMessages] = useState(initialState)

  useEffect(() => {
    if (conversationId) {
      setMessages(messagesOfConversations[conversationId])
    }
  }, [conversationId, setMessages, messagesOfConversations])
  if (!conversationId) return null
  const recipientName = conversations.find(
    (conversation) => conversation.id == conversationId
  )?.recipientNickname
  const senderName = conversations.find(
    (conversation) => conversation.id == conversationId
  )?.senderNickname

  return (
    <Messages.Provider value={{ messages, setMessages }}>
      <DesktopContainer>
        <ConversationPannel conversations={conversations} />
        <Chat>
          {messages.map((conv, i) =>
            conv.authorId == userId ? (
              <MessageSent
                key={i}
                message={conv.body}
                timestamp={fromTimestampToLocaleDate(conv.timestamp)}
                displayName={senderName}
              />
            ) : (
              <MessageReceived
                key={i}
                message={conv.body}
                timestamp={fromTimestampToLocaleDate(conv.timestamp)}
                displayName={recipientName}
              />
            )
          )}
        </Chat>
      </DesktopContainer>
    </Messages.Provider>
  )
}
