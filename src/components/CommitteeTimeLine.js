import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';
import { isNull } from 'lodash';


export default function CommitteeTimeLine({ committees, deleteCommittee }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>
            {
                committees.length !== 0 &&
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 2,
                        },
                    }}
                >

                    {
                        committees.map((committee) => {
                            return <TimelineItem key={committee.committeeID} >

                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingBottom: 3 }}>
                                    <Typography
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {committee.start_date} - {committee.isContinue ? "continue" : committee.end_date}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                    {committee.designation}, {committee.name} , {committee.city} , {_.isNull(committee.country)?'': committee.country.label}
                                    </Typography>
                                    
                                    <Button variant='outlined' color='error' size='small' onClick={()=> deleteCommittee(committee.committeeID)}>Delete</Button>
                                </TimelineContent>
                            </TimelineItem>


                        })
                    }
                </Timeline>
            }
            {
                committees.length == 0 && <Typography align='center'>No Committees added yet. <br></br> Click Add button to start adding Committee memberships.</Typography>
            }
        </Box>

    );
}