import React, { useEffect } from 'react'
import { DesktopMessages } from '../../components/desktopMessages/DesktopMessages'
import { Header } from '../../components/header/Header'
import {
  getConversationsByUserID,
  getMessageByConversationId,
} from '../../components/utils'
import { useMediaQuery, useTheme } from '@mui/material'
import { MobileMessages } from '../../components/mobileMessages/MobileMessages'
import { useDispatch } from 'react-redux'
import { setConversations } from '../../store/conversations/slice'
import { setMessagesOfConversations } from '../../store/messagesOfConversations/slice'

export default function MessagePage({
  conversations,
  messagesOfConversations,
}) {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setConversations(conversations))
  }, [conversations])

  useEffect(() => {
    dispatch(setMessagesOfConversations({ messagesOfConversations }))
  }, [messagesOfConversations])
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
          <DesktopMessages />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <MobileMessages />
        </div>
      )}
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const conversations = await getConversationsByUserID(1)
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
