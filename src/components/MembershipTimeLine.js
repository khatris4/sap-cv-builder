import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';

export default function MembershipTimeLine({ memberships, deleteMembership }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>
            {
                memberships.length !== 0 &&
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 1,
                        },
                    }}
                >
                    {
                        memberships.map((membership) => {
                            return <TimelineItem key={membership.membershipID} >

                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingBottom: 3 }}>
                                    <Typography
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {membership.start_date} - {membership.isContinue ? "continue" : membership.end_date}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                    {membership.membership_type}, {membership.organization}
                                    </Typography>
                                    
                                    <Button variant='outlined' color='error' size='small' onClick={()=> deleteMembership(membership.membershipID)}>Delete</Button>
                                </TimelineContent>
                            </TimelineItem>


                        })
                    }
                </Timeline>
            }
            {
                memberships.length == 0 && <Typography align='center'>No memberships added yet. <br></br> Start adding new by clicking button above.</Typography>
            }
        </Box>
    );
}