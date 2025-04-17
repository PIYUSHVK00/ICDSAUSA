import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  Button, 
  Box,
  Typography
} from '@mui/material';
import { Language } from '@mui/icons-material';

export default function LanguageDialog({ onSelect }) {
  return (
    <Dialog open={true} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Language color="primary" fontSize="large" />
          <Typography variant="h5">Select Language</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ textAlign: 'center', mb: 3 }}>
          Please choose your preferred language
        </DialogContentText>
        <Box display="flex" justifyContent="center" gap={3}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => onSelect('english')}
            sx={{ px: 4, py: 2 }}
          >
            English
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => onSelect('marathi')}
            sx={{ px: 4, py: 2 }}
          >
            मराठी
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}