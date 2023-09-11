'use client';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BasicInformationSection from '@/components/BasicInformationSection';
import CVSectionButtons from '@/components/CVSectionButtons';
import { CVDATA } from '../assets/cvdata'
import WorkExperienceTimeLine from '@/components/WorkExperienceTimeLine';
import PublicationsTimeLine from '@/components/PublicationsTimeLine';
import PersonalStatement from '@/components/PersonalStatement';
import CareerSummary from '@/components/CareerSummary';
import EducationTimeLine from '@/components/EducationTimeLine';
import BasicInformationForm from '@/components/forms/BasicInformationForm';
import PersonalStatementForm from '@/components/forms/PersonalStatemenForm';
import CareerSummaryForm from '@/components/forms/CareerSummaryForm';
import NewWorkExperienceForm from '@/components/forms/NewWorkExperienceForm';
import NewPublicationForm from '@/components/forms/NewPublicationForm';
import _ from 'lodash';
import ProjectsTimeline from '@/components/ProjectsTimeLine';
import NewProjectForm from '@/components/forms/NewProjectForm';
import { IconButton, Tooltip } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import NewCouncilForm from '@/components/forms/NewCouncilForm';
import CouncilTimeLine from '@/components/CouncilTimeLine';
import NewCommitteeForm from '@/components/forms/NewCommitteeForm';
import CommitteeTimeLine from '@/components/CommitteeTimeLine';
import NewMembershipForm from '@/components/forms/NewMembershipForm';
import MembershipTimeLine from '@/components/MembershipTimeLine';
import NewAwardHonorForm from '@/components/forms/NewAwardHonorForm';
import AwardHonorsTimeLine from '@/components/AwardHonorsTimeLine';
import ConferencesList from '@/components/ConferencesList';
import NewConferenceForm from '@/components/forms/NewConferenceForm';
import NewJournalForm from '@/components/forms/NewJournalForm';
import JournalsList from '@/components/JournalsList';
import TechnicalSkillsList from '@/components/TechnicalSkillsList';
import NewAccreditionExperienceForm from '@/components/forms/NewAccreditionExperienceForm';
import AccreditationsTimeLine from '@/components/AccreditationsTimeLine';
import NewEditorialExperienceForm from '@/components/forms/NewEditorialExperience';
import EditorialExperienceTimeLine from '@/components/EditorialExperienceTimeLine';
import NewEducationDegreeForm from '@/components/forms/NewEducationDegreeForm';
import NewTechnicalSkillForm from '@/components/forms/NewTechnicalSkillForm';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

export default function Home() {
  const [cvdata, updateCVData] = useState(CVDATA)
  const [isBasicInfoEditModeOn, setEditBasicInfoMode] = useState(false);
  const [isPersonalStatementEditModeOn, setIsPersonalStatementEditModeOn] = useState(false);
  const [isCareerSummaryEditMode, setIsCareerSummaryEditMode] = useState(false);

  //states for forms
  const [openNewEducationForm, setOpenNewEducationForm] = useState(false);
  const [openNewExperienceForm, setOpenNewExperienceForm] = useState(false);
  const [openNewAccreditionExperienceForm, setOpenNewAccreditionExperienceForm] = useState(false);
  const [openNewProjectForm, setOpenNewProjectForm] = useState(false);
  const [openNewTechnicalSkillForm, setOpenNewTechnicalSkillForm] = useState(false);
  const [openNewEditorialExperienceForm, setOpenNewEditorialExperienceForm] = useState(false);
  const [openNewPublicationForm, setOpenNewPublicationForm] = useState(false);
  const [openNewCommitteeForm, setOpenNewCommitteeForm] = useState(false);
  const [openNewCouncilForm, setOpenNewCouncilForm] = useState(false);
  const [openNewMembershipForm, setOpenNewMembershipForm] = useState(false);
  const [openNewAwardHonorForm, setOpenNewAwardHonorForm] = useState(false);
  const [openNewConferenceForm, setOpenNewConferenceForm] = useState(false);
  const [openNewJournalForm, setOpenNewJournalForm] = useState(false);




  // function to update Career summary
  function updateCareerSummary(updatedCareerSummary) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      career_summary: updatedCareerSummary
    }));
  }

  // function to update Personal Statement
  function updatePersonalStatement(updatedStatement) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      personal_statement: updatedStatement
    }));

  }

  // function to update BasicInformation
  function updateBasicInformation(updatedData) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      basic_information: updatedData
    }));

  }


  /******************************************* FUNCTION FOR APPENDING NEW ITEMS TO THE LIST ************************************************ */

  //function to add new editorial experience to the exisiting list
  function addNewEditorialExperience(editorialExperienceDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      editorial_experience: [editorialExperienceDetails, ...prevCVData.editorial_experience]
    }));
  }


  //function to add new accreditation to the exisiting list
  function addNewAccreditionExperience(accreditationDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      accreditations: [accreditationDetails, ...prevCVData.accreditations]
    }));
  }


  //function to add new technical skill to the exisiting list
  function addNewTechnicalSkill(skillDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      technical_skills: [skillDetails, ...prevCVData.technical_skills]
    }));
  }

  //function to add new conference entry to the exisiting list
  function addNewJournal(journalDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      journals: [journalDetails, ...prevCVData.journals]
    }));
  }

  //function to add new conference entry to the exisiting list
  function addNewConference(conferenceDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      conferences: [conferenceDetails, ...prevCVData.conferences]
    }));
  }

  //function to add new award ifnromation to the exisiting list
  function addNewAwardHonor(awardDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      awards_honors: [awardDetails, ...prevCVData.awards_honors]
    }));
  }


  //function to add new membership details to the exisiting list
  function addNewMembership(membershipDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      memberships: [membershipDetails, ...prevCVData.memberships]
    }));
  }

  //function to add new committee to the exisiting list
  function addNewCommittee(newCommitteeDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      committees: [newCommitteeDetails, ...prevCVData.committees]
    }));
  }

  //function to add new publication to the exisiting list
  function addNewCouncil(newCouncilData) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      councils: [newCouncilData, ...prevCVData.councils]
    }));
  }


  //function to add new publication to the exisiting list
  function addNewPublication(newPublicationData) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      publications: [newPublicationData, ...prevCVData.publications]
    }));
  }

  //function to add new work experience
  function addNewWorkExperience(newWorkExperience) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      work_history: [newWorkExperience, ...prevCVData.work_history]
    }));
  }


  //function to add new project Information
  function addNewProject(newProjectDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      projects: [newProjectDetails, ...prevCVData.projects]
    }));
  }

  //function to add new degree Information
  function addNewDegree(newDegreeDetails) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      education_history: [newDegreeDetails, ...prevCVData.education_history]
    }));
  }



  /********************************** FUNCTION FOR DELEING THE PROPERTY FROM THE OBJECT *************************************************** */

  // function to delete editorial experience property from the object
  function deleteEditorialExperienceSection() {
    const { editorial_experience, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delte accreditations property from the object
  function deleteAccreditationsSection() {
    const { accreditations, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delete technicalSkills property from the object
  function deleteTechnicallSection() {
    const { technical_skills, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete journals property from the object
  function deleteJournalsSection() {
    const { journals, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delete conferences property from the object
  function deleteConferencesSection() {
    const { conferences, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delete awards property from the object
  function deleteAwardSection() {
    const { awards_honors, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delete memberships property from the object
  function deleteMembershipSection() {
    const { memberships, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delete committees property from the object
  function deleteCommitteeSection() {
    const { committees, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete councils property from the object
  function deleteCouncilsSection() {
    const { councils, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  // function to delete personal statement
  function deletePersonalStatement() {
    const { personal_statement, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete career summary
  function deleteCareerSummary() {
    const { career_summary, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete education history
  function deleteEducationHistory() {
    const { education_history, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete work history
  function deleteWorkHistory() {
    const { work_history, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete Publications
  function deletePublications() {
    const { publications, ...rest } = cvdata;
    updateCVData({ ...rest });
  }

  // function to delete Projects Section
  function deleteProjects() {
    const { projects, ...rest } = cvdata;
    updateCVData({ ...rest });
  }


  /************************************* FUNCTION FOR ADDING PROPERTY BACK TO THE MAIN OBJECT ***********************************************/

  const CVMenuButtonHandlers = {

    //function for adding editorialExperience property to the list 
    addNewEditorialExperienceSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        editorial_experience: []
      }));
    },

    //function for adding accreditationsections property to the list 
    addAccreditionsSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        accreditations: []
      }));
    },


    //function for adding technical skills property to the list 
    addTechnicalSkillsSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        technical_skills: []
      }));
    },

    //function for adding journals property to the list 
    addJournalsSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        journals: []
      }));
    },

    //function for adding conferences property to the list 
    addConferencesSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        conferences: []
      }));
    },


    //function for adding awards property to the list 
    addAwardSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        awards_honors: []
      }));
    },

    //function for adding memberships property to the list 
    addMembershipsSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        memberships: []
      }));
    },


    //function for adding committee to the list 
    addCommitteeSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        committees: []
      }));
    },

    //function for adding councils object 
    addCouncilsSection: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        councils: []
      }));
    },

    //function for adding personal statement
    addPersonalStatement: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        personal_statement: 'Double tap or click to update ...'
      }));
    },

    // function to add career summary
    addCareerSummary: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        career_summary: 'Double tap or click to update ...'
      }));
    },


    // function to add education history
    addEducationHistory: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        education_history: []
      }));
    },


    // function to add work history section
    addWorkHistory: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        work_history: []
      }));
    },

    // function to add Publications
    addPublications: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        publications: []
      }));
    },

    // function to add  Projects Section
    addProjects: () => {
      updateCVData(prevCVData => ({
        ...prevCVData,
        projects: []
      }));
    }
  }


  /*************************************** FUNCTION TO DELETE INDIVIDUAL ITEMS FROM THE LIST ***************************************/

  //function to delete editorialExperience item from the exisiting list
  function deleteEditorialExperience(experienceID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      editorial_experience: prevCVData.editorial_experience.filter(experience => experience.experienceID !== experienceID)
    }));
  }

  //function to delete accreditation details from the exisiting list
  function deleteAccreditation(experienceID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      accreditations: prevCVData.accreditations.filter(accreditation => accreditation.experienceID !== experienceID)
    }));
  }


  //function to delete technical skills details from the exisiting list
  function deleteTechnicalSkill(skillID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      technical_skills: prevCVData.technical_skills.filter(skill => skill.skillID !== skillID)
    }));
  }

  //function to delete journal details from the exisiting list
  function deleteJournal(journalID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      journals: prevCVData.journals.filter(journal => journal.journalID !== journalID)
    }));
  }

  //function to delete conference details from the exisiting list
  function deleteConference(conferenceID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      conferences: prevCVData.conferences.filter(conference => conference.conferenceID !== conferenceID)
    }));
  }

  //function to delete award details from the exisiting list
  function deleteAward(award_honor_ID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      awards_honors: prevCVData.awards_honors.filter(award => award.award_honor_ID !== award_honor_ID)
    }));
  }

  //function to delete membership details from the exisiting list
  function deleteMembership(membershipID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      memberships: prevCVData.memberships.filter(membership => membership.membershipID !== membershipID)
    }));
  }

  //function to delete committee from the exisiting list
  function deleteCommittee(committeeID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      committees: prevCVData.committees.filter(committee => committee.committeeID !== committeeID)
    }));
  }

  //function to delete council from the exisiting list
  function deleteCouncil(councilID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      councils: prevCVData.councils.filter(council => council.councilID !== councilID)
    }));
  }

  //function to delete publication from the exisiting list
  function deletePublication(publicationID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      publications: prevCVData.publications.filter(publication => publication.publicationID !== publicationID)
    }));
  }

  //function to delete existing work experience
  function deleteWorkExperience(employmentID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      work_history: prevCVData.work_history.filter(experience => experience.employmentID !== employmentID)
    }));
  }


  //function to delete project from the list
  function deleteProject(projectID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      projects: prevCVData.projects.filter(project => project.projectID !== projectID)
    }));
  }

  //function to delete degree from the education degree list
  function deleteEducationDegree(degreeID) {
    updateCVData(prevCVData => ({
      ...prevCVData,
      education_history: prevCVData.education_history.filter(degree => degree.degreeID !== degreeID)
    }));
  }



  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        paddingX: {
          xs: 1,
          sm: 5,
          md: 10
        }
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop:2,
          width: '100%'
        }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Personal Information
          </Typography>

          <Tooltip title='Update Personal Information'>
            <IconButton onClick={() => setEditBasicInfoMode(true)}>
              <EditNoteOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {!isBasicInfoEditModeOn && <BasicInformationSection basic_information={cvdata.basic_information} />}

        {isBasicInfoEditModeOn && <BasicInformationForm basic_information={cvdata.basic_information} updateBasicInformation={updateBasicInformation} setEditBasicInfoMode={setEditBasicInfoMode} />}

        {cvdata.hasOwnProperty('personal_statement') &&
          !isPersonalStatementEditModeOn &&
          <PersonalStatement personal_statement={cvdata.personal_statement} deletePersonalStatement={deletePersonalStatement} setIsPersonalStatementEditModeOn={setIsPersonalStatementEditModeOn} />}


        {cvdata.hasOwnProperty('personal_statement') && isPersonalStatementEditModeOn && <PersonalStatementForm personal_statement={cvdata.personal_statement} updatePersonalStatement={updatePersonalStatement} setIsPersonalStatementEditModeOn={setIsPersonalStatementEditModeOn} />}

        {cvdata.hasOwnProperty('career_summary') && !isCareerSummaryEditMode && <CareerSummary career_summary={cvdata.career_summary} deleteCareerSummary={deleteCareerSummary} setIsCareerSummaryEditMode={setIsCareerSummaryEditMode} />}
        {cvdata.hasOwnProperty('career_summary') && isCareerSummaryEditMode && <CareerSummaryForm career_summary={cvdata.career_summary} updateCareerSummary={updateCareerSummary} setIsCareerSummaryEditMode={setIsCareerSummaryEditMode} />}


        {cvdata.hasOwnProperty('education_history') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Typography variant="h6">
              Education
            </Typography>
            <Box>
              <Tooltip title='Add education degree'>
                <IconButton onClick={() => setOpenNewEducationForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='delete education history'>
                <IconButton onClick={deleteEducationHistory}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <EducationTimeLine education_history={cvdata.education_history} deleteEducationDegree={deleteEducationDegree} /></>}




        {cvdata.hasOwnProperty('work_history') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Typography variant="h6">
              Experiences
            </Typography>
            <Box>
              <Tooltip title='Add New Experience'>
                <IconButton onClick={() => setOpenNewExperienceForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete all experiences'>
                <IconButton onClick={deleteWorkHistory}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <WorkExperienceTimeLine work_history={cvdata.work_history} deleteWorkExperience={deleteWorkExperience} /></>}



        {cvdata.hasOwnProperty('accreditations') && <>
          <Box sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h6">
              Accreditations
            </Typography>

            <Box>
              <Tooltip title='Add New accreditation'>
                <IconButton onClick={() => setOpenNewAccreditionExperienceForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete accreditation section'>
                <IconButton onClick={deleteAccreditationsSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <AccreditationsTimeLine accreditations={cvdata.accreditations} deleteAccreditation={deleteAccreditation} /></>}

        {cvdata.hasOwnProperty('projects') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Projects
            </Typography>


            <Box>
              <Tooltip title='Add New Project'>
                <IconButton onClick={() => setOpenNewProjectForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Projects'>
                <IconButton onClick={deleteProjects}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>

          </Box>
          <ProjectsTimeline projects={cvdata.projects} deleteProject={deleteProject} />
        </>}


        {
          cvdata.hasOwnProperty('technical_skills') && <>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}>
              <Typography variant="h6">
                Technical Skills
              </Typography>
              <Box>
                <Tooltip title='Add Technical Skill'>
                  <IconButton onClick={() => setOpenNewTechnicalSkillForm(true)}>
                    <LibraryAddOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Delete Technical Skill Section'>
                  <IconButton onClick={deleteTechnicallSection}>
                    <HighlightOffOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Box>

            </Box>
            <NewTechnicalSkillForm open={openNewTechnicalSkillForm} setOpen={setOpenNewTechnicalSkillForm} addNewTechnicalSkill={addNewTechnicalSkill} />
            <TechnicalSkillsList technical_skills={cvdata.technical_skills} deleteTechnicalSkill={deleteTechnicalSkill} />
          </>
        }


        {cvdata.hasOwnProperty('editorial_experience') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Editorial Board and Organized Special Issue
            </Typography>
            <Box>
              <Tooltip title='Add Editoial Experience'>
                <IconButton onClick={() => setOpenNewEditorialExperienceForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Editoial ExperienceEditoial Experience Section'>
                <IconButton onClick={deleteEditorialExperienceSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>

          </Box>

          <EditorialExperienceTimeLine editorial_experience={cvdata.editorial_experience} deleteEditorialExperience={deleteEditorialExperience} /></>}


        {cvdata.hasOwnProperty('publications') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Publications
            </Typography>
            <Box>
              <Tooltip title='Add Editoial Experience'>
                <IconButton onClick={() => setOpenNewPublicationForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Publications Section'>
                <IconButton onClick={deletePublications}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <PublicationsTimeLine publications={cvdata.publications} deletePublication={deletePublication} /></>}

        {cvdata.hasOwnProperty('committees') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Committees Associations
            </Typography>
            <Box>
              <Tooltip title='Add Committee Memberships'>
                <IconButton onClick={() => setOpenNewCommitteeForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Committee Memberships Section'>
                <IconButton onClick={deleteCommitteeSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <CommitteeTimeLine committees={cvdata.committees} deleteCommittee={deleteCommittee} />
        </>}



        {cvdata.hasOwnProperty('councils') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Councils Association
            </Typography>
            <Box>
              <Tooltip title='Add Council Memberships'>
                <IconButton onClick={() => setOpenNewCouncilForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Councils  Section'>
                <IconButton onClick={deleteCouncilsSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <CouncilTimeLine councils={cvdata.councils} deleteCouncil={deleteCouncil} />
        </>
        }

        {cvdata.hasOwnProperty('memberships') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Memberships
            </Typography>
            <Box>
              <Tooltip title='Add Membership'>
                <IconButton onClick={() => setOpenNewMembershipForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete membership section'>
                <IconButton onClick={deleteMembershipSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <MembershipTimeLine memberships={cvdata.memberships} deleteMembership={deleteMembership} />
        </>
        }

        {cvdata.hasOwnProperty('awards_honors') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Honors / Awards
            </Typography>
            <Box>
              <Tooltip title='Add Award/Honor Details'>
                <IconButton onClick={() => setOpenNewAwardHonorForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Awards/Honors section'>
                <IconButton onClick={deleteAwardSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <AwardHonorsTimeLine awards_honors={cvdata.awards_honors} deleteAward={deleteAward} />
        </>
        }

        {cvdata.hasOwnProperty('conferences') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Conferences
            </Typography>
            <Box>
              <Tooltip title='Add Conference Details'>
                <IconButton onClick={() => setOpenNewConferenceForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete Conference section'>
                <IconButton onClick={deleteConferencesSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <ConferencesList conferences={cvdata.conferences} deleteConference={deleteConference} />
        </>
        }

        {cvdata.hasOwnProperty('journals') && <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Typography variant="h6">
              Journals
            </Typography>
            <Box>
              <Tooltip title='Add journal Details'>
                <IconButton onClick={() => setOpenNewJournalForm(true)}>
                  <LibraryAddOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete journals section'>
                <IconButton onClick={deleteJournalsSection}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <JournalsList journals={cvdata.journals} deleteJournal={deleteJournal} />
        </>
        }


        <CVSectionButtons cvdata={cvdata} CVMenuButtonHandlers={CVMenuButtonHandlers} />

        <NewEducationDegreeForm open={openNewEducationForm} setOpen={setOpenNewEducationForm} addNewDegree={addNewDegree} />
        <NewWorkExperienceForm open={openNewExperienceForm} setOpen={setOpenNewExperienceForm} addNewWorkExperience={addNewWorkExperience} />
        <NewAccreditionExperienceForm open={openNewAccreditionExperienceForm} setOpen={setOpenNewAccreditionExperienceForm} addNewAccreditionExperience={addNewAccreditionExperience} />
        <NewProjectForm open={openNewProjectForm} setOpen={setOpenNewProjectForm} addNewProject={addNewProject} />
        <NewEditorialExperienceForm open={openNewEditorialExperienceForm} setOpen={setOpenNewEditorialExperienceForm} addNewEditorialExperience={addNewEditorialExperience} />
        <NewPublicationForm open={openNewPublicationForm} setOpen={setOpenNewPublicationForm} addNewPublication={addNewPublication} />
        <NewCommitteeForm open={openNewCommitteeForm} setOpen={setOpenNewCommitteeForm} addNewCommittee={addNewCommittee} />
        <NewCouncilForm open={openNewCouncilForm} setOpen={setOpenNewCouncilForm} addNewCouncil={addNewCouncil} />
        <NewMembershipForm open={openNewMembershipForm} setOpen={setOpenNewMembershipForm} addNewMembership={addNewMembership} />
        <NewAwardHonorForm open={openNewAwardHonorForm} setOpen={setOpenNewAwardHonorForm} addNewAwardHonor={addNewAwardHonor} />
        <NewConferenceForm open={openNewConferenceForm} setOpen={setOpenNewConferenceForm} addNewConference={addNewConference} />
        <NewJournalForm open={openNewJournalForm} setOpen={setOpenNewJournalForm} addNewJournal={addNewJournal} />

      </Box>
    </Box>
  )
}

