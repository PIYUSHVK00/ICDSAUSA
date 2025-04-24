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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
  Divider
} from '@mui/material';
import { ArrowBack, UploadFile } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['वैयक्तिक माहिती', 'कुटुंब माहिती', 'दस्तऐवज अपलोड'];

// List of all schemes
const allSchemes = [
  { id: 'lekh-ladki', name: 'लेख लाडकी योजना' },
  { id: 'bal-sangopan-shikshan', name: 'पुर्व बाल्यावस्थेतील संगोपन व शिक्षण' },
  { id: 'ek-rakmi-labha', name: 'एकरक्कमी लाभ योजना' },
  { id: 'adarsh-anganwadi', name: 'आदर्श अंगणवाडी योजना' },
  { id: 'baby-care-kit', name: 'बेबी केअर किट' },
  { id: 'beti-bachao-beti-padhao', name: 'बेटी बचाओ बेटी पढाओ योजना' },
  { id: 'vcdc', name: 'ग्राम बाल विकास केंद्र (VCDC)' },
  { id: 'poshan-abhiyan', name: 'पोषण अभियान' },
  { id: 'purak-poshan-aahar', name: 'पुरक पोषण आहार' }
];

export default function ApplyNow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedScheme, setSelectedScheme] = useState(id || '');
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    aadharNumber: '',
    mobileNumber: '',
    email: '',
    address: '',
    
    // Girl Child Information
    girlName: '',
    dob: '',
    schoolName: '',
    standard: '',
    
    // Family Information
    parentName: '',
    income: '',
    rationCardType: '',
    familyMembers: '',
    
    // Documents
    documents: {
      aadhar: false,
      birthCertificate: false,
      incomeCertificate: false,
      rationCard: false,
      bankPassbook: false
    },
    
    // Bank Details
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: ''
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDocumentChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [name]: checked
      }
    }));
  };

  const handleSchemeChange = (e) => {
    setSelectedScheme(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, scheme: selectedScheme });
    alert('अर्ज यशस्वीरित्या सादर केला गेला आहे!');
    navigate(`/yojana/${selectedScheme}`);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e' }}>
                योजना निवडा
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <FormControl fullWidth required>
                <InputLabel>योजना निवडा</InputLabel>
                <Select
                  value={selectedScheme}
                  onChange={handleSchemeChange}
                  label="योजना निवडा"
                >
                  {allSchemes.map((scheme) => (
                    <MenuItem key={scheme.id} value={scheme.id}>
                      {scheme.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', mt: 2 }}>
                अर्जदाराची माहिती
              </Typography>
              <Divider sx={{ mb: 3 }} />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="पूर्ण नाव"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="आधार कार्ड क्रमांक"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="मोबाइल नंबर"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="ईमेल"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="पूर्ण पत्ता"
                name="address"
                value={formData.address}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>

            {selectedScheme === 'lekh-ladki' && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', mt: 2 }}>
                    मुलीची माहिती
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="मुलीचे नाव"
                    name="girlName"
                    value={formData.girlName}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="जन्म तारीख"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="शाळा/कॉलेजचे नाव"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="इयत्ता"
                    name="standard"
                    value={formData.standard}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
              </>
            )}
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e' }}>
                कुटुंब माहिती
              </Typography>
              <Divider sx={{ mb: 3 }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="पालकांचे नाव"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="कुटुंबाचे वार्षिक उत्पन्न (रुपये)"
                name="income"
                value={formData.income}
                onChange={handleChange}
                variant="outlined"
                type="number"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">रेशन कार्ड प्रकार</FormLabel>
                <RadioGroup 
                  row
                  name="rationCardType"
                  value={formData.rationCardType}
                  onChange={handleChange}
                >
                  <FormControlLabel value="yellow" control={<Radio />} label="पिवळे" />
                  <FormControlLabel value="orange" control={<Radio />} label="केशरी" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="कुटुंबातील सदस्यांची संख्या"
                name="familyMembers"
                value={formData.familyMembers}
                onChange={handleChange}
                variant="outlined"
                type="number"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', mt: 2 }}>
                बँक माहिती
              </Typography>
              <Divider sx={{ mb: 3 }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="बँक खाते क्रमांक"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="IFSC कोड"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="बँकेचे नाव"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="शाखेचे नाव"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e' }}>
                आवश्यक दस्तऐवज
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                खालील सर्व दस्तऐवज अपलोड करणे अनिवार्य आहेत:
              </Typography>
              <Divider sx={{ mb: 3 }} />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" variant="standard">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.documents.aadhar}
                        onChange={handleDocumentChange}
                        name="aadhar"
                      />
                    }
                    label="आधार कार्ड (मुलगी आणि पालक)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.documents.birthCertificate}
                        onChange={handleDocumentChange}
                        name="birthCertificate"
                      />
                    }
                    label="मुलीचा जन्म दाखला"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.documents.incomeCertificate}
                        onChange={handleDocumentChange}
                        name="incomeCertificate"
                      />
                    }
                    label="उत्पन्न दाखला"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.documents.rationCard}
                        onChange={handleDocumentChange}
                        name="rationCard"
                      />
                    }
                    label="रेशन कार्ड"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.documents.bankPassbook}
                        onChange={handleDocumentChange}
                        name="bankPassbook"
                      />
                    }
                    label="बँक पासबुक / कॅन्सल चेक"
                  />
                </Box>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<UploadFile />}
                sx={{ mt: 2 }}
                component="label"
              >
                दस्तऐवज अपलोड करा
                <input type="file" hidden multiple />
              </Button>
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />}
        onClick={() => navigate(id ? `/yojana/${id}` : '/yojana')}
        sx={{ mb: 3 }}
      >
        मागे जा
      </Button>

      <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', textAlign: 'center', mb: 4 }}>
        {selectedScheme ? allSchemes.find(s => s.id === selectedScheme)?.name : 'योजना अर्ज फॉर्म'}
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          {getStepContent(activeStep)}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              sx={{ width: '120px' }}
            >
              मागे
            </Button>
            
            {activeStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: '120px' }}
                disabled={!selectedScheme}
              >
                सबमिट करा
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ width: '120px' }}
                disabled={!selectedScheme && activeStep === 0}
              >
                पुढे
              </Button>
            )}
          </Box>
        </form>
      </Paper>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          अर्ज प्रक्रिया बाबत सूचना
        </Typography>
        <Typography paragraph>
          १. अर्ज भरण्यापूर्वी सर्व माहिती अचूक असल्याची खात्री करा.<br />
          २. सर्व आवश्यक दस्तऐवज स्कॅन केलेले असणे आवश्यक आहे.<br />
          ३. अर्ज सादर केल्यानंतर तुम्हाला एक पावती क्रमांक मिळेल.<br />
          ४. अर्जाची स्थिती तपासण्यासाठी हा क्रमांक वापरा.<br />
          ५. खोटी माहिती दिल्यास अर्ज रद्द केला जाईल.
        </Typography>
      </Box>
    </Container>
  );
}