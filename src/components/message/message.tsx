import React from 'react'
import {
  MessageRow,
  MessageContent,
  MessageRowRight,
  MessageTimeStamp,
  ReceivedMessage,
  SentMessage,
} from './styles'
import Avatare from '../../assets/logo/profil.svg'
import { Icon } from '../icon/Icon'
interface MessageProps {
  message: string
  timestamp: string
  displayName?: string
}

export const MessageReceived: React.FC<MessageProps> = ({
  displayName,
  timestamp,
  message,
}) => {
  return (
    <>
      <MessageRow>
        <Icon size={'40px'} source={Avatare.src} />
        <div>
          <div style={{ marginLeft: '20px' }}>{displayName}</div>
          <ReceivedMessage>
            <div>
              <MessageContent>{message}</MessageContent>
            </div>
            <MessageTimeStamp>{timestamp}</MessageTimeStamp>
          </ReceivedMessage>
        </div>
      </MessageRow>
    </>
  )
}

export const MessageSent: React.FC<MessageProps> = ({ timestamp, message }) => {
  return (
    <MessageRowRight>
      <SentMessage>
        <MessageContent>{message}</MessageContent>
        <MessageTimeStamp>{timestamp}</MessageTimeStamp>
      </SentMessage>
    </MessageRowRight>
  )
}
