import React, { useContext } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Breadcrumbs,
  Link,
  useTheme,
  Box
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LanguageContext } from '../App';

const OrganizationalStructure = () => {
  const theme = useTheme();
  const { language } = useContext(LanguageContext);

  const structureLevels = [
    {
      icon: '🏛️',
      title: 'केंद्रीय स्तर',
      enTitle: 'Central Level',
      description: 'केंद्रीय महिला आणि बालविकास मंत्रालय',
      enDescription: 'Ministry of Women and Child Development'
    },
    {
      icon: '🏢',
      title: 'राज्य स्तर',
      enTitle: 'State Level',
      description: 'राज्य महिला आणि बालविकास विभाग',
      enDescription: 'State Women and Child Development Department'
    },
    {
      icon: '🏘️',
      title: 'जिल्हा स्तर',
      enTitle: 'District Level',
      description: 'जिल्हा कार्यक्रम अधिकारी (DPO)',
      enDescription: 'District Programme Officer (DPO)'
    },
    {
      icon: '🏠',
      title: 'प्रकल्प स्तर',
      enTitle: 'Project Level',
      description: 'आयसीडीएस प्रकल्प अधिकारी',
      enDescription: 'ICDS Project Officer'
    },
    {
      icon: '👩‍⚕️',
      title: 'आंगणवाडी स्तर',
      enTitle: 'Anganwadi Level',
      description: 'आंगणवाडी कार्यकर्त्या आणि सहाय्यक',
      enDescription: 'Anganwadi Worker and Helper'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'समुदाय स्तर',
      enTitle: 'Community Level',
      description: 'महिला आणि बाल विकास समित्या',
      enDescription: 'Women and Child Development Committees'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link component={RouterLink} to="/" color="inherit">
          {language === 'marathi' ? 'मुख्यपृष्ठ' : 'Home'}
        </Link>
        <Link component={RouterLink} to="/about" color="inherit">
          {language === 'marathi' ? 'आमच्याबद्दल' : 'About Us'}
        </Link>
        <Typography color="text.primary">
          {language === 'marathi' ? 'संघटनात्मक संरचना' : 'Organizational Structure'}
        </Typography>
      </Breadcrumbs>

      {/* Page Title */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          color: theme.palette.primary.main,
          mb: 4
        }}
      >
        {language === 'marathi' ? 'संघटनात्मक संरचना' : 'Organizational Structure'}
      </Typography>

      {/* Image at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Paper elevation={3} sx={{ p: 2, maxWidth: '100%' }}>
          <img
            src="https://icds.gov.in/sites/default/files/inline-images/Org-Structure_1.png"
            alt={language === 'marathi' ? 'संघटनात्मक संरचना' : 'Organizational Structure'}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: theme.shape.borderRadius
            }}
          />
        </Paper>
      </Box>

      {/* Content Grid */}
      <Grid container spacing={3}>
        {structureLevels.map((level, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: '100%',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              <Box sx={{ fontSize: '3rem', mb: 2 }}>
                {level.icon}
              </Box>
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.primary.main
                }}
              >
                {language === 'marathi' ? level.title : level.enTitle}
              </Typography>
              <Typography variant="body1">
                {language === 'marathi' ? level.description : level.enDescription}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OrganizationalStructure;