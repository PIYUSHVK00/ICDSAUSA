import React from 'react';
import { 
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Restaurant,
  ChildCare,
  Favorite,
  School,
  Vaccines,
  Group
} from '@mui/icons-material';

export default function Services() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#1a237e', 
            mb: 3,
            fontFamily: 'Arial Unicode MS'
          }}
        >
          आयसीडीएस ऑसा - सेवा यादी
        </Typography>
        <img 
          src="https://cdn.pixabay.com/photo/2017/08/11/19/29/people-2631099_640.jpg" 
          alt="ICDS Services"
          style={{ 
            width: '100%', 
            maxWidth: 800,
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        />
      </Box>

      {/* Main Services Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#d32f2f', fontSize: 40 }}><Restaurant /></ListItemIcon>
                <ListItemText 
                  primary="पोषण आहार कार्यक्रम" 
                  secondary={<>
                    <Typography variant="body2" color="text.secondary">
                      • 6 वर्षांखालील मुलांसाठी पौष्टिक जेवण<br/>
                      • गर्भवती आणि स्तनपान करविणाऱ्या मातांसाठी टेकअवे रेशन<br/>
                      • विटामिन-ए पूरकता
                    </Typography>
                  </>}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#1976d2', fontSize: 40 }}><ChildCare /></ListItemIcon>
                <ListItemText 
                  primary="बाल विकास सेवा" 
                  secondary={<>
                    <Typography variant="body2" color="text.secondary">
                      • आंगणवाडी मध्ये पूर्व प्राथमिक शिक्षण<br/>
                      • बाल संगोपन प्रशिक्षण<br/>
                      • विकासाचे मूल्यमापन
                    </Typography>
                  </>}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#2e7d32', fontSize: 40 }}><Favorite /></ListItemIcon>
                <ListItemText 
                  primary="आरोग्य सेवा" 
                  secondary={<>
                    <Typography variant="body2" color="text.secondary">
                      • नियमित आरोग्य तपासणी<br/>
                      • लसीकरण कार्यक्रम<br/>
                      • कुपोषण निराकरण
                    </Typography>
                  </>}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Services Section */}
      <Typography variant="h4" sx={{ 
        mb: 4, 
        color: '#0d47a1',
        textAlign: 'center',
        fontFamily: 'Arial Unicode MS'
      }}>
        इतर महत्वाच्या सेवा
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, background: '#f5f5f5' }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#7b1fa2' }}><Vaccines /></ListItemIcon>
                <ListItemText 
                  primary="रोगप्रतिबंधक कार्यक्रम" 
                  secondary="पोलिओ, एमएमआर, डीपीटी सारख्या महत्वाच्या लसी"
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#c2185b' }}><School /></ListItemIcon>
                <ListItemText 
                  primary="माता शिक्षण" 
                  secondary="बाल संगोपन, पोषण आणि स्वच्छता विषयी प्रशिक्षण"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, background: '#f5f5f5' }}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#f57c00' }}><Group /></ListItemIcon>
                <ListItemText 
                  primary="कुटुंब कल्याण" 
                  secondary="कुटुंब नियोजन आणि महिला सबलता कार्यक्रम"
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemIcon sx={{ color: '#d32f2f' }}><Favorite /></ListItemIcon>
                <ListItemText 
                  primary="आणीबाणी सेवा" 
                  secondary="कुपोषित मुलांसाठी विशेष संवर्धन केंद्रे"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Statistics Section */}
      <Box sx={{ 
        backgroundColor: '#e3f2fd', 
        p: 4, 
        borderRadius: 2,
        mt: 6,
        textAlign: 'center'
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
          आमची कामगिरी (२०२३-२४)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>५,०००+</Typography>
            <Typography variant="h6">मुलांना पोषण आहार</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>९५%</Typography>
            <Typography variant="h6">लसीकरण कव्हरेज</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ color: '#7b1fa2', fontWeight: 'bold' }}>१२०+</Typography>
            <Typography variant="h6">आरोग्य शिबिरे</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Awareness Programs */}
      <Box sx={{ mt: 6, p: 4, borderLeft: '4px solid #0d47a1' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', fontWeight: 'bold' }}>
          जागरूकता कार्यक्रम
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.1rem' }}>
          ✓ बालिका शिक्षण अभियान<br/>
          ✓ स्वच्छता हा आरोग्याचा पाया<br/>
          ✓ समुपदेशन सत्र - मानसिक आरोग्य<br/>
          ✓ महिला सुरक्षा प्रबोधन<br/>
          ✓ पर्यावरण जागृती मोहिम
        </Typography>
      </Box>
    </Container>
  );
}