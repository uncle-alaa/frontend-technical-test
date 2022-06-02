import React from 'react'
import { useRouter } from 'next/router'
import { DesktopMessages } from '../../components/desktopMessages/DesktopMessages'
import { Header } from '../../components/header/Header'
import {
  getConversationsByUserID,
  getMessageByConversationId,
} from '../../components/utils'
import { useMediaQuery, useTheme } from '@mui/material'
import { MobileMessages } from '../../components/mobileMessages/MobileMessages'

export default function MessagePage({
  conversations,
  messagesOfConversations,
}) {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      {!isMatch ? (
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
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <MobileMessages
            messagesOfConversations={messagesOfConversations}
            conversations={conversations}
          />
        </div>
      )}
    </>
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
  console.log(messagesOfConversations, 'messages')
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
