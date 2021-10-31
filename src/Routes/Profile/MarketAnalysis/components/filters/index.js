import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import './styles.css';

export default function SelectLabels() {
  const [industry, setIndustry] = React.useState('');
  const [profile, setProfile] = React.useState('');
  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div className="MAP-filters">
        <FormControl size="small" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-label">Select Industry</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={industry}
            label="Select Industry"
            onChange={handleChange}
        >
            <MenuItem value={10}>IT</MenuItem>
            <MenuItem value={20}>Management</MenuItem>
            <MenuItem value={30}>Health Care</MenuItem>
        </Select>
        </FormControl>
        <FormControl size="small"  sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-label">Select a profile</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={profile}
            label="Select Industry"
            onChange={handleChange}
        >
            <MenuItem value={10}>Level 1</MenuItem>
            <MenuItem value={20}>Level 2</MenuItem>
            <MenuItem value={30}>Level 3</MenuItem>
        </Select>
        </FormControl>
        <Button variant="contained" sx={{ m: 1, minWidth: 160 }}>
          <div>
            analyze
          </div>
        </Button>
    </div>
  );
}
