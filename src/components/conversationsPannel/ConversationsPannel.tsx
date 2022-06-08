import { ListItem } from '@mui/material'
import { ConversationItem } from '../ConversationItem/ConversationItem'
import { ConversationsContainer, Paper } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setShowMobileConversations } from '../../store/ui/slice'
import { getConversations } from '../../store/selectors/conversations'

export const ConversationPannel: React.FC = ({}) => {
  const dispatch = useDispatch()
  const conversations = useSelector(getConversations)
  return (
    <Paper>
      <ConversationsContainer>
        {conversations.map((conversation) => (
          <ListItem
            onClick={() => dispatch(setShowMobileConversations(false))}
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
