import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { ChatBubbleOutline, PowerSettingsNew } from '@material-ui/icons';

export default function Header() {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm={true}></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}