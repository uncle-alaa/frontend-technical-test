import { Conversation, Message, User } from '../types'
import { getLoggedUserId } from '../utils/getLoggedUserId'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const loggedUser = getLoggedUserId()
export const getConversationsByUserID = async (
  userId: number
): Promise<Conversation[]> => {
  try {
    const result = await fetch(`${API_BASE_URL}/conversations/${userId}`)

    return result.json()
  } catch (e) {
    return []
  }
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const result = await fetch(`${API_BASE_URL}/users`)

    return result.json()
  } catch (e) {
    return []
  }
}
export const getLoggedUser = async (): Promise<User> => {
  try {
    const result = await fetch(`${API_BASE_URL}/user/${loggedUser}`)

    return result.json()
  } catch (e) {
    return
  }
}

export const getMessageByConversationId = async (
  conversationId: number
): Promise<Message[]> => {
  try {
    const result = await fetch(`${API_BASE_URL}/messages/${conversationId}`)

    return result.json()
  } catch (e) {
    return []
  }
}

export const sendMessageToConversation = async (messageBody: {
  body: string
  timestamp: number
  conversationId: number
  authorId: number
}) => {
  const result = await fetch(
    `${API_BASE_URL}/messages/${messageBody.conversationId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageBody),
    }
  )

  return result.json()
}

export const fromTimestampToLocaleDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
  })
}
