import React, { useState } from 'react';
import { 
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { LocationOn } from '@mui/icons-material';

const centers = [
  { marathiName: 'मंजरूल', englishName: 'Manjrul', id: 1 },
  { marathiName: 'भेटा', englishName: 'Bheta', id: 2 },
  { marathiName: 'नाहोळी', englishName: 'Naholi', id: 3 },
  { marathiName: 'कौथा केज', englishName: 'Kawtha Kej', id: 4 },
  { marathiName: 'कळमाटा', englishName: 'Kalmata', id: 5 },
  { marathiName: 'उटी बु.', englishName: 'Uti Bk.', id: 6 },
  { marathiName: 'लखनगाव', englishName: 'Lakhangaon', id: 7 },
  // Add all other centers in similar format
];

export default function Centers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCenters = centers.filter(center =>
    center.marathiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.englishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          color: '#1a237e', 
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Arial Unicode MS'
        }}
      >
        आमची केंद्रे
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="केंद्र शोधा..."
        sx={{ 
          mb: 4,
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          }
        }}
        InputProps={{
          startAdornment: <LocationOn color="action" sx={{ mr: 1 }} />
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search centers"
      />

      <Box sx={{ 
        backgroundColor: '#f8f9fa', 
        borderRadius: 2,
        p: 3,
        boxShadow: 1
      }}>
        <Typography variant="subtitle1" sx={{ mb: 2, color: '#616161' }}>
          एकूण केंद्रे: {centers.length}
        </Typography>

        <Grid container spacing={2}>
          {filteredCenters.map((center) => (
            <Grid item xs={12} sm={6} md={4} key={center.id}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 2,
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 3
                  }
                }}
              >
                <List>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemText
                      primary={
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 'bold',
                            color: '#1a237e',
                            fontSize: '1.2rem'
                          }}
                        >
                          {center.marathiName}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Divider sx={{ my: 1 }} />
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ fontStyle: 'italic' }}
                          >
                            {center.englishName}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            sx={{ display: 'block', mt: 0.5 }}
                          >
                            औसा, लातूर
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {filteredCenters.length === 0 && (
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              py: 4, 
              color: '#757575',
              fontStyle: 'italic'
            }}
          >
            कोणतेही केंद्र सापडले नाही
          </Typography>
        )}
      </Box>
    </Container>
  );
}