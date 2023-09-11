import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';
import { AiOutlineDelete } from 'react-icons/ai';
import { GiGraduateCap } from 'react-icons/gi';
import { IconButton, Tooltip } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function CouncilTimeLine({ councils, deleteCouncil }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>
            {
                councils.length !== 0 &&
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 2,
                        },
                    }}
                >

                    {
                        councils.map((council) => {
                            return <TimelineItem key={council.councilID} >

                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingBottom: 3 }}>
                                    <Typography
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {council.start_date} - {council.isContinue ? "continue" : council.end_date}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                        {council.name} , {council.city} , {council.country.label}
                                    </Typography>
                                    <Button variant='outlined' color='error' size='small' onClick={() => deleteCouncil(council.councilID)}>Delete</Button>
                                </TimelineContent>
                            </TimelineItem>


                        })
                    }
                </Timeline>
            }
            {
                councils.length == 0 && <Typography align='center'>No Councils added yet. <br></br> Start adding new by clicking add button above.</Typography>
            }
        </Box>

    );
}