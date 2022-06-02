import React from 'react'
import { useRouter } from 'next/router'
import { DesktopMessages } from '../../components/desktopMessages/DesktopMessages'
import { Header } from '../../components/header/Header'
import {
  getConversationsByUserID,
  getMessageByConversationId,
} from '../../components/utils'

export default function MessagePage({
  conversations,
  messagesOfConversations,
}) {
  console.log(conversations, 'conv')
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <DesktopMessages
        messagesOfConversations={messagesOfConversations}
        conversations={conversations}
      />
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const conversations = await getConversationsByUserID(1)
  conversations.sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp)
  const messagesOfConversations = {}
  for (const conversation of conversations) {
    messagesOfConversations[conversation.id] = await getMessageByConversationId(
      conversation.id
    )
  }
  if (params.id == {}) {
    return {
      redirect: {
        destination: '/1',
      },
    }
  }
  return {
    props: {
      conversations: conversations,
      messagesOfConversations: messagesOfConversations,
    },
  }
}
