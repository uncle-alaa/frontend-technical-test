import React, { useEffect, useRef } from 'react'
import { TextInput } from '../textInput/TextInput'
import { Container, Paper, MessagesBody } from './styles'

export default function Chat(props) {
  const messageEl = useRef(null)
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' })
      })
    }
  }, [])

  return (
    <Container>
      <Paper elevation={2}>
        <MessagesBody ref={messageEl}>{props.children}</MessagesBody>
        <TextInput />
      </Paper>
    </Container>
  )
}
