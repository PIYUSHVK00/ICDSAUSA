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
  TableHead,
  TableRow
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowBack, 
  AccountCircle, 
  Favorite,
  Restaurant,
  LocalHospital,
  Group,
  AccessibilityNew,
  ChildFriendly
} from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function PoshanAbhiyan() {
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
            src="/schemes/poshan-abhiyan.jpg"
            alt="पोषण अभियान"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            पोषण अभियान
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            कुपोषण दूर करण्यासाठी राष्ट्रीय पोषण मोहीम (National Nutrition Mission)
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
        <List>
          <ListItem>
            <ListItemIcon>
              <AccessibilityNew />
            </ListItemIcon>
            <Typography>१५-४९ वर्ष वयोगटातील महिला व किशोरवयीन मुलीं, गर्भवती महिला, स्तनदा माता</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChildFriendly />
            </ListItemIcon>
            <Typography>० ते ६ वर्ष वयोगटातील बालके</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Restaurant sx={{ mr: 1 }} /> योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          पोषण अभियान हा ०-६ वर्ष वयोगटातील बालके, गरोदर महिला आणि स्तनदा मातांसाठी पोषण परिणाम सुधारण्यासाठी देशातील सर्व राज्यांमध्ये सन २०१८ पासून अंमलबजावणी करण्यात येत आहे. मार्च २०१८ मध्ये सुरू करण्यात आलेला, हा कार्यक्रम किशोरवयीन मुली आणि गर्भवती स्त्रियांवर लक्ष केंद्रित करून लहान मुलांमधील वाढ, कुपोषण, अशक्तपणा आणि जन्मतः कमी वजन, या सर्व बाबी सुधारण्याकरिता तंत्रज्ञान, लक्षित दृष्टिकोन आणि अभिसरण पद्धतीचा वापर करण्यात येतो.
        </Typography>
        <Typography paragraph>
          विविध तंत्रज्ञानाचा वापर करून सेवा वितरण आणि हस्तक्षेप सुनिश्चित करणे, अभिसरणाद्वारे वर्तणुकीतील बदल करून विशिष्ट लक्ष्य साध्य करणे हे या कार्यक्रमाचे प्रमुख उद्दिष्ट आहे. त्याअनुषंगाने शासनाने दि. ११/०७/२०१८ च्या शासन निर्णयान्वये मान्यता दिल्यानुसार पोषण अभियानाची अंमलबजावणी राज्यातील ३६ जिल्हयातील ५५३ प्रकल्पांमधील सर्व अंगणवाडी केंद्रामध्ये सुरु आहे.
        </Typography>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Favorite sx={{ mr: 1 }} /> योजनेची उद्दीष्टे
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#e3f2fd' }}>
                <TableCell>अ.क्र.</TableCell>
                <TableCell>उद्दिष्टे</TableCell>
                <TableCell>इष्टतम लक्ष्य</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>१</TableCell>
                <TableCell>० ते ६ वर्ष बालकांमधील खुजे/बुटके पणाचे प्रमाण कमी करणे</TableCell>
                <TableCell>६% वरून प्रतिवर्ष २% प्रमाणे</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>२</TableCell>
                <TableCell>० ते ६ वर्ष वयोगटातील बालकांमधील कुपोषणाचे प्रमाण कमी करणे</TableCell>
                <TableCell>६% वरून प्रतिवर्ष २% प्रमाणे</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>३</TableCell>
                <TableCell>६-५९ महिने वयोगटातील बालकांमधील रक्तक्षयाचे प्रमाण कमी करणे</TableCell>
                <TableCell>९% वरून प्रतिवर्ष ३% प्रमाणे</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>४</TableCell>
                <TableCell>१५-४९ वर्ष वयोगटातील किशोरवयीन मुलीं व महिलामधील रक्तक्षयाचे प्रमाण कमी करणे</TableCell>
                <TableCell>९% वरून प्रतिवर्ष ३% प्रमाणे</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>५</TableCell>
                <TableCell>जन्मतः कमी वजनाचे असणाऱ्या बालकांचे प्रमाण कमी करणे</TableCell>
                <TableCell>६% वरून प्रतिवर्ष २% प्रमाणे</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Group sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          वरीलप्रमुख उद्दिष्टांनुसार महाराष्ट्र राज्यामध्ये पोषण अभियानाची अंमलबजावणी करण्यात येत आहे. याअंतर्गत उद्दिष्ट साध्य करण्यासाठी शासनाच्या विविध विभागांचा समन्वय (convergence) करण्यात आलेला आहे.
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 2, color: '#1565c0' }}>
          समन्वित विभाग:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>ग्राम विकास विभाग</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>सार्वजनिक आरोग्य विभाग</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>पाणी पुरवठा व स्वच्छता विभाग</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>नगर विकास विभाग</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>आदिवासी विकास विभाग</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियान (MSRLM)</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>अन्न व औषध प्रशासन विभाग</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>राष्ट्रीय ग्रामीण आरोग्य मिशन</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Typography paragraph sx={{ mt: 2 }}>
          पोषण अभियानात प्रत्येक स्त्री आणि बालकांच्या निरंतर काळजीमध्ये दर्जेदार सेवांमध्ये प्रवेश सुनिश्चित करण्यात येते. विशेषतः मुलाच्या आयुष्याच्या पहिल्या १००० दिवसांमध्ये, अनेक दर्जेदार कार्यक्रम आणि योजनांचे अभिसरण सुनिश्चित केले जाते. सप्टेंबर महिन्यात पोषण माह व मार्च महिन्यात पोषण पखवाडा जनआंदोलन या उपक्रमाद्वारे पोषण अभियानात समुदायाला सहभागी करून जनजागृती केली जाते.
        </Typography>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <LocalHospital sx={{ mr: 1 }} /> निकष / कार्यप्रणाली
        </Typography>
        <Typography paragraph>
          पोषण अभियान अंतर्गत ठरविण्यात आलेली उद्दिष्ट गाठण्यासाठी सन २०१८-१९ पासून राज्यातील सर्व जिल्ह्यांत पोषण अभियानाची अंमलबजावणी करण्यात येत आहे.
        </Typography>
        <Typography paragraph>
          या अभियानाची मुख्य वैशिष्ट्ये:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>आयुष्याच्या पहिल्या 1000 दिवसांवर भर (गर्भधारणेपासून 2 वर्षे पर्यंत)</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>तंत्रज्ञान-आधारित सेवा वितरण</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>विविध विभागांचे समन्वय (Convergence)</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>जनआंदोलनाद्वारे जनजागृती</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>निर्देशित प्रशिक्षण कार्यक्रम</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          अधिक माहितीसाठी संपर्क करा:
        </Typography>
        <Typography>
          जिल्हा महिला व बाल विकास अधिकारी<br />
          पोषण अभियान प्रकोष्ठ<br />
          दूरध्वनी: 020-25678901<br />
          ईमेल: poshan.maharashtra@gov.in
        </Typography>
      </Box>
    </Container>
  );
}