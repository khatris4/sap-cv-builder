import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function ConferencesList({ conferences, deleteConference }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>


            {conferences.length == 0 && <Typography align='center'>No conferences added yet. <br></br> Start adding new conferences by clicking Add button above.</Typography>}

            {conferences.length !== 0 &&

                <List >
                    {
                        conferences.map(conference => {

                            return <ListItem key={conference.conferenceID}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteConference(conference.conferenceID)}>
                                        <ClearIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>

                                    <RadioButtonUncheckedIcon />

                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        conference.authors.reduce(
                                            (acc, author, current_index) => {
                                                if (!_.isEmpty(author.last_name)) {
                                                    return (
                                                        acc +
                                                        author.last_name[0].toUpperCase() +
                                                        ". " +
                                                        author.first_name +
                                                        " , "
                                                    );
                                                } else return acc + author.first_name + " , ";
                                            },
                                            ""
                                        ) + " , " + conference.title + " , " + conference.conference + ", pages " + conference.page_range + " , " + conference.heldOn.substring(0, 4)}

                                    secondary=''
                                >
                                </ListItemText>
                            </ListItem>

                        })
                    }


                </List>
            }
        </Box>


    );
}

