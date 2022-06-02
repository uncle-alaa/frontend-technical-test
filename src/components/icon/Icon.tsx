import React from 'react'

interface UserIconProps {
  size: string
  source: string
  onClick?: any
}
export const Icon: React.FC<UserIconProps> = ({ size, source, onClick }) => {
  return (
    <div
      style={{
        width: `${size}`,
        margin: '12px',
      }}
      onClick={onClick}
    >
      <img
        alt="icon"
        style={{ maxHeight: '100%', maxWidth: '100%', cursor: 'pointer' }}
        src={source}
      />
    </div>
  )
}
