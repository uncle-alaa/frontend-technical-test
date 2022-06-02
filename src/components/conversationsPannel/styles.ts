import { List, styled, Paper as MuiPaper } from '@mui/material'

export const ConversationsContainer = styled(List)({
  borderRight: '1px solid #e6ebef',
  width: '100%',
  height: '100%',
  overflow: 'auto',
})
export const Paper = styled(MuiPaper)`
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
  }
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
`
