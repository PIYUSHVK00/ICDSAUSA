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
  ListItemIcon
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, AccountCircle, School, Build } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function AadarshAnganwadiYojana() {
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
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386601/angan1_ts0psd.jpg"
            alt="आदर्श अंगणवाडी योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            आदर्श अंगणवाडी योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            अंगणवाडी केंद्रांचे रुपांतर आधुनिक सुविधांसह आदर्श अंगणवाडीमध्ये करण्यासाठीची योजना.
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
          <AccountCircle sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <Typography paragraph sx={{ ml: 4 }}>
          महिला आणि अंगणवाडीतील सर्व लाभार्थी (बालके)
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          अंगणवाडी सेविकेमार्फत एकात्मिक बाल विकास सेवा योजनेअंतर्गत आरोग्य, पोषण आहार व पूर्वप्राथमिक शिक्षण या बाबी पुरविण्यात येतात. याकरीता सदर अंगणवाडी केंद्राचे रुपांतर आदर्श अंगणवाडी केंद्रामध्ये रुपांतरीत करणे ही काळाची गरज आहे. अंगणवाडी केंद्राचे शिक्षण आनंददायी व्हावे, तेथील सेवांचा दर्जा उंचावण्यासाठी 'आदर्श अंगणवाडी योजना' आखली आहे.
        </Typography>
        <Typography paragraph>
          सदर केंद्रांमध्ये मुलांना आनदंदायी वातावरणात पूर्व शालेय शिक्षण, आरोग्य, पोषण आहार देण्यात येतात. तसेच किशोरवयीन मुली व महिलांना कौशल्य विकास कार्यक्रमाअंतर्गत प्रशिक्षित करण्यात येते.
        </Typography>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <School sx={{ mr: 1 }} /> योजनेचे उद्दीष्टे
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              अंगणवाडयांचा दर्जा सुधारून व त्यांच्या पायाभूत सोयी-सुविधांमध्ये वाढ करुन त्यांचे आदर्श अंगणवाडीमध्ये रुपांतरीत करणे.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              अंगणवाडी केंद्राचे शिक्षण व परिसर आनंददायी करणे.
            </Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Build sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          अंगणवाडयांचा दर्जा सुधारुन व त्यांच्या पायाभूत योयी-सुविधांमध्ये वाढ करुन त्यांना आदर्श अंगणवाडीमध्ये रुपांतरीत करणेसाठी खालील सुविधांचा समावेश आहे:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>सौर उर्जा संच</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>शैक्षणिक साहित्य</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>ई-लर्निंग सुविधा</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>LED TV with USB port and Pendrive</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालकांसाठी खुर्च्या व टेबल</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालकांसाठी स्वच्छ भारत संच</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>वॉटर प्युरिफायर (वीज विरहीत)</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>इमारतची बाह्य रंगरंगोटी व सुशोभिकरण</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>शौचालय दुरस्ती</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>परिसर स्वच्छता</Typography>
          </ListItem>
        </List>
        <Typography paragraph sx={{ mt: 2 }}>
          सन २०१८-१९ पासून आदर्श अंगणवाडी योजना सुरु करण्यात आली आहे. स्वमालकीच्या इमारतीमधील अंगणवाडयांचे आदर्श अंगणवाडीत रुपांतर करण्यात येत आहे.
        </Typography>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          निकष / कार्यप्रणाली
        </Typography>
        <Typography paragraph>
          राज्यातील ६८ हजार स्वत:च्या इमारती असलेल्या अंगणवाड्यांची प्राधान्याने निवड करण्यात आली आहे. सद्यस्थितीत या योजनेअंतर्गत राज्यातील १६,८८५ अंगणवाडयांचे आदर्श अंगणवाडीत रुपांतर करण्यात आले आहे.
        </Typography>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          अधिक माहितीसाठी संपर्क करा:
        </Typography>
        <Typography>
          जिल्हा बाल विकास अधिकारी<br />
          महिला व बाल विकास विभाग<br />
          दूरध्वनी: 020-25678901<br />
          ईमेल: icds.maharashtra@gov.in
        </Typography>
      </Box>
    </Container>
  );
}