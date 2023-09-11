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



export default function NewConferenceForm({ open, setOpen, addNewConference }) {
    const titleRef = useRef('');
    const [authors, updateAuthors] = useState([]);
    const conferenceRef = useRef('');
    const [conferenceCountry, setConferenceCountry] = useState(null);
    const conferenceCityRef = useRef('');
    const pageRangeRef = useRef('');
    const [startDate, setStartDate] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    function resetFields() {
        titleRef.current = ''
        updateAuthors([])
        setConferenceCountry(null)
        conferenceCityRef.current = ''
        pageRangeRef.current = ''
        setStartDate(null)
        conferenceRef.current = ''
    }

    // a function to remove the author from the list
    function removeAuthor(authorID) {
        const tempAuthList = authors.filter(author => author.id != authorID)
        updateAuthors(tempAuthList);
    }

    // a function to add the author to the list of authors
    function addAuthor() {
        if (firstName.trim().length != 0 && lastName.trim().length != 0) {
            updateAuthors(prevList => ([...prevList, { id: uniqid(), first_name: firstName, last_name: lastName }]))
            setFirstName('');
            setLastName('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (authors.length === 0) {
            alert('Please add at least one author for the confernece.');
            return;
        }
        addNewConference({
            conferenceID: uniqid(),
            title: titleRef.current,
            conference: conferenceRef.current,
            country: conferenceCountry,
            city: conferenceCityRef.current,
            heldOn: JSON.stringify(startDate).substring(1, 11),
            page_range: pageRangeRef.current,
            authors: authors
        })
        resetFields()
        setOpen(false)
    };

    return (

        <Modal
            aria-labelledby="transition-modal-add-new-conference-record"
            aria-describedby="transition-modal-add-new-conference-record"
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
                                <Typography variant="h6">
                                    Conferences (Selected) Details
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="con-title"
                                    required
                                    fullWidth
                                    id="con-title"
                                    label="Title"
                                    size='small'
                                    ref={titleRef}
                                    autoFocus
                                    onChange={e => titleRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="conference"
                                    required
                                    fullWidth
                                    id="conference"
                                    label="Conference "
                                    size='small'
                                    ref={conferenceRef}
                                    autoFocus
                                    onChange={e => conferenceRef.current = e.target.value}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <CountrySelector country={conferenceCountry} setCountry={setConferenceCountry} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="conference-city"
                                    label="City "
                                    size='small'
                                    name="conference-city"
                                    autoComplete='off'
                                    ref={conferenceCityRef}
                                    onChange={e => conferenceCityRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="page-range"
                                    label="Page Range"
                                    size='small'
                                    name="page-range"
                                    autoComplete='off'
                                    ref={pageRangeRef}
                                    onChange={e => pageRangeRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker value={startDate} label="Conference Date" size='small' format='LL' onChange={date => setStartDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>

                        </Grid>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            padding: 1
                        }}>
                            <Typography>Authors</Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'stretch',
                                gap: 1
                            }}>
                                {
                                    authors.map((author) => {
                                        return (<Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            gap: 1
                                        }} key={author.id}>
                                            <Typography variant='body2'> {author.first_name}</Typography>
                                            <Typography sx={{ flexGrow: 1 }} variant='body2'>{author.last_name}</Typography>
                                            <Button variant='outlined' color='error' size='small' onClick={() => removeAuthor(author.id)}>Remove Author</Button>
                                        </Box>
                                        )

                                    })
                                }
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: {
                                        xs: 'column',
                                        sm: 'row'
                                    },
                                    gap: 1
                                }}>
                                    <TextField
                                        autoComplete='off'
                                        name="first-name"
                                        value={firstName}
                                        id="first-name"
                                        label="First Name"
                                        size='small'
                                        autoFocus
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                    <TextField
                                        autoComplete='off'
                                        name="last-name"
                                        value={lastName}
                                        id="last-name"
                                        label="Last Name"
                                        size='small'
                                        autoFocus
                                        onChange={e => setLastName(e.target.value)}

                                    />
                                    <Button
                                        size='small'
                                        color='success'
                                        variant='outlined'
                                        onClick={addAuthor}
                                    >
                                        Add
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            },
                            paddingTop: 1,
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