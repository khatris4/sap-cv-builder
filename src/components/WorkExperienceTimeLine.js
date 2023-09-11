import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';


export default function WorkExperienceTimeLine({ work_history, deleteWorkExperience }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight:'20vh'
    }}>
      {
        work_history.length != 0 &&
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 2,
            },
          }}
        >

          {
            work_history.map((work_experience,index) => {
              return <TimelineItem key={work_experience.employmentID} >

                <TimelineSeparator>
                  <TimelineDot color='success' />
                  {(work_history.length-1)!==index && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ paddingBottom: 3 }}>
                  <Typography
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {work_experience.start_date} - {work_experience.isContinue ? "continue" : work_experience.end_date}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    {work_experience.position_designation} , {work_experience.employer}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {work_experience.city} , {work_experience.country.label}
                  </Typography>

                  <Typography variant="body2" gutterBottom>Duties & Responsibilities <br></br>
                    {work_experience.duties_responsibilities}
                  </Typography>

                  <Typography variant="body2" gutterBottom>Achievements <br></br>
                    {work_experience.achievements}
                  </Typography>

                  <Button variant='outlined' color='error' size='small' onClick={() => deleteWorkExperience(work_experience.employmentID)}>Delete</Button>
                </TimelineContent>
              </TimelineItem>


            })
          }
        </Timeline>
      }
      {
        work_history.length == 0 && <Typography align='center'>No experiences added yet. <br></br> Start adding new qualification by clicking link above.</Typography>
      }
    </Box>

  );
}