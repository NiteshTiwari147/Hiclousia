import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import './styles.css';

export default function TopprList(props) {
  const { topprs } = props; 
  return <div className="topprListBox">
      <h3 style={{marginLeft: '1.5rem', alignSelf: 'baseline', width: 'inherit', color: 'gray'}}>List of Toppers</h3>
      <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper',right: '15px' }}>
      { topprs.map( (toppr,index) => {
          return <div>
                <ListItem alignItems="flex-start" divider button={true}>
                    <ListItemAvatar>
                        <Avatar alt={toppr.name} src={toppr.url} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={`${toppr.name}`}
                        secondary={
                        <React.Fragment>
                            {toppr.title}
                        </React.Fragment>
                        }
                    />
                </ListItem>
          </div>
      })}
    </List>
  </div>
}
