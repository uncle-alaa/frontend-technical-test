import React, { useContext } from 'react'
import { Drawer, List, ListItemText, ListItem, Box } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import LbcLogo from '../../assets/logo/LbcLogo.svg'
import { Home, Mail } from '@mui/icons-material'
import { Icon } from '../icon/Icon'
import { useRouter } from 'next/router'
import { ShowMobileConversationsContext } from '../../pages/contexts'
interface DrawerProps {
  openDrawer: boolean
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
const DrawerComponent: React.FC<DrawerProps> = ({
  openDrawer,
  setOpenDrawer,
}) => {
  const router = useRouter()
  const { showConversations, setShowConversations } = useContext(
    ShowMobileConversationsContext
  )
  return (
    <>
      <Drawer sx={{}} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            width: '60vw',
          }}
        >
          <Icon
            onClick={() => router.push(`/`)}
            size={'150px'}
            source={LbcLogo.src}
          />
          <List>
            <ListItem
              selected={router.pathname === '/'}
              button
              onClick={() => {
                router.push('/')
                setOpenDrawer(false)
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Accueil" />
            </ListItem>
            <ListItem
              selected={router.pathname === '/messages/[id]'}
              button
              onClick={() => {
                router.push('/messages/1')
                setOpenDrawer(false)
                setShowConversations(true)
              }}
            >
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
export default DrawerComponent
