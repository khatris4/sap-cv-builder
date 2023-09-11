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


export default function NewAwardHonorForm({ open, setOpen, addNewAwardHonor }) {
    const awardNameRef = useRef('');
    const organizationRef = useRef('');
    const awardDescriptionRef = useRef('');
    const [awardDate, setAwardDate] = useState(null);

    function resetFields() {
        awardNameRef.current = ''
        organizationRef.current = ''
        setAwardDate(null)
        awardDescriptionRef.current = ''
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewAwardHonor({
            award_honor_ID: uniqid(),
            name: awardNameRef.current,
            awarding_body: organizationRef.current,
            award_date: JSON.stringify(awardDate).substring(1, 11),
            description: awardDescriptionRef.current,
        })
        resetFields()
        setOpen(false)
    };

    return (
        <Modal
            aria-labelledby="transition-modal-add-award-record"
            aria-describedby="transition-modal-add-award-record"
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
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Typography variant='h6'>Award Details</Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="award-name"
                                    required
                                    fullWidth
                                    id="award-name"
                                    label="Award / Honor"
                                    size='small'
                                    ref={awardNameRef}
                                    autoFocus
                                    onChange={e => awardNameRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="awarding-body"
                                    required
                                    fullWidth
                                    id="awarding-body"
                                    label="Awarding Body"
                                    size='small'
                                    ref={organizationRef}
                                    autoFocus
                                    onChange={e => organizationRef.current = e.target.value}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="awarding-description"
                                    required
                                    fullWidth
                                    id="awarding-description"
                                    label="Awarding Description"
                                    size='small'
                                    ref={awardDescriptionRef}
                                    autoFocus
                                    multiline
                                    minRows={6}
                                    onChange={e => awardDescriptionRef.current = e.target.value}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker value={awardDate} label="Award Date" size='small' format='LL' onChange={date => setAwardDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>

                        </Grid>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            },
                            padding: 1,
                            gap: 1
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