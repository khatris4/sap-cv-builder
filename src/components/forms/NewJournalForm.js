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



export default function NewJournalForm({ open, setOpen, addNewJournal }) {
    const titleRef = useRef('');
    const [authors, updateAuthors] = useState([]);
    const journalRef = useRef('');
    const volRef = useRef('');
    const issueRef = useRef('');
    const pageRangeRef = useRef('');
    const [startDate, setStartDate] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function resetFields() {
        titleRef.current = ''
        updateAuthors([])
        journalRef.current = ''
        volRef.current = ''
        issueRef.current = ''
        pageRangeRef.current = ''
        setStartDate(null)
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
            alert('Please add at least one author for the Journal.');
            return;
        }
        addNewJournal({
            journalID: uniqid(),
            title: titleRef.current,
            journal: journalRef.current,
            vol: volRef.current,
            issue: issueRef.current,
            published_on: JSON.stringify(startDate).substring(1, 11),
            page_range: pageRangeRef.current,
            authors: authors
        })
        resetFields()
        setOpen(false)
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

                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Typography variant='h5'>Journal Information</Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="journal-title"
                                    required
                                    fullWidth
                                    id="journal-title"
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
                                    name="journal"
                                    required
                                    fullWidth
                                    id="conference"
                                    label="Journal "
                                    size='small'
                                    ref={journalRef}
                                    autoFocus
                                    onChange={e => journalRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    autoComplete='off'
                                    name="vol"
                                    required
                                    fullWidth
                                    id="vol"
                                    label="Vol. "
                                    size='small'
                                    ref={volRef}
                                    autoFocus
                                    onChange={e => volRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    autoComplete='off'
                                    name="issue"
                                    required
                                    fullWidth
                                    id="issue"
                                    label="Issue. "
                                    size='small'
                                    ref={issueRef}
                                    autoFocus
                                    onChange={e => issueRef.current = e.target.value}
                                />
                            </Grid>


                            <Grid item xs={6}>
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
                                        <DatePicker size='small' value={startDate} label="Published Date" format='LL' onChange={date => setStartDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>

                        </Grid>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            padding: 1
                        }}>
                            <Typography variant='h6'>Authors</Typography>

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
                                    fullWidth
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
                                        fullWidth
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