import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CountrySelector from '../CountrySelector';
import uniqid from 'uniqid';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
    position: 'absolute',
    top: '1%',
    left: '1%',
    bottom: '1%',
    right:'1%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function NewAccreditionExperienceForm({  open, setOpen, addNewAccreditionExperience }) {
    const roleRef = useRef('');
    const organizationRef = useRef('');
    const [organizationCountry, setOrganizationCountry] = useState(null);
    const organizationCityRef = useRef('');

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isContinue, setIsContinue] = useState(false);

    const descriptionRef = useRef([]);

    function resetFields(){
        roleRef.current='',
        organizationRef.current='',
        setOrganizationCountry(null),
        organizationCityRef.current='',
        setStartDate(null),
        descriptionRef.current=''
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        addNewAccreditionExperience({
            experienceID: uniqid(),
            role: roleRef.current,
            organization: organizationRef.current,
            country: organizationCountry,
            city: organizationCityRef.current,
            date: JSON.stringify(startDate).substring(1, 11),
            description: descriptionRef.current
        })
        resetFields()
        setOpen(false)
    };

    return (

        
        <Modal
            aria-labelledby="transition-modal-add-new-accredition-record"
            aria-describedby="transition-modal-add-new-accredition-record"
            open={open}
            onClose={()=>setOpen(false)}
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
                        overflowY:'scroll',
                        ...style
                    }}
                >

                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <Typography variant='h5'> Accreditation Details</Typography>
                        </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="accreditation-role"
                                    required
                                    fullWidth
                                    id="accreditation-role"
                                    label="Role / Designation"
                                    size='small'
                                    ref={roleRef}
                                    autoFocus
                                    onChange={e => roleRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="acc-organization"
                                    label="Organization "
                                    size='small'
                                    name="acc--organization"
                                    autoComplete='off'
                                    ref={organizationRef}
                                    onChange={e => organizationRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <CountrySelector country={organizationCountry} setCountry={setOrganizationCountry} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="org-city"
                                    label="City "
                                    size='small'
                                    name="org-city"
                                    autoComplete='off'
                                    ref={organizationCityRef}
                                    onChange={e => organizationCityRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker value={startDate} label="Date" size='small' format='LL' onChange={date => setStartDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="acc-description"
                                    label="Description / Responsibilities / Achievements"
                                    size='small'
                                    name="acc-description"
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
                            padding:1
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