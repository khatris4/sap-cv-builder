import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';


export default function ProjectsTimeline({ projects, deleteProject  }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>
            
            {
                projects.length != 0 &&

                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 2,
                        },
                    }}
                >

                    {
                        projects.map((project) => {
                            return <TimelineItem key={project.projectID} >

                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingBottom: 3 }}>
                                    <Typography
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {project.start_date} - {project.isContinue ? "continue" : project.end_date}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                        {project.project_title} , {project.designation}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {project.city} , {project.country.label}
                                    </Typography>



                                    <Typography variant="body2" gutterBottom>Project Description <br></br>
                                        {project.description}
                                    </Typography>
                                    <Button variant='outlined' color='error' size='small' onClick={()=> deleteProject(project.projectID)}>Delete</Button>
                                </TimelineContent>
                            </TimelineItem>


                        })
                    }
                </Timeline>

            }

            {
                projects.length == 0 && <Typography align='center'>No Projects added yet. <br></br> Start adding new qualification by clicking link above.</Typography>
            }
        </Box>

    );
}