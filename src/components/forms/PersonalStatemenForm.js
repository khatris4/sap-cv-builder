import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

export default function PersonalStatementForm({ personal_statement,updatePersonalStatement,setIsPersonalStatementEditModeOn }) {

    const [personalStatement, setPersonalStatement] = useState(personal_statement);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (_.isEmpty(personalStatement)){
            updatePersonalStatement('Double tap to update')
        }
        else{
            updatePersonalStatement(personalStatement)
        }
        
        setIsPersonalStatementEditModeOn(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap:2
        }}
            component='form'
        >
            <Typography variant='h6' >Personal Statement</Typography>
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
                    name="inputPersonalStatement"
                    required
                    fullWidth
                    id="inputPersonalStatement"
                    label="Personal Statement"
                    size='small'
                    value={personalStatement}
                    autoFocus
                    onChange={e => setPersonalStatement(e.target.value)}
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
                    sx={{
                        backgroundColor:'text.error',
                        p:1,
                        flexGrow:1,
                        borderRadius:1
                    }}
                    onClick={() => setIsPersonalStatementEditModeOn(false)}
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