import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Badge,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  Mail as MailIcon,
  Search,
  Notifications,
  FavoriteBorder,
  Menu,
} from '@mui/icons-material'
import Avatare from '../../assets/logo/profil.svg'
import LbcLogo from '../../assets/logo/LbcLogo.svg'
import { Icon } from '../icon/Icon'
import { Toolbar, IconContainer } from './styles'
import { useRouter } from 'next/router'
import DrawerComponent from '../drawer/Drawer'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'
import { setLoggedUser } from '../../store/user/slice'

export const Header: React.FC = () => {
  const router = useRouter()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const [openDrawer, setOpenDrawer] = useState(false)

  const loggedUserId = getLoggedUserId()
  const dispatch = useDispatch()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data } = useSWR(`http://localhost:3005/user/${loggedUserId}`, fetcher)
  const loggedUser = data ? data[0] : null

  useEffect(() => {
    if (loggedUser) {
      dispatch(setLoggedUser(loggedUser))
    }
  }, [loggedUser])
  return (
    <>
      <AppBar sx={{ background: 'white', position: 'initial' }}>
        {isMatch ? (
          <>
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <IconButton
                color={'primary'}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <Menu />
              </IconButton>
              {!openDrawer && (
                <Icon
                  onClick={() => router.push(`/`)}
                  size={'200px'}
                  source={LbcLogo.src}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <Toolbar>
              <Icon
                onClick={() => router.push(`/`)}
                size={'200px'}
                source={LbcLogo.src}
              />
              <IconContainer>
                <Notifications sx={{ color: 'black', margin: '12px' }} />
                <FavoriteBorder sx={{ color: 'black', margin: '12px' }} />
                <Search sx={{ color: 'black', margin: '12px' }} />
                <div>
                  <IconButton
                    onClick={() => {
                      router.push(`/messages/1`)
                    }}
                    size="large"
                    aria-label="2 new emails"
                  >
                    <Badge badgeContent={2} color="primary">
                      <MailIcon sx={{ color: 'black' }} />
                    </Badge>
                  </IconButton>
                </div>
                <Icon size={'40px'} source={Avatare.src} />
              </IconContainer>
            </Toolbar>
          </>
        )}
      </AppBar>
    </>
  )
}
