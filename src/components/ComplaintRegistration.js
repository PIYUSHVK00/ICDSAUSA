import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert
} from '@mui/material';
import { ArrowBack, Description, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: 'आंगणवाडीतील गरोदर मातांची नोंदणी करणे',
    timeLimit: '01 दिवस',
    officer: 'आंगणवाडी सेविका',
    firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
    secondAppeal: 'बाल विकास प्रकल्प अधिकारी(ग्रा)'
  },
  {
    id: 2,
    name: '06 महिने ते 03 वर्षापर्यंतच्या मुलांची आंगणवाडीत नोंदणी करणे',
    timeLimit: '01 दिवस',
    officer: 'आंगणवाडी सेविका',
    firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
    secondAppeal: 'बाल विकास प्रकल्प अधिकारी(ग्रा)'
  },
  {
    id: 3,
    name: '03 ते 06 वर्षापर्यंतच्या मुलांची आंगणवाडीत नोंदणी करणे',
    timeLimit: '01 दिवस',
    officer: 'आंगणवाडी सेविका',
    firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
    secondAppeal: 'बाल विकास प्रकल्प अधिकारी(ग्रा)'
  },
  {
    id: 4,
    name: 'इंदिरा गांधी मातृत्व सहयोग योजनेअंतर्गत गर्भवती महिलांना आर्थिक सहाय्य',
    timeLimit: '15 दिवस',
    officer: 'आंगणवाडी सेविका',
    firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
    secondAppeal: 'बाल विकास प्रकल्प अधिकारी'
  },
  {
    id: 5,
    name: 'सबली योजनेअंतर्गत विकलांग मुलींचे नोंदणीकरण',
    timeLimit: '01 दिवस',
    officer: 'आंगणवाडी सेविका',
    firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
    secondAppeal: 'बाल विकास प्रकल्प अधिकारी'
  }
];

export default function ComplaintRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    aadhar: '',
    serviceId: '',
    complaintDetails: '',
    documents: []
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...e.target.files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        मागे जा
      </Button>

      <Typography variant="h3" gutterBottom sx={{ 
        fontWeight: 700, 
        color: 'primary.main',
        mb: 4,
        textAlign: 'center',
        fontFamily: "'Noto Sans Devanagari', sans-serif"
      }}>
        तक्रार नोंदवा
      </Typography>

      {submitted ? (
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            तुमची तक्रार यशस्वीरित्या नोंदवली गेली आहे!
          </Typography>
          <Typography paragraph>
            तक्रार क्रमांक: MSC{Math.floor(Math.random() * 1000000)}
          </Typography>
          <Typography paragraph>
            कृपया हा क्रमांक संग्रहीत ठेवा. तुम्ही या क्रमांकाचा वापर करून तक्रारीची स्थिती तपासू शकता.
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => setSubmitted(false)}
            sx={{ mt: 2 }}
          >
            नवीन तक्रार नोंदवा
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                fontFamily: "'Noto Sans Devanagari', sans-serif"
              }}>
                तक्रार फॉर्म
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label="पूर्ण नाव"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label="मोबाइल नंबर"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="पत्ता"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      variant="outlined"
                      multiline
                      rows={3}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label="आधार कार्ड क्रमांक"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth required>
                      <InputLabel>तक्रार सेवा निवडा</InputLabel>
                      <Select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        label="तक्रार सेवा निवडा"
                      >
                        {services.map(service => (
                          <MenuItem key={service.id} value={service.id}>
                            {service.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="तक्रार तपशील"
                      name="complaintDetails"
                      value={formData.complaintDetails}
                      onChange={handleChange}
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<Description />}
                    >
                      दस्तऐवज अपलोड करा
                      <input 
                        type="file" 
                        hidden 
                        multiple 
                        onChange={handleFileUpload}
                      />
                    </Button>
                    {formData.documents.length > 0 && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {formData.documents.length} फाइल निवडली
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      तक्रार सबमिट करा
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                fontFamily: "'Noto Sans Devanagari', sans-serif"
              }}>
                तक्रार प्रक्रिया
              </Typography>
              
              <Box component="ol" sx={{ pl: 2 }}>
                <li>
                  <Typography paragraph>
                    तक्रार अर्ज संबंधित आंगणवाडी केंद्र किंवा जिल्हा कार्यालयात सादर करा
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    अर्जासोबत सर्व संबंधित दस्तऐवजे संलग्न करा
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    तक्रार नोंदणी क्रमांक घ्या
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    तक्रारीची निकाल कालमर्यादा: ३० दिवस
                  </Typography>
                </li>
              </Box>

              <Alert severity="info" sx={{ mt: 2 }}>
                तक्रार नोंदवल्यानंतर तुम्हाला एक अभिस्वीकृती क्रमांक मिळेल. कृपया तो संग्रहीत ठेवा.
              </Alert>
            </Paper>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                fontFamily: "'Noto Sans Devanagari', sans-serif"
              }}>
                सेवा व कालमर्यादा
              </Typography>
              
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>सेवा</TableCell>
                      <TableCell>कालमर्यादा</TableCell>
                      <TableCell>जबाबदार</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {services.slice(0, 3).map(service => (
                      <TableRow key={service.id}>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{service.timeLimit}</TableCell>
                        <TableCell>{service.officer}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button 
                fullWidth 
                sx={{ mt: 2 }}
                onClick={() => navigate('/lokseva-hami-kayda')}
              >
                सर्व सेवा पहा
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}