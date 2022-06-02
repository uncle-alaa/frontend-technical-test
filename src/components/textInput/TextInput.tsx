import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { Form, TextField, Button } from './styles'

export const TextInput = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}
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
