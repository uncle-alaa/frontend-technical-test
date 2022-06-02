import { ListItem } from '@mui/material'
import { ConversationItem } from '../ConversationItem/ConversationItem'
import { ConversationsContainer, Paper } from './styles'
import { Conversation } from '../../types'

type ConversationsPannelProps = {
  conversations: Conversation[]
  selectConversation?: any
}

export const ConversationPannel: React.FC<ConversationsPannelProps> = ({
  conversations,
  selectConversation,
}) => {
  return (
    <Paper>
      <ConversationsContainer>
        {conversations.map((conversation) => (
          <ListItem
            onClick={() =>
              selectConversation ? selectConversation(false) : null
            }
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
