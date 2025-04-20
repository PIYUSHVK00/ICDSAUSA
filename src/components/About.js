import React from 'react';
import { 
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  ChildCare,
  Group,
  Favorite,
  Restaurant,
  School,
  Event
} from '@mui/icons-material';
import { Outlet } from 'react-router-dom';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Main Heading */}
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
        आईसीडीएस - समेकित बाल विकास सेवा
      </Typography>

      {/* Hero Section */}
      <Paper elevation={3} sx={{ 
        p: 4, 
        mb: 6, 
        borderRadius: 2,
        background: 'linear-gradient(45deg, #e3f2fd 30%, #bbdefb 90%)'
      }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img 
              src="https://cdn.pixabay.com/photo/2017/06/09/21/25/children-2387877_640.jpg" 
              alt="ICDS Activities"
              style={{ 
                width: '100%', 
                borderRadius: 8,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
              ऑसा येथील आयसीडीएस
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              केंद्र पुरस्कृत एकात्मिक बाल विकास सेवा योजना कार्यक्रम दिनांक २ ऑक्टोबर १९७५ रोजी धारणी (अमरावती) व धारावी (मुंबई) या दोन प्रकल्पात बालकांच्या पोषण व आहार विषयक दर्जात सुधारणा करण्यासाठी तसेच बाल मृत्यूचे व कुपोषणाचे प्रमाण कमी करण्याच्या दृष्टिने सुरु करण्यात आला. त्यानंतर टप्प्या टप्प्याने एकात्मिक बाल विकास सेवा योजना प्रकल्पात वाढ होऊन महाराष्ट्र राज्यामध्ये ५५३ बाल विकास प्रकल्प कार्यरत असून त्यामध्ये ग्रामीण व आदिवासी क्षेत्रात ४४९ प्रकल्प आणि नागरी क्षेत्रात १०४ प्रकल्प कार्यरत आहेत. औसा (ग्रामीण) प्रकल्‍पा अंतर्गत एकूण १९८ अंगणवाडी केंद्रे मंजूर असून १९८ अंगणवाडी केंद्रे कार्यान्‍वीत आहेत. 
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Key Services */}
      <Typography variant="h4" sx={{ 
        mb: 4, 
        color: '#1565c0',
        textAlign: 'center',
        fontFamily: 'Arial Unicode MS'
      }}>
        मुख्य सेवा
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#d32f2f' }}><ChildCare /></ListItemIcon>
                <ListItemText 
                  primary="पूरक पोषण आहार" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#1976d2' }}><Favorite /></ListItemIcon>
                <ListItemText 
                  primary="लसीकरण" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#2e7d32' }}><School /></ListItemIcon>
                <ListItemText 
                  primary="आरोग्य तपासणी" 
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#f57c00' }}><Group /></ListItemIcon>
                <ListItemText 
                  primary="संदर्भ सेवा" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#7b1fa2' }}><Restaurant /></ListItemIcon>
                <ListItemText 
                  primary="आरोग्य व आहार शिक्षण" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#c2185b' }}><Event /></ListItemIcon>
                <ListItemText 
                  primary="अनौपचारिक पूर्व शालेय शिक्षण" 
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Objectives Section */}
      <Box sx={{ 
        backgroundColor: '#fff3e0', 
        p: 4, 
        borderRadius: 2,
        mb: 6
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00', fontWeight: 'bold' }}>
          उद्दिष्टे
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.1rem' }}>
          ✓ 0 ते ६ वर्ष वयोगटातील मुलांचा पोषण व आरोग्य विषयक दर्जा सुधारणे.<br />
          ✓ मुलांच्या योग्य मानसिक, शारीरिक, सामाजिक विकासाचा पाया घालणे.<br />
          ✓ बालमृत्यु, बालरोग, कुपोषण आणि शाळा गळतीचे प्रमाण कमी करणे.<br />
          ✓ बाल विकासास चालना मिळावी म्हणून विविध विभागांमध्ये धोरण व अंमलबजावणी याबाबत परिणामकारक समन्वय साधणे.<br />
          ✓ योग्य पोषण व आहार विषयक शिक्षणाद्वारे बालकांचे सर्वसामान्य आरोग्य व त्यांच्या पोषण विषयी गरजांकडे लक्ष पुरविण्या विषयीची मातांची क्षमता वाढविणे.
        </Typography>
      </Box>

      {/* Achievements */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>१९८</Typography>
            <Typography variant="h6">आंगणवाडी केंद्रे</Typography>
            <Typography>ऑसा तालुक्यात सक्रिय</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ color: '#1976d2', fontWeight: 'bold' }}>१०,०००+</Typography>
            <Typography variant="h6">बालकांना सेवा</Typography>
            <Typography>दररोज पोषण आहार</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>१००%</Typography>
            <Typography variant="h6">लसीकरण</Typography>
            <Typography>यशस्वी कव्हरेज</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Closing Statement */}
      <Typography variant="h6" align="center" sx={{ 
        fontStyle: 'italic',
        color: '#616161',
        borderLeft: '4px solid #1976d2',
        p: 2,
        mx: 'auto',
        maxWidth: 600
      }}>
        "समुचित बालविकास हा समृद्ध समाजाचा पाया आहे. आमचा संकल्प प्रत्येक मूल आणि माता यांना 
        सुरक्षित आणि निरोगी भविष्य देण्याचा आहे."
      </Typography>

      {/* Outlet for nested routes */}
      <Outlet />
    </Container>
  );
}