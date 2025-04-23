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
  TableRow,
  TableHead
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowBack, 
  ChildCare,
  PregnantWoman,
  Favorite,
  Campaign,
  Groups,

  Fastfood
} from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function PurakPoshanAahar() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />}
        onClick={() => navigate('/yojana')}
        sx={{ mb: 3 }}
      >
        मागे जा
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={5} md={3}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745406590/favicon_e2ahxl.jpg"
            alt="पुरक पोषण आहार योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            पुरक पोषण आहार योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            कुपोषण दूर करण्यासाठी एकात्मिक बाल विकास सेवेचा महत्वाचा घटक.
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
          <Groups sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ChildCare color="primary" />
            </ListItemIcon>
            <Typography>६ महिने ते ६ वर्षे वयोगटातील बालके</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PregnantWoman color="primary" />
            </ListItemIcon>
            <Typography>गरोदर व स्तनदा माता</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChildCare color="primary" />
            </ListItemIcon>
            <Typography>आकांक्षित जिल्ह्यातील १४ (+) ते १८ वर्षे वयोगटातील किशोरी मुली</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Campaign sx={{ mr: 1 }} /> योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          केंद्र शासन पुरस्कृत एकात्मिक बाल विकास सेवा योजनेअंतर्गत राज्यातील ग्रामीण / आदिवासी / नागरी प्रकल्पातील अंगणवाडी क्षेत्रातील ६ महिने ते ३ वर्षे वयोगटातील सर्वसाधारण व मध्यम श्रेणीतील बालकांना ५०० उष्मांक व १२ ते १५ ग्रॅम प्रथिने युक्त THR अंतर्गत घरपोच आहार व गरोदर स्त्रीया, स्तनदा माता तसेच आकांक्षित जिल्हयातील १४ (+) ते १८ वर्षे वयोगटातील किशोरी मुलींना ६०० उष्मांक व १८ ते २० ग्रॅम प्रथिने युक्त THR अंतर्गत घरपोच आहार दिला जातो.
        </Typography>
        <Typography paragraph>
          ६ महिने ते ६ वर्षे वयोगटातील तीव्र कुपोषित बालकांना ८०० उष्मांक व २० ते २५ ग्रॅम प्रथिने युक्त आहार दिला जातो. ३ ते ६ वर्ष वयोगटातील बालकांना अंगणवाडी केंद्रात सकाळचा नाश्ता व दुपारचे जेवण (गरम ताजा आहार) महिला बचत गटा मार्फत देण्यात येतो.
        </Typography>
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
            <Typography>बालके, किशोरी मुली, गरोदर व स्तनदा माता यांचा आहार विषयक दर्जा सुधारणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालकांमधील कुपोषणाचे प्रमाण कमी करणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>अति तीव्र कुपोषित बालकांना सर्वसाधारण श्रेणी मध्ये आणणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालमृत्यूचे प्रमाण कमी करणे</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Fastfood sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                <TableCell>लाभार्थी गट</TableCell>
                <TableCell>उष्मांक</TableCell>
                <TableCell>प्रथिने</TableCell>
                <TableCell>दर (प्रति दिन)</TableCell>
                <TableCell>आहाराचा प्रकार</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>६ महिने ते ३ वर्षे</TableCell>
                <TableCell>५०० उष्मांक</TableCell>
                <TableCell>१२-१५ ग्रॅम</TableCell>
                <TableCell>रु ८/-</TableCell>
                <TableCell>घरी घेऊन जाण्यासाठी आहार</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>३ ते ६ वर्षे</TableCell>
                <TableCell>५०० उष्मांक</TableCell>
                <TableCell>१२-१५ ग्रॅम</TableCell>
                <TableCell>रु ८/-</TableCell>
                <TableCell>सकाळचा नाश्ता व गरम ताजा आहार (अंगणवाडीत)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>६ महिने ते ३ वर्षे (तीव्र कुपोषित)</TableCell>
                <TableCell>८०० उष्मांक</TableCell>
                <TableCell>२०-२५ ग्रॅम</TableCell>
                <TableCell>रु १२/-</TableCell>
                <TableCell>घरी घेऊन जाण्यासाठी आहार</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>३ ते ६ वर्षे (तीव्र कुपोषित)</TableCell>
                <TableCell>८०० उष्मांक</TableCell>
                <TableCell>२०-२५ ग्रॅम</TableCell>
                <TableCell>रु ८/- (नाश्ता) + रु ४/- (आहार)</TableCell>
                <TableCell>नाश्ता व गरम ताजा आहार (अंगणवाडीत)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>गरोदर व स्तनदा माता</TableCell>
                <TableCell>६०० उष्मांक</TableCell>
                <TableCell>१८-२० ग्रॅम</TableCell>
                <TableCell>रु ९.५०/-</TableCell>
                <TableCell>घरी घेऊन जाण्यासाठी आहार</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>किशोरवयीन मुली</TableCell>
                <TableCell>६०० उष्मांक</TableCell>
                <TableCell>१८-२० ग्रॅम</TableCell>
                <TableCell>रु ९.५०/-</TableCell>
                <TableCell>घरी घेऊन जाण्यासाठी आहार</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          निकष / कार्यप्रणाली
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>प्रथम अंगणवाडी क्षेत्रातील लाभार्थ्यांची नोंद अंगणवाडी सेविकेकडून घेण्यात येते</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>त्यानंतर अंगणवाडी सेविका लाभार्थ्यांची वयोगट निहाय मागणी पर्यवेक्षिकेला दिली जाते</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>पर्यवेक्षिका कार्यालयातील मागणी नोंदवहीत अंगणवाडी निहाय मागणी नोंदविते</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बाल विकास प्रकल्प अधिकारी यांचेमार्फत THR आहार पुरवठयासंदर्भात प्रकल्पाची एकत्रित मागणी पुरवठाधारकास देण्यात येते</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>मागणीनुसार पुरवठाधारकामार्फत अंगणवाडीस्तरावर घरपोच (THR) आहाराचा पुरवठा करण्यात येतो</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>अंगणवाडी सेविका प्राप्त झालेल्या आहाराची पोहच लाभार्थ्यांना करते</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>प्राप्त झालेल्या THR/ गरम ताजा आहाराची नोंद पोषण ट्रॅकर अँपवर तसेच अंगणवाडी केंद्रामध्ये जतन करुन ठेवलेल्या नोंदवहीमध्ये घेतली जाते</Typography>
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
          एकात्मिक बाल विकास सेवा<br />
          महिला व बाल विकास विभाग<br />
          दूरध्वनी: 020-25678902<br />
          ईमेल: icds.maharashtra@gov.in
        </Typography>
      </Box>
    </Container>
  );
}