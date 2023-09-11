import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Tooltip } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';


export default function JournalsList({ journals, deleteJournal }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>
            {journals.length == 0 && <Typography align='center'>No journals added yet. <br></br> Start adding new journal by clicking Add button above.</Typography>}

            {journals.length !== 0 &&

                <List >
                    {
                        journals.map(journal => {

                            return <ListItem key={journal.journalID}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteJournal(journal.journalID)}>
                                        <ClearIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>

                                    <WorkspacePremiumIcon />

                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        journal.authors.reduce(
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
                                        ) + " , " + journal.title + " , " + journal.journal + ", pages " + journal.page_range + " , " + journal.published_on.substring(0, 4)}

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

