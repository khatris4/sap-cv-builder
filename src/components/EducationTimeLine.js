import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';


export default function EducationTimeLine({ education_history, deleteEducationDegree }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>

            {
                education_history.length !== 0 &&
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 2,
                        },
                    }}
                >

                    {
                        education_history.map((degree,index) => {
                            return <TimelineItem key={degree.degreeID} >

                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                    {(education_history.length-1)!==index && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingBottom: 3 }}>
                                    <Typography
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {degree.start_date} - {degree.isContinue ? "continue" : degree.end_date}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                        {degree.degree} , {degree.institution} ,{degree.city} , {degree.country.label}
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>{degree.grade}</Typography>

                                    <Typography variant="body2" gutterBottom>Course Summary <br></br>
                                        {degree.course_summary}
                                    </Typography>
                                    <Button variant='outlined' color='error' size='small' onClick={() => deleteEducationDegree(degree.degreeID)}>Delete</Button>
                                </TimelineContent>
                            </TimelineItem>


                        })
                    }
                </Timeline>
            }
            {
                education_history.length == 0 && <Typography align='center'>No Qualifications added yet. <br></br> Start adding new qualification by clicking link above.</Typography>
            }
        </Box>

    );
}