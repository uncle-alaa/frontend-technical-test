import { styled } from '@mui/material'
import { Paper as MuiPaper } from '@mui/material'

export const Paper = styled(MuiPaper)`
  width: 80vw;
  @media (max-width: 600px) {
    width: 100%;
  }
  height: 80vh;
  max-width: 500px;
  max-height: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
export const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`
export const MessagesBody = styled(MuiPaper)`
  width: calc(100% - 20px);
  margin: 10px;
  overflow-y: scroll;
  height: calc(100% - 80px);
`
