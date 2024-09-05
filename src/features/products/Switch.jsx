import { useState } from 'react';
import Switch from '@mui/material/Switch';

const SwitchActive = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    // event.stopPropagation();
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default SwitchActive;
