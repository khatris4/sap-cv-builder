import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsPen } from 'react-icons/bs';
import { IconButton, Tooltip } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function PersonalStatement({ personal_statement, deletePersonalStatement,setIsPersonalStatementEditModeOn }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography variant="h6">
                     Personal Statement
                </Typography>
                <Tooltip title='Delete Personal Statement'>
                    <IconButton onClick={deletePersonalStatement}>
                    <ClearOutlinedIcon  />
                    </IconButton>
                </Tooltip>
                
            </Box>
            <Typography sx={{ padding: 2 ,fontStyle:'italic' }} variant='subtitle1'><q onDoubleClick={()=>setIsPersonalStatementEditModeOn(true)}> {personal_statement} </q></Typography>
        </Box>

    );
}