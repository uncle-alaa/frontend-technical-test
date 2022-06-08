import React from 'react'

import { MessageReceived, MessageSent } from '../message/message'
import Chat from '../Chat/Chat'
import { useRouter } from 'next/router'
import { ConversationPannel } from '../conversationsPannel/ConversationsPannel'
import { DesktopContainer } from './styles'
import { fromTimestampToLocaleDate } from '../utils'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getMessagesOfConversation } from '../../store/selectors/messagesOfConversations'
import { getConversations } from '../../store/selectors/conversations'

export const DesktopMessages: React.FC = () => {
  const userId = getLoggedUserId()
  const router = useRouter()
  const conversationId = parseInt(router.query.id as string)
  const messagesOfConversation = useSelector((state: RootState) =>
    getMessagesOfConversation(state, conversationId)
  )
  const conversations = useSelector(getConversations)
  if (!conversationId || !messagesOfConversation) return null
  const recipientName = conversations.find(
    (conversation) => conversation.id == conversationId
  )?.recipientNickname
  const senderName = conversations.find(
    (conversation) => conversation.id == conversationId
  )?.senderNickname

  return (
    <DesktopContainer>
      <ConversationPannel />
      <Chat>
        {messagesOfConversation.map((conv, i) =>
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
