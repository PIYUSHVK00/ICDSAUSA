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
  ListItemIcon, // Added this import
  ListItemText,
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, ChildCare, School, Favorite, Group, Psychology } from '@mui/icons-material';

export default function BalSangopanShikshan() {
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
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386615/purva_baly_acpkyr.jpg"
            alt="पुर्व बाल्यावस्थेतील संगोपन व शिक्षण"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            पुर्व बाल्यावस्थेतील संगोपन व शिक्षण
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            ० ते ६ वर्ष वयोगटातील मुलांच्या सर्वांगीण विकासासाठीची ही योजना. 
            या योजनेअंतर्गत मुलांना खेळ-खेळात शिक्षण देण्यावर भर दिला जातो.
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
          <ChildCare sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <Typography paragraph sx={{ ml: 4 }}>
          ६ वर्षाखालील बालके
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          जीवनाची पहिली सहा वर्षे महत्वाची असतात, कारण या वर्षांत शरीराच्या विकासाच्या दर इतर कोणत्याही टप्प्यापेक्षा अधिक वेगवान आहे. जागतिक मेंदू संशोधनाने देखील हे सिद्ध झाले आहे की सुरुवातीचे सहा वर्ष हे मेंदूच्या विकासासाठी महत्वाचे आहेत. पुर्व बाल्यावस्थेतील संगोपन व शिक्षण (ECCE) अंतर्गत पायाभूत टप्प्यांमध्ये बालकांना आनंदी आणि उद्दीपक वातावरण मिळाल्यास बालकांचा दीर्घकालीन विकास होतो आणि त्यामुळे बालकांच्या विकासाच्या प्रक्रियेत पुर्व बाल्यावस्थेतील संगोपन व शिक्षण (ECCE) चे महत्वाचे योगदान आहे.
        </Typography>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          योजनेची उद्दिष्टे
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><Favorite color="primary" /></ListItemIcon>
            <ListItemText primary="प्रत्येक बालकांस आदर, सुरक्षा व सुरक्षितता तसेच बालकाच्या सकारात्मक स्वसंकल्पना विकसित करणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><ChildCare color="primary" /></ListItemIcon>
            <ListItemText primary="प्रत्येक मुलाच्या क्षमतेनुसार शारीरिक आणि सूक्ष्मस्नायूंचा विकास करणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><School color="primary" /></ListItemIcon>
            <ListItemText primary="उत्तम आहार व आरोग्याच्या सवयी, स्वच्छतेच्या सवयी आणि स्वावलंबी कौशल्ये रुजविणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><Group color="primary" /></ListItemIcon>
            <ListItemText primary="बालकांना प्रभावी संवाद साधण्यासाठी सक्षम करणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><Psychology color="primary" /></ListItemIcon>
            <ListItemText primary="पंचेंद्रियांचा विकासाला चालना देणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><School color="primary" /></ListItemIcon>
            <ListItemText primary="बौद्धिक विकास व वैज्ञानिक दृष्टिकोण विकसित करण्यासाठी संधी उपलब्ध करून देणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><Group color="primary" /></ListItemIcon>
            <ListItemText primary="सामाजिक कौशल्ये, सामाजिक क्षमता आणि भावनिक विकास करणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><ChildCare color="primary" /></ListItemIcon>
            <ListItemText primary="सौंदर्यदृष्टी व सर्जनशीलतेचा विकास करणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><School color="primary" /></ListItemIcon>
            <ListItemText primary="घर ते अंगणवाडी केंद्र आणि अंगणवाडी केंद्रापासून ते औपचारिक शालेय शिक्षणापर्यंतचा प्रवास सहज व सुकर करणे." />
          </ListItem>
          <ListItem>
            <ListItemIcon><ChildCare color="primary" /></ListItemIcon>
            <ListItemText primary="सर्वांगीण व्यक्तिमत्व विकास करणे." />
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          बाल्यावस्था पूर्व संगोपन व शिक्षण (ECCE) हा खेळ व कृतीआधारित कार्यक्रम आहे. याअंतर्गत बालकांना भाषा, बौद्धिक, सामाजिक, भावनिक आणि शारीरिक विकासासाठी विविध उपक्रमाच्या सहाय्याने अनुभव दिले जातात.
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          १. जन्म - तीन वर्षे:
        </Typography>
        <Typography paragraph>
          काळजी व संगोपन, उद्दीपन, संवाद यावर भर दिला जातो.
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          २. तीन - सहा वर्षे:
        </Typography>
        <Typography paragraph>
          काळजी व संगोपन, शाळापूर्व तयारी यावर भर दिला जातो.
        </Typography>
      </Paper>

      {/* Activities Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          प्रमुख उपक्रम
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="• खेळ-आधारित शिक्षण कार्यक्रम" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• सर्जनशील कला आणि क्राफ्ट" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• गाणी, कथा आणि कविता" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• शारीरिक व्यायाम आणि योग" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• पंचेंद्रिय विकास क्रियाकलाप" />
          </ListItem>
        </List>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          अधिक माहितीसाठी संपर्क करा:
        </Typography>
        <Typography>
        बाल विकास प्रकल्प अधिकारी (ग्रामीण)
        एकात्मिक बाल विकास सेवा योजना प्रकल्प, औसा<br />
        ईमेल: cdpoicdsausa@gmail.com
        </Typography>
      </Box>
    </Container>
  );
}