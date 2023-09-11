import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { IconButton, Tooltip } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SiResearchgate } from 'react-icons/si';
import { PUBLICATION_TYPES } from '@/data/data';
const _ = require("lodash");


export default function PublicationsTimeLine({ publications, deletePublication }) {

  const pubTypesAsObject = _.groupBy(publications, 'type');
  const pubTypesAsArray = Object.getOwnPropertyNames(pubTypesAsObject);


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight:'20vh'
    }}>

      {
        publications.length !== 0 &&

        pubTypesAsArray.map(type => {
          return (
            <Box key={type} sx={{paddingLeft:5}}>
              <Typography>{type}</Typography>

              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >

                {
                  publications.filter(publication => publication.type == type)
                    .map(publication => {
                      return (
                        <TimelineItem key={publication.publicationID}>

                          <TimelineSeparator>
                            <TimelineDot color='success' />
                          </TimelineSeparator>
                          <TimelineContent sx={{ paddingBottom: 3 }}>

                            <Typography sx={{ lineHeight: 1.2 }} variant="body2" gutterBottom>
                              {publication.authors.length !== 0 &&
                                publication.authors.reduce(
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
                                )} ({publication.publication_date.substring(0, 4)}) {publication.title}
                              <br></br>
                              <span style={{ fontStyle: 'italic' }}>{publication.publication_event}, {publication.publication_venue}</span>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              <span style={{ fontWeight: 'bold' }}>Abstract</span> <br></br>
                              {publication.abstract}
                            </Typography>
                            <Button variant='outlined' color='error' size='small' onClick={() => deletePublication(publication.publicationID)}>Delete</Button>
                          </TimelineContent>
                        </TimelineItem>
                      )
                    })
                }
              </Timeline>

            </Box>)
        })
      }
      {
        publications.length == 0 && <Typography align='center'>No Publications added yet. <br></br> Start adding new qualification by clicking Add Button.</Typography>
      }
    </Box>
  );
}


