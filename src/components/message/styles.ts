import { styled } from '@mui/material'

export const MessageRow = styled('div')`
  display: flex;
`

export const MessageRowRight = styled('div')`
  display: flex;
  justify-content: flex-end;
`

export const ReceivedMessage = styled('div')`
  position: relative;
  margin-left: 20px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #a8ddfd;
  width: 60%;
  text-align: left;
  font: 400 0.9em 'Open Sans', sans-serif;
  border: 1px solid #97c6e3;
  border-radius: 10px;
  '&:after': {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid #a8ddfd;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    left: -15px;
  }
  ,
'&:before': {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid #97c6e3;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    left: -17px;
  }
`

export const SentMessage = styled('div')`
  position: relative;
  margin-left: 20px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f8e896;
  width: 60%;
  text-align: left;
  font: 400 0.9em 'Open Sans', sans-serif;
  border: 1px solid #dfd087;
  border-radius: 10px;
  '&:after': {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid #f8e896;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    left: -15px;
  }
  ,
'&:before': {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid #dfd087;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    left: -17px;
  }
`
export const MessageContent = styled('div')`
  padding: 0;
  margin-bottom: 20px;
`
export const MessageTimeStamp = styled('p')`
  position: absolute;
  font-size: 0.85em;
  font-weight: 300;
  bottom: -3px;
  right: 5px;
`
