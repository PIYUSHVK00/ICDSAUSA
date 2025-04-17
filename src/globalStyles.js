import { GlobalStyles } from '@mui/material';

const globalStyles = (
  <GlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        backgroundColor: '#f9f9f9',
        lineHeight: 1.6,
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
    }}
  />
);

export default globalStyles;