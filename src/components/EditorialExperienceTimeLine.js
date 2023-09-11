import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { IconButton, Tooltip } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';



export default function EditorialExperienceTimeLine({ editorial_experience, deleteEditorialExperience }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight:'20vh'
        }}>
            {
                editorial_experience.length != 0 &&
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 2,
                        },
                    }}
                >

                    {
                        editorial_experience.map((experience) => {
                            return <TimelineItem key={experience.experienceID} >

                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                    
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingBottom: 3 }}>
                                    <Typography
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {experience.start_date.length !== 0 ? experience.start_date : 'N/A'} - {experience.isContinue ? "continue" : (experience.end_date.length !== 0 ? experience.end_date : 'N/A')}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                        {experience.role} | {experience.association}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {experience.city} {experience.country ? ' ,' + experience.country.label : ''}
                                    </Typography>

                                    <Typography variant="body2" gutterBottom>
                                        {experience.description}
                                    </Typography>

                                    <Button variant='outlined' color='error' size='small' onClick={() => deleteEditorialExperience(experience.experienceID)}>Delete</Button>
                                </TimelineContent>
                            </TimelineItem>


                        })
                    }
                </Timeline>
            }
            {
                editorial_experience.length == 0 && <Typography align='center'>No Records are added yet. <br></br> Start adding new by clicking Add button above.</Typography>
            }
        </Box>

    );
}