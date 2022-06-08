import React from 'react'
import {
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  Typography,
  Paper,
} from '@mui/material'

import { useRouter } from 'next/dist/client/router'
import { Conversation, User } from '../../types'
import Avatare from '../../assets/logo/profil.svg'
import { Icon } from '../icon/Icon'
import { fromTimestampToLocaleDate } from '../utils'
import { useSelector } from 'react-redux'
import { getLoggedUser } from '../../store/selectors/user'

interface ConversationItemProps {
  conversation: Conversation
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
}) => {
  const router = useRouter()
  const ListItemIsSelected =
    conversation.id == parseInt(router.query.id as string)

  const loggedUser: User = useSelector(getLoggedUser)

  const nameToDisplay =
    conversation.recipientNickname == loggedUser?.nickname
      ? conversation.senderNickname
      : conversation.recipientNickname

  const onListItemClick = () => {
    router.push(`/messages/${conversation.id}`)
  }

  return (
    <Paper style={{ width: '100%' }}>
      <ListItemButton
        selected={ListItemIsSelected}
        onClick={onListItemClick}
        style={{
          backgroundColor: ListItemIsSelected && 'rgb(239 239 239 / 37%)',
          borderLeft: ListItemIsSelected && '3px solid #ff6e14',
        }}
      >
        <ListItemAvatar>
          <Icon size={'40px'} source={Avatare.src} />
        </ListItemAvatar>
        <ListItemText
          primary={nameToDisplay}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Last message at:{' '}
              </Typography>
              {fromTimestampToLocaleDate(conversation.lastMessageTimestamp)}
            </>
          }
        />
      </ListItemButton>
    </Paper>
  )
}
