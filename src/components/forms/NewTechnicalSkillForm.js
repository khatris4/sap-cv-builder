import { useRef, useState } from 'react';
import uniqid from 'uniqid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function NewTechnicalSkillForm({ open, setOpen, addNewTechnicalSkill }) {

    const [skill, setSkill] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewTechnicalSkill({
            skillID: uniqid(),
            skill: skill
        })
        setSkill('')

    };

    return (

        <Box
            sx={{
                display: open ? 'flex' : 'none',
                width: 'inherit',
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    gap: 3
                },
                width:'100%'

            }}
            component="form" onSubmit={handleSubmit}>
            <TextField
                autoComplete='off'
                name="tech-skill"
                required
                fullWidth
                id="tech-skill"
                label="Type your skill here"
                size='small'
                value={skill}
                autoFocus
                onChange={e => setSkill(e.target.value)}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
            }}>
                <Button
                    fullWidth
                    size='small'
                    color='success'
                    variant='outlined'
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


    );
}