import React, { useContext } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { Form, TextField, Button } from './styles'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { sendMessageToConversation } from '../utils'
import { useRouter } from 'next/router'
import { Messages } from '../../pages/contexts'
export const TextInput = () => {
  const router = useRouter()
  const { messages, setMessages } = useContext(Messages)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageBody = {
      body: e.target[0].value as string,
      authorId: getLoggedUserId(),
      timestamp: Math.floor(Date.now() / 1000),
      conversationId: parseInt(router.query.id as string),
    }
    sendMessageToConversation(messageBody)
    e.target[0].value = ''
    setMessages((messages) => [...messages, messageBody])
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
