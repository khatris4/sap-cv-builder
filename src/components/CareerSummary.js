import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton, Tooltip } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function CareerSummary({ career_summary, deleteCareerSummary, setIsCareerSummaryEditMode }) {

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
                     Career Summary
                </Typography>
                <Tooltip title='Delete career summary'>
                    <IconButton onClick={deleteCareerSummary}>
                    <ClearOutlinedIcon  />
                    </IconButton>
                </Tooltip>

            </Box>
            <Typography sx={{ padding: 2 }} variant='subtitle2' ><p onDoubleClick={() => setIsCareerSummaryEditMode(true)}>{career_summary}</p></Typography>
        </Box>

    );
}