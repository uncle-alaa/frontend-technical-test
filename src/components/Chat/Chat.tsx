import React from 'react'
import { TextInput } from '../textInput/TextInput'
import { Container, Paper, MessagesBody } from './styles'

export default function Chat(props) {
  return (
    <Container>
      <Paper elevation={2}>
        <MessagesBody>{props.children}</MessagesBody>
        <TextInput />
      </Paper>
    </Container>
  )
}
