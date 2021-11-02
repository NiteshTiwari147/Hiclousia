import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import './styles.css';

export default function TopprList(props) {
  const topprs = [
    {
        'name': 'Harry Thomas #1',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
    },
    {
        'name': 'Maria Khan #2',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        'name': 'Waqif Khuresi #3',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    },
    {
        'name': 'Rebo Dsouza #4',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        'name': 'Thomas Jr. #5',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        'name': 'Sophia Remos #6',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        'name': 'Stephie Taylor #7',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        'name': 'Peter Skyler #8',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1532032877540-0793b44545a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        'name': 'Nitesh Tiwari #26',
        'title': 'Lorem ipsum dolor sit...',
        'url': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'
    }
  ]
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
