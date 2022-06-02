import { ListItem, Paper } from '@mui/material'
import { ConversationItem } from '../ConversationItem/ConversationItem'
import { ConversationsContainer } from './styles'
import { Conversation } from '../../types'

type ConversationsPannelProps = {
  conversations: Conversation[]
}

export const ConversationPannel: React.FC<ConversationsPannelProps> = ({
  conversations,
}) => {
  return (
    <Paper sx={{ width: '30%' }}>
      <ConversationsContainer>
        {conversations.map((conversation) => (
          <ListItem
            key={conversation.id}
            alignItems="flex-start"
            disablePadding
          >
            <ConversationItem conversation={conversation} />
          </ListItem>
        ))}
      </ConversationsContainer>
    </Paper>
  )
}
