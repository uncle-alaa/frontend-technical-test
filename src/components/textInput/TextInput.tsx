import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { Form, TextField, Button } from './styles'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { sendMessageToConversation } from '../utils'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setMessageOfConversation } from '../../store/messagesOfConversations/slice'
export const TextInput = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const conversationId = parseInt(router.query.id as string)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageBody = {
      body: e.target[0].value as string,
      authorId: getLoggedUserId(),
      timestamp: Math.floor(Date.now() / 1000),
      conversationId: conversationId,
    }
    sendMessageToConversation(messageBody).then((sentMessage) =>
      dispatch(
        setMessageOfConversation({
          idOfConversation: conversationId,
          message: sentMessage,
        })
      )
    )
    e.target[0].value = ''
  }
  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="text field" label="text field" />
        <Button variant="contained" color="primary" type={'submit'}>
          <SendIcon />
        </Button>
      </Form>
    </>
  )
}
