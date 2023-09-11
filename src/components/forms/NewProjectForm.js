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


export default function NewProjectForm({ open, setOpen, addNewProject }) {
    const projectTitleRef = useRef('');
    const designationRef = useRef('');
    const [projectCountry, setProjectCountry] = useState(null);
    const projectCityRef = useRef('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isContinue, setIsContinue] = useState(false);
    const descriptionRef = useRef('');


    function resetFields() {
        projectTitleRef.current = '',
            designationRef.current = '',
            setProjectCountry(null),
            projectCityRef.current = '',
            setStartDate(null),
            setEndDate(null),
            setIsContinue(false),
            descriptionRef.current = ''
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewProject({
            projectID: uniqid(),
            project_title: projectTitleRef.current,
            designation: designationRef.current,
            country: projectCountry,
            city: projectCityRef.current,
            start_date: JSON.stringify(startDate).substring(1, 11),
            end_date: JSON.stringify(endDate).substring(1, 11),
            isContinue: isContinue,
            description: descriptionRef.current
        })
        resetFields();
        setOpen(false);
    };

    return (

        <Modal
            aria-labelledby="transition-modal-add-new-experience-record"
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
                        ...style
                    }}
                >

                    <Box component="form" onSubmit={handleSubmit} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Typography variant='h5'> Project Details</Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="position-title"
                                    required
                                    fullWidth
                                    id="project-title"
                                    label="Project Title"
                                    size='small'
                                    ref={projectTitleRef}
                                    autoFocus
                                    onChange={e => projectTitleRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="position-designation"
                                    required
                                    fullWidth
                                    id="project-designation"
                                    label="Designation"
                                    size='small'
                                    ref={designationRef}
                                    autoFocus
                                    onChange={e => designationRef.current = e.target.value}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <CountrySelector country={projectCountry} setCountry={setProjectCountry} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="project-city"
                                    label="City "
                                    size='small'
                                    name="project-city"
                                    autoComplete='off'
                                    ref={projectCityRef}
                                    onChange={e => projectCityRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker value={startDate} label="Start Date" size='small' format='LL' onChange={date => setStartDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} >
                                <FormGroup>
                                    <FormControlLabel control={<Switch
                                        value={isContinue}
                                        onChange={() => {
                                            setIsContinue(!isContinue);
                                        }}
                                    />} label='On going Project' />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker disabled={isContinue} value={endDate} label="End Date" size='small' format='LL' onChange={date => setEndDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="project-description"
                                    label="Project Description"
                                    size='small'
                                    name="project-description"
                                    autoComplete='off'
                                    multiline
                                    rows={3}
                                    ref={descriptionRef}
                                    onChange={e => descriptionRef.current = e.target.value}
                                />
                            </Grid>

                        </Grid>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            },
                            gap: 1,
                            padding: 1
                        }}>
                            <Button
                                fullWidth
                                size='small'
                                variant="outlined"
                                color='inherit'
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                size='small'
                                color='success'
                                variant='outlined'
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