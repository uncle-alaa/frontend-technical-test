import { styled } from '@mui/material'
import { TextField as MuiTextField } from '@mui/material'
import { Button as MuiButton } from '@mui/material'
export const Form = styled('form')`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`

export const TextField = styled(MuiTextField)`
  width: 100%;
`
export const Button = styled(MuiButton)`
  margin-left: 10px;
`
