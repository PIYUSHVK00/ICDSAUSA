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
  ListItemIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowBack, 
  AccountCircle, 
  School, 
  Favorite,
  Campaign,
  Groups,
  LocalHospital,
  Balance,
  Home,
  Gavel,
  VolunteerActivism
} from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function BetiBachaoBetiPadhao() {
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
            src="/schemes/beti-bachao-beti-padhao.jpg"
            alt="बेटी बचाओ बेटी पढाओ योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            बेटी बचाओ बेटी पढाओ योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            मुलींचे संरक्षण, शिक्षण आणि सक्षमीकरण करणारी राष्ट्रीय मोहीम.
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
            href="/apply-now"
          >
            अधिक माहिती
          </Button>
        </Grid>
      </Grid>

      {/* Beneficiary Section */}
      <Paper sx={{ p: 3, mt: 4, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <AccountCircle sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <Typography paragraph sx={{ ml: 4 }}>
          महिला व मुली
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Campaign sx={{ mr: 1 }} /> योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          या अभियानाअंतर्गत एकात्मिक बाल विकास सेवा योजनेमार्फत खालीलप्रमाणे व्यूहरचना ठरविलेली आहे:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालिकेच्या समान दर्जा व शैक्षणिक प्रोत्साहनाकरिता समाजात कायमस्वरुपी संप्रेषण निर्माण करणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>समाजामध्ये घसरत चाललेल्या लिंग बाल गुणोत्तर व मुलींच्या जन्मदरात वाढ करण्यासाठी जनजागृती करणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>ज्या जिल्हयात मुलींचा जन्मदर कमी झालेला आहे अशा जिल्हा व शहरांवर अधिक लक्ष केंद्रित करुन एकात्मिक व कृतीशील आराखडा तयार करणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>जिल्हा, तालुका व निम्नस्तरावर विविध संस्था व सेवा देणारे विभाग यांचा समन्वय घडवून आणणे</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Favorite sx={{ mr: 1 }} /> योजनेची उद्दीष्टे
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>लिंग भेदावर आधारीत लिंग निवड प्रथा निर्मूलन करणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालिकेच्या जीविताची व सुरक्षिततेची हमी घेणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>मुलींच्या शिक्षणाची आणि सामाजिक सहभागाची खातरजमा करणे</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Groups sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          १) या योजने अंतर्गत मुलींचा जन्मदर वाढविण्याचे दृष्टीने जन जागरण मोहिमे अंतर्गत अनेक कार्यक्रम राबविण्यात येतात. जसे की:
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>गर्भवती मातांची नोंदणी</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>मुलींच्या जन्माचे स्वागत करण्याबाबत जनजागृती</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>वाढदिवस साजरा करणे</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>आरोग्य शिबिरे आयोजित करणे</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>मुलगी वाचवा-मुलगी शिकवाबाबत मार्गदर्शन</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>गुड्डा-गुड्डी बोर्ड लावणे</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>पथनाट्ये</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>विविध स्पर्धा जिल्हास्तरावर घेणे</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Typography paragraph>
          केंद्र शासनाच्या बेटी बचाओ बेटी पढाओ योजनेमध्ये मुलींच्या जन्माचे प्रमाण वाढविण्याच्या दृष्टीने जनजागृती करण्यासाठी गुड्डा-गुड्डी बोर्डचा वापर करण्यात येतो. यामध्ये बस स्थानक, रेल्वे स्टेशन, हॉस्पिटल, शाळा, कॉलेज, तालुक्याची कार्यालये अशा गर्दीच्या ठिकाणी बालकांचे जन्माचे आकडे बोर्डवर दर्शविण्यात येतात.
        </Typography>
        <Typography paragraph>
          २) राज्यातील बालक लिंग गुणोत्तर वृद्धिंगत करण्याच्या प्रमुख उद्देशाने राज्याच्या महिला व बाल विकास विभागाने केंद्र शासनाची बेटी बचाओ बेटी पढाओ योजना हि संपूर्ण राज्यभर सर्व जिल्ह्यात राबविण्यात येत आहे.
        </Typography>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          निकष / कार्यप्रणाली
        </Typography>
        <Typography paragraph>
          अभियान राबविणारी यंत्रणा: नियोजन, अंमलबजावणी आणि सनियंत्रण (जिल्हा, तालुका व ग्रामपंचायत) करिता जिल्हा कृतीदल कार्यरत असून त्याचे अध्यक्ष जिल्हाधिकारी आहेत. यामध्ये इतर विभाग म्हणून आरोग्य व कुटुंब कल्याण, पंचायतराज, ग्राम विकास आणि पोलिस विभाग इत्यादि यंत्रणा आहेत.
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#1565c0' }}>
          या अभियानांतर्गत कार्यरत असणारे विभाग:
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell><LocalHospital /> आरोग्य व कुटुंब कल्याण विभाग</TableCell>
                <TableCell><VolunteerActivism /> महिला व बाल विकास विभाग</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Balance /> सामाजिक न्याय विभाग</TableCell>
                <TableCell><School /> शिक्षण विभाग</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Home /> पंचायतराज</TableCell>
                <TableCell><Home /> ग्राम विकास</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Gavel /> विधी व न्याय विभाग</TableCell>
                <TableCell><LocalHospital /> इंडियन मेडिकल असोसिएशन</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}><VolunteerActivism /> स्वयंसेवी संस्था</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          अधिक माहितीसाठी संपर्क करा:
        </Typography>
        <Typography>
          जिल्हा महिला व बाल विकास अधिकारी<br />
          महिला व बाल विकास विभाग<br />
          दूरध्वनी: 020-25678901<br />
          ईमेल: wcd.maharashtra@gov.in
        </Typography>
      </Box>
    </Container>
  );
}