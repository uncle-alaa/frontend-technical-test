import React from 'react'

import { MessageReceived, MessageSent } from '../message/message'
import Chat from '../Chat/Chat'
import { useRouter } from 'next/router'
import { ConversationPannel } from '../conversationsPannel/ConversationsPannel'
import { DesktopContainer } from './styles'
import { Conversation, Message } from '../../types'
import { fromTimestampToLocaleDate } from '../utils'
import { getLoggedUserId } from '../../utils/getLoggedUserId'

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
  if (!conversationId) return null
  const conversationMessages = messagesOfConversations[conversationId]
  const recipientName = conversations.find(
    (conversation) => conversation.id == conversationId
  )?.recipientNickname
  const senderName = conversations.find(
    (conversation) => conversation.id == conversationId
  )?.senderNickname

  return (
    <DesktopContainer>
      <ConversationPannel conversations={conversations} />
      <Chat>
        {conversationMessages.map((conv, i) =>
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
  )
}
