import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { BsTelephone, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineYoutube, AiFillGithub } from 'react-icons/ai';
import { BiSolidCity, BiLogoGitlab } from 'react-icons/bi';
import { DiBitbucket } from 'react-icons/di';
import CountrySelector from '../CountrySelector';

export default function BasicInformationForm({ basic_information, updateBasicInformation, setEditBasicInfoMode }) {
    const [firstName, setFirstName] = useState(basic_information.first_name);
    const [lastName, setLastName] = useState(basic_information.last_name);
    const [tagline, setTagline] = useState(basic_information.tagline);
    const [isProfilePictureSet, setIsProfilePictureSet] = useState(basic_information.isProfilePictureSet);
    const [url, setURL] = useState(basic_information.url);
    const [mobileNumber, setMobileNumber] = useState(basic_information.mobile_number);
    const [email, setEmail] = useState(basic_information.email);
    const [street, setStreet] = useState(basic_information.street);
    const [city, setCity] = useState(basic_information.city);
    const [state, setState] = useState(basic_information.state_province_region);
    const [postCode, setPostCode] = useState(basic_information.postal_zip_code);
    const [country, setCountry] = useState(basic_information.country);
    const [linkedIn, setLinkedIn] = useState(basic_information.linkedIn);
    const [gitHub, setGitHub] = useState(basic_information.gitHub);
    const [bitBucket, setBitBucket] = useState(basic_information.bitBucket);
    const [youTube, setYouTube] = useState(basic_information.youTube);
    const [gitLab, setGitLab] = useState(basic_information.gitLab);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBasicInformation({
            first_name: firstName,
            last_name: lastName,
            tagline,
            isProfilePictureSet,
            url,
            mobile_number: mobileNumber,
            email,
            street, city,
            state_province_region: state,
            postal_zip_code: postCode,
            country,
            linkedIn, gitHub, bitBucket, youTube, gitLab
        })
        setEditBasicInfoMode(false)
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap:2
        }}
            component='form' noValidate
        >
            <Box sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                },
                width: '100%',
                gap:2
            }}>
                <TextField
                    autoComplete="off"
                    name="userFirstName"
                    required
                    fullWidth
                    id="userFirstName"
                    label="First Name"
                    size='small'
                    value={firstName}
                    autoFocus
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    id="userLastName"
                    label="Last Name"
                    size='small'
                    name="userLastName"
                    autoComplete="off"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </Box>
                <TextField
                    required
                    id="tagline"
                    label="Tagline / Current Designation / Highlights"
                    size='small'
                    name="tagline"
                    autoComplete="off"
                    value={tagline}
                    onChange={e => setTagline(e.target.value)}
                    fullWidth
                />
            <Typography color='text.secondary' sx={{fontWeight:'bold'}}>Contact Information</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                },
                width: 'inherit',
                flexWrap: 'wrap',
                columnGap: 2,
                rowGap: 1,
                paddingY: 2
            }}>
                <TextField
                    required
                    id="mobile-number"
                    label="Mobile phone Number"
                    size='small'
                    name="mobile-number"
                    autoComplete="off"
                    value={mobileNumber}
                    onChange={e => setMobileNumber(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><BsTelephone /></InputAdornment>,
                    }}
                />

                <TextField
                    required
                    id="user-email"
                    label="Email"
                    size='small'
                    name="user-email"
                    autoComplete="off"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><HiOutlineMail /></InputAdornment>,
                    }}
                    sx={{
                        flexGrow: 1
                    }}
                />

            </Box>

            <Typography color='text.secondary' sx={{fontWeight:'bold'}}>Address Information</Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                },
                width: 'inherit',
                flexWrap: 'wrap',
                columnGap: 2,
                rowGap: 1,
                paddingY: 2
            }}>
                <TextField
                    required
                    name="street-name"
                    label="House No. / Street "
                    size='small'
                    id="street-name"
                    autoComplete="off"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AiOutlineHome /></InputAdornment>,
                    }}
                />
                <TextField
                    required
                    name="city-name"
                    label="City"
                    size='small'
                    id="city-name"
                    autoComplete="off"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><BiSolidCity /></InputAdornment>,
                    }}
                    sx={{
                        flexGrow: 1
                    }}
                />

                <TextField
                    required
                    name="post-code"
                    label="Zip / Post Code"
                    size='small'
                    id="post-code"
                    autoComplete="off"
                    value={postCode}
                    onChange={e => setPostCode(e.target.value)}
                    sx={{
                        flexGrow: 1
                    }}
                />

                <TextField
                    required
                    name="state-name"
                    label="State / Province"
                    size='small'
                    id="state-name"
                    autoComplete="off"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    sx={{
                        flexGrow: 1
                    }}
                />
                <CountrySelector country={country}  setCountry={setCountry} />
            </Box>


            <Typography color='text.secondary' sx={{fontWeight:'bold'}}>Media Information</Typography>


            <Box sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                },
                width: 'inherit',
                flexWrap: 'wrap',
                columnGap: 2,
                rowGap: 1,
                paddingY: 2
            }}>


                <TextField
                    name="linkedIn"
                    label="LinkedIn"
                    size='small'
                    id="linkedIn"
                    autoComplete="off"
                    value={linkedIn}
                    onChange={e => setLinkedIn(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><BsLinkedin /></InputAdornment>,
                    }}
                />
                <TextField
                    name="gitHub"
                    label="GitHub"
                    size='small'
                    id="gitHub"
                    autoComplete="off"
                    value={gitHub}
                    onChange={e => setGitHub(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AiFillGithub /></InputAdornment>,
                    }}
                    sx={{
                        flexGrow: 1
                    }}
                />

                <TextField
                    name="bitBucket"
                    label="BitBucket"
                    size='small'
                    id="bitBucket"
                    autoComplete="off"
                    value={bitBucket}
                    onChange={e => setBitBucket(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><DiBitbucket /></InputAdornment>,
                    }}
                    sx={{
                        flexGrow: 1
                    }}
                />

                <TextField

                    name="youTube"
                    label="YouTube"
                    size='small'
                    id="youTube"
                    autoComplete="off"
                    value={youTube}
                    onChange={e => setYouTube(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AiOutlineYoutube /></InputAdornment>,
                    }}
                    sx={{
                        flexGrow: 1
                    }}
                />

                <TextField

                    name="gitLab"
                    label="GitLab"
                    size='small'
                    id="gitLab"
                    autoComplete="off"
                    value={gitLab}
                    onChange={e => setGitLab(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><BiLogoGitlab /></InputAdornment>,
                    }}
                    sx={{
                        flexGrow: 1
                    }}
                />
            </Box>



            <Box sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                width:'100%'
            }}>
                <Button

                    size='small'
                    variant="contained"
                    onClick={() => setEditBasicInfoMode(false)}
                    sx={{
                        backgroundColor:'error.main',
                        padding:1,
                        flexGrow:1
                    }}
                >
                    Cancel
                </Button>
                <Button
                    type='submit'
                    variant="contained"
                    size='small'
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor:'success.main',
                        padding:1,
                        flexGrow:1
                    }}
                >
                    Save
                </Button>
            </Box>


        </Box>
    );
}
