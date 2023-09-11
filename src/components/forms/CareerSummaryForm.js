import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import _ from 'lodash';

export default function CareerSummaryForm({ career_summary, updateCareerSummary, setIsCareerSummaryEditMode }) {

    const [careerSummary, setCareerSummary] = useState(career_summary);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (_.isEmpty(careerSummary)){
            updateCareerSummary('Double tap to update')   
        }
        else{
            updateCareerSummary(careerSummary)
        }
        
        setIsCareerSummaryEditMode(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap:2
        }} component={'form'}>

            <Typography variant="h6">
                Career Summary
            </Typography>
            <TextField
                autoComplete="off"
                name="inputCareerSummary"
                required
                fullWidth
                id="inputCareerSummary"
                label="Career Summary"
                size='small'
                value={careerSummary}
                autoFocus
                multiline
                rows={3}
                onChange={e => setCareerSummary(e.target.value)}
                
            />

            <Box sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                width:'100%'
            }}>
                <Button
                    size='small'
                    variant="contained"
                    sx={{
                        backgroundColor:'text.error',
                        p:1,
                        flexGrow:1,
                        borderRadius:1
                    }}
                    onClick={() => setIsCareerSummaryEditMode(false)}
                >
                    Cancel
                </Button>
                <Button
                    type='submit'
                    size='small'
                    sx={{
                        backgroundColor:'success.main',
                        p:1,
                        flexGrow:1,
                        borderRadius:1
                    }}
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Box>
        </Box>

    );
}