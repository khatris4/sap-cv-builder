import { useRef, useState } from 'react';
import uniqid from 'uniqid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormGroup, FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import CountrySelector from '../CountrySelector';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '1%',
  left: '1%',
  bottom: '1%',
  right: '1%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function NewEducationDegreeForm({
  open,
  setOpen,
  addNewDegree,
}) {
  const institutionRef = useRef('');
  const degreeRef = useRef('');
  const [institutionCountry, setInstitutionCountry] = useState(null);
  const institutionCityRef = useRef('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isContinue, setIsContinue] = useState(false);
  const degreeGradeRef = useRef('');
  const courseSummaryRef = useRef('');

  function resetFields() {
    institutionRef.current = '';
    degreeRef.current = '';
    setInstitutionCountry(null);
    institutionCityRef.current = '';
    setStartDate(null);
    setEndDate(null);
    setIsContinue(false);
    degreeGradeRef.current = '';
    courseSummaryRef.current = '';
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!institutionCountry) {
      alert('Please select the country');
      return;
    }
    if (!startDate) {
      alert('Please select the course start date');
      return;
    }

    if (!isContinue && !endDate) {
      alert('Please select the course end date');
      return;
    }
    addNewDegree({
      degreeID: uniqid(),
      institution: institutionRef.current,
      degree: degreeRef.current,
      country: institutionCountry,
      city: institutionCityRef.current,
      start_date: JSON.stringify(startDate).substring(1, 11),
      end_date: JSON.stringify(endDate).substring(1, 11),
      isContinue: isContinue,
      grade: degreeGradeRef.current,
      course_summary: courseSummaryRef.current,
    });
    resetFields();
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-add-new-education-record"
      aria-describedby="transition-modal-add-new-education-record"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 100,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'inherit',
            overflowY: 'scroll',
            ...style,
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  {' '}
                  Education Qualification Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="institution-name"
                  required
                  fullWidth
                  id="institution-name"
                  label="Institution Name"
                  size="small"
                  ref={institutionRef}
                  autoFocus
                  onChange={(e) => (institutionRef.current = e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="degree-name"
                  required
                  fullWidth
                  id="degree-name"
                  label="Degree"
                  size="small"
                  ref={degreeRef}
                  autoFocus
                  onChange={(e) => (degreeRef.current = e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CountrySelector
                  country={institutionCountry}
                  setCountry={setInstitutionCountry}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="institution-city"
                  label="City "
                  size="small"
                  name="institution-city"
                  autoComplete="off"
                  ref={institutionCityRef}
                  onChange={(e) =>
                    (institutionCityRef.current = e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      required
                      value={startDate}
                      label="Start Date"
                      size="small"
                      format="LL"
                      onChange={(date) => setStartDate(date)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        value={isContinue}
                        onChange={() => {
                          setIsContinue(!isContinue);
                        }}
                      />
                    }
                    label="Ongoing course"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      disabled={isContinue}
                      value={endDate}
                      label="End Date"
                      size="small"
                      format="LL"
                      onChange={(date) => setEndDate(date)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="degree-grade"
                  label="Degree grade / remarks"
                  size="small"
                  name="degree_grade"
                  autoComplete="off"
                  ref={degreeGradeRef}
                  onChange={(e) => (degreeGradeRef.current = e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="course-summary"
                  label="Course Summary"
                  size="small"
                  name="course-summary"
                  autoComplete="off"
                  multiline
                  rows={3}
                  ref={courseSummaryRef}
                  onChange={(e) => (courseSummaryRef.current = e.target.value)}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: 'text.error',
                  p: 1,
                  flexGrow: 1,
                  borderRadius: 1,
                }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="small"
                sx={{
                  backgroundColor: 'success.main',
                  p: 1,
                  flexGrow: 1,
                  borderRadius: 1,
                }}
                variant="contained"
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
