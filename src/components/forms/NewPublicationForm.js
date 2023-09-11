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
import { PUBLICATION_TYPES } from '@/data/data';
import PublicationTypeSelector from '../selectors/PublicationTypeSelector';
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

export default function NewPublicationForm({ open, setOpen, addNewPublication }) {
    const titleRef = useRef('');
    const [authors, updateAuthors] = useState([]);
    const [publicationDate, setPublicationDate] = useState(null);
    const [publicationType, setPublicationType] = useState(PUBLICATION_TYPES[0]);
    const publicationEventRef = useRef('');
    const publicationVenueRef = useRef('');
    const [DOI, setDOI] = useState(null);
    const editionVolumeRef = useRef('');
    const pageRangeRef = useRef('');
    const abstractRef = useRef('');
    const publicationURLRef = useRef('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [closeAccordion, setCloseAccordion] = useState(false);

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

    function resetFields() {
        titleRef.current = ''
        setDOI(null)
        setPublicationDate(null)
        setPublicationType(PUBLICATION_TYPES[0])
        updateAuthors([])
        publicationEventRef.current = ''
        pageRangeRef.current = ''
        publicationVenueRef.current = ''
        editionVolumeRef.current = ''
        abstractRef.current = ''
        publicationURLRef.current = ''
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (authors.length === 0) {
            alert('Please add at least one author for the publication');
            return;
        }
        addNewPublication({
            publicationID: uniqid(),
            title: titleRef.current,
            type: publicationType,
            page_range: pageRangeRef.current,
            authors: authors,
            publication_date: JSON.stringify(publicationDate).substring(1, 11),
            publication_event: publicationEventRef.current,
            publication_venue: publicationVenueRef.current,
            DOI: JSON.stringify(DOI).substring(1, 11),
            edition_volume: editionVolumeRef.current,
            abstract: abstractRef.current,
            publication_url: publicationURLRef.current
        })
        resetFields()
        setOpen(false)
    };

    return (
        <Modal
            aria-labelledby="transition-modal-add-new-publication-record"
            aria-describedby="transition-modal-add-new-publication-record"
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
                                <Typography variant="h6">
                                    Publication Details
                                </Typography>
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    autoComplete='off'
                                    name="publicationTitle"
                                    required
                                    fullWidth
                                    id="publicationTitle"
                                    label="Publication Title"
                                    size='small'
                                    ref={titleRef}
                                    autoFocus
                                    onChange={e => titleRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <PublicationTypeSelector publicationType={publicationType} setPublicationType={setPublicationType} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="publication-abstract"
                                    label="Publication Abastract"
                                    size='small'
                                    name="publication-abstract"
                                    autoComplete='off'
                                    multiline
                                    rows={3}
                                    ref={abstractRef}
                                    onChange={e => abstractRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="publication_event"
                                    label="Publication Event / Conference"
                                    size='small'
                                    name="publication_event"
                                    autoComplete='off'
                                    ref={publicationEventRef}
                                    onChange={e => publicationEventRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="publication_venue"
                                    label="Event Venue / Location"
                                    size='small'
                                    name="publication_venue"
                                    autoComplete='off'
                                    ref={publicationVenueRef}
                                    onChange={e => publicationVenueRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker format='LL' value={DOI} label="Date of Issue (DOI)" size='small' onChange={date => setDOI(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker format='LL' value={publicationDate} label="Date of Publication" size='small' onChange={date => setPublicationDate(date)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="edition_volume"
                                    label="Edition / vol. "
                                    size='small'
                                    name="edition_volume"
                                    autoComplete='off'
                                    ref={editionVolumeRef}
                                    onChange={e => editionVolumeRef.current = e.target.value}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="publication_url"
                                    label="Publication URL"
                                    size='small'
                                    id="publication_url"
                                    autoComplete='off'
                                    ref={publicationURLRef}
                                    onChange={e => publicationURLRef.current = e.target.value}

                                />
                            </Grid>
                            {publicationType == PUBLICATION_TYPES[4] && <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="page-range"
                                    label="Page range"
                                    size='small'
                                    id="page-range"
                                    autoComplete='off'
                                    ref={pageRangeRef}
                                    onChange={e => pageRangeRef.current = e.target.value}

                                />
                            </Grid>
                            }
                        </Grid>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
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
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>

    );
}