import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PUBLICATION_TYPES } from '@/data/data';

export default function PublicationTypeSelector({ publicationType, setPublicationType }) {

    return (
        <FormControl size="small" fullWidth>
            <InputLabel id="lbl-publication-type-selector">Publication Category</InputLabel>
            <Select
                
                labelId="lbl-publication-type-selector"
                id="publication-type-selector"
                value={publicationType}
                label="Publication Category"
                onChange={(e) => setPublicationType(e.target.value)}
                sx={{
                    flexGrow:1
                }}
            >
                {PUBLICATION_TYPES.map((type,index)=><MenuItem key={index} value={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    );
}