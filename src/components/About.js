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
              एकात्मिक बाल विकास सेवा (ICDS) ही भारत सरकारची प्रमुख योजना आहे जी 6 वर्षांखालील मुलांसाठी, 
              गर्भवती महिला आणि स्तनपान करविणाऱ्या आईंसाठी पोषण, आरोग्य आणि शिक्षण सेवा पुरवते. 
              ऑसा तालुक्यात ही योजना १९७५ पासून सक्रियपणे कार्यरत आहे.
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
                  primary="लहान मुलांचे पोषण" 
                  secondary="6 वर्षांखालील मुलांसाठी पौष्टिक आहार वाटप" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#1976d2' }}><Favorite /></ListItemIcon>
                <ListItemText 
                  primary="आरोग्य सेवा" 
                  secondary="नियमित आरोग्य तपासणी आणि लसीकरण" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#2e7d32' }}><School /></ListItemIcon>
                <ListItemText 
                  primary="पूर्व प्राथमिक शिक्षण" 
                  secondary="आंगणवाडी मध्ये बालवाडी शिक्षण" 
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
                  primary="कुटुंब कल्याण" 
                  secondary="कुटुंब नियोजन आणि महिला सक्षमीकरण" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#7b1fa2' }}><Restaurant /></ListItemIcon>
                <ListItemText 
                  primary="पोषण शिक्षण" 
                  secondary="पोषक आहारावर मार्गदर्शन" 
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#c2185b' }}><Event /></ListItemIcon>
                <ListItemText 
                  primary="नियमित कार्यक्रम" 
                  secondary="आरोग्य शिबिरे आणि जागरूकता मोहिम" 
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
          ✓ 6 वर्षांखालील मुलांमध्ये कुपोषण दूर करणे<br />
          ✓ माता व बालमृत्यू दर कमी करणे<br />
          ✓ बालविकासाच्या पायाभूत सुविधा उपलब्ध करणे<br />
          ✓ महिलांना स्वावलंबी बनविणे<br />
          ✓ शिक्षण आणि आरोग्य यांचा समन्वय साधणे
        </Typography>
      </Box>

      {/* Achievements */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>50+</Typography>
            <Typography variant="h6">आंगणवाडी केंद्रे</Typography>
            <Typography>ऑसा तालुक्यात सक्रिय</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ color: '#1976d2', fontWeight: 'bold' }}>5000+</Typography>
            <Typography variant="h6">बालकांना सेवा</Typography>
            <Typography>दररोज पोषण आहार</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>85%</Typography>
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
    </Container>
  );
}