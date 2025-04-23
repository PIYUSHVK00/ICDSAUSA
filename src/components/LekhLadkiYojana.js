import React from 'react';
import { 
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, Woman, MonetizationOn } from '@mui/icons-material';

export default function LekhLadkiYojana() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />}
        onClick={() => navigate('/Yojana')}
        sx={{ mb: 3 }}
      >
        मागे जा
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386599/2_mojwpt.jpg"
            alt="लेक लाडकी योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            लेक लाडकी योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            महाराष्ट्र शासनाची ही योजना मुलींच्या जन्मापासून ते शिक्षण पूर्ण होईपर्यंत सहाय्य करते. 
            या योजनेअंतर्गत मुलींच्या वेगवेगळ्या शैक्षणिक टप्प्यांवर आर्थिक मदत दिली जाते.
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
            href="/apply-now"
          >
            अर्ज करा
          </Button>
        </Grid>
      </Grid>

      {/* Beneficiary Section */}
      <Paper sx={{ p: 3, mt: 4, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Woman sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <Typography paragraph sx={{ ml: 4 }}>
          ० ते १८ वर्षे वयोगटातील मुली.
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          वर्णन
        </Typography>
        <Typography paragraph>
          माझी कन्या भाग्यश्री (सुधारीत) ही योजना अधिक्रमित करुन राज्यात दिनांक 1 एप्रिल 2023 पासून मुलींच्या जन्मानंतरच्या सक्षमीकरणासाठी "लेक लाडकी" योजना सुरु करण्यास शासनाने मान्यता दिली आहे. ही योजना पिवळया किंवा केशरी धारक कुटुंबामध्ये दि. 1 एप्रिल 2023 रोजी जन्मलेल्या मुलीकरीता लागू आहे. तसेच लाभार्थी कुटुंबाचे वार्षिक उत्पन्न रक्कम रु. 1 लाखापेक्षा अधिक नसावे.
        </Typography>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          योजनेची उद्दिष्टये
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="१. मुलीच्या जन्मास प्रोत्साहन देवून मुलींचा जन्मदर वाढविणे." />
          </ListItem>
          <ListItem>
            <ListItemText primary="२. मुलींच्या शिक्षणास चालना देणे." />
          </ListItem>
          <ListItem>
            <ListItemText primary="३. मुलींचा मृत्यू दर कमी करणे व बालविवाह रोखणे." />
          </ListItem>
          <ListItem>
            <ListItemText primary="४. कुपोषण कमी करणे," />
          </ListItem>
          <ListItem>
            <ListItemText primary="५. शाळाबाह्य मुलींचे प्रमाण ० (शुन्य) वर आणण्यासाठी प्रोत्साहित करणे." />
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <MonetizationOn sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          "लेक लाडकी" योजनेअंतर्गत पिवळ्या व केशरी शिधापत्रिकाधारक कुटुंबात मुलींच्या जन्मानंतर ५ हजार रुपये, इयत्ता पहिलीत ६ हजार रुपये, सहावीत ७ हजार रुपये, अकरावीत ८ हजार रुपये तर लाभार्थी मुलींचे वय १८ वर्ष पूर्ण झाल्यानंतर तिला ७५ हजार रुपये याप्रमाणे एकूण रुपये १,०१,०००/- एवढी रक्कम देण्यात येईल.
        </Typography>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          निकष/ कार्यपणाली
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="1) ही योजना पिवळ्या व केशरी शिधापत्रिकाधारक कुटुंबामध्ये दिनांक 1 एप्रिल, 2023 रोजी वा त्यानंतर जन्माला येणा-या एक अथवा दोन मुलींना लागू राहील. तसेच, एक मुलगा व एक मुलगी असल्यास मुलीला लागू राहील." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2) पहिल्या अपत्याच्या तिस-या हप्त्यासाठी व दुस-या अपत्याच्या दुस-या हप्त्यासाठी अर्ज सादर करतेवेळी माता/पित्याने कुटुंब नियोजन प्रमाणपत्र सादर करणे अनिवार्य राहील." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3) तसेच, दुसऱ्या प्रसुतीच्या वेळी जुळी अपत्ये जन्माला आल्यास एक मुलगी किंवा दोन्ही मुलींना या योजनेचा ३ लाभ अनुज्ञेय राहील. मात्र त्यानंतर माता / पित्याने कुटुंब नियोजन शस्त्रक्रिया करणे आवश्यक राहील." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4) दिनांक 1 एप्रिल, 2023 पूर्वी एक मुलगी / मुलगा आहे व त्यानंतर जन्माला आलेल्या दुसऱ्या मुलीस किंवा जुळ्या मुलींना (स्वतंत्र) ही योजना अनुज्ञेय राहील. मात्र माता / पित्याने कुटुंब नियोजन शस्त्रक्रिया करणे आवश्यक राहील." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5) लाभार्थीचे कुटुंब महाराष्ट्र राज्याचे रहिवाशी असणे आवश्यक राहील." />
          </ListItem>
          <ListItem>
            <ListItemText primary="6) लाभार्थी बैंक खाते महाराष्ट्र राज्यात असणे आवश्यक आहे." />
          </ListItem>
          <ListItem>
            <ListItemText primary="7) लाभार्थी कुटुंबाचे वार्षिक उत्पन्न रक्कम रु. 1 लक्ष पेक्षा जास्त नसावे." />
          </ListItem>
        </List>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          अधिक माहितीसाठी संपर्क करा:
        </Typography>
        <Typography>
          जिल्हा बाल विकास अधिकारी, औसा<br />
          दूरध्वनी: 02485-222222<br />
          ईमेल: icds.ausa@maharashtra.gov.in
        </Typography>
      </Box>
    </Container>
  );
}