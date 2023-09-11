"use client";
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';


export default function CVSectionButtons({ cvdata, CVMenuButtonHandlers }) {

  return (
    <>
    <Typography variant='h5' align='center'> Add Sections</Typography>

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: 1,
      rowGap: 1,
      justifyContent: 'center',
      padding:2,
      fontWeight:'bold',
        width:'100%'
    }}>

      {!cvdata.hasOwnProperty('personal_statement') && <Button sx={{ backgroundColor:'secondary.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addPersonalStatement()}>Add Personal Statement</Button>}


      {!cvdata.hasOwnProperty('career_summary') && <Button sx={{ backgroundColor:'error.main', flexGrow:1,padding:1}}    variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addCareerSummary()}>Add Career Summary</Button>}


      {!cvdata.hasOwnProperty('education_history') && <Button sx={{ backgroundColor:'warning.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addEducationHistory()}>Add Education</Button>}


      {!cvdata.hasOwnProperty('work_history') && <Button sx={{ backgroundColor:'info.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addWorkHistory()}>Add Work Experience </Button>}

      {!cvdata.hasOwnProperty('projects') && <Button sx={{ backgroundColor:'success.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addProjects()}>Add Projects </Button>}


      {!cvdata.hasOwnProperty('publications') && <Button sx={{ backgroundColor:'text.primary', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addPublications()}>Add Publications</Button>}

      {!cvdata.hasOwnProperty('technical_skills') && <Button sx={{ backgroundColor:'text.secondary', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addTechnicalSkillsSection()}>Add Technical Skills</Button>}

      {!cvdata.hasOwnProperty('editorial_experience') && <Button sx={{ backgroundColor:'warning.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addNewEditorialExperienceSection()}>Add Editorial Experience</Button>}
      
      {!cvdata.hasOwnProperty('committees') && <Button sx={{  backgroundColor:'error.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addCommitteeSection()}>Add Committee</Button>}
      
      {!cvdata.hasOwnProperty('councils') && <Button sx={{ backgroundColor:'secondary.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addCouncilsSection()}>Add Councils</Button>}

      {!cvdata.hasOwnProperty('memberships') && <Button sx={{ backgroundColor:'warning.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addMembershipsSection()}>Add Memberships</Button>}

      {!cvdata.hasOwnProperty('awards_honors') && <Button sx={{ backgroundColor:'error.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addAwardSection()}>Add Awards / Honors</Button>}

      {!cvdata.hasOwnProperty('conferences') && <Button sx={{ backgroundColor:'text.primary', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addConferencesSection()}>Add Conferences</Button>}

      {!cvdata.hasOwnProperty('journals') && <Button sx={{ backgroundColor:'info.main', flexGrow:1,padding:1}}   variant="contained" size="small" onClick={() => CVMenuButtonHandlers.addJournalsSection()}>Add Journals</Button>}


    </Box>
    </>
  );
}
