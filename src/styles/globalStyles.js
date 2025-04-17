import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#f5f5f5',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      }}
    />
  );
}