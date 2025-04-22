import React from 'react';
import { 
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  IconButton,
  useTheme,
  Chip,
  Button,
  Avatar
} from '@mui/material';
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Work as WorkIcon,
  Groups as GroupsIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const mainOfficers = [
  {
    name: 'श्रीमती. जिजाबाई दगडू ढेंगळे',
    position: 'बालविकास प्रकल्प अधिकारी (प्रभारी)',
    phone: '+919623885715',
    email: 'jijabaidhengale@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300924/dh_cb0jus.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'श्री. विश्वास शिवलिंग कुंभकर्ण',
    position: 'विस्तार अधिकारी (सांख्यिकी)',
    phone: '+919422471824',
    email: 'karanv0876@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300929/Vishwas_r8wtec.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'श्रीमती. बनशंकरी रतन कलशेट्टे',
    position: 'कनिष्ठ सहाय्यक',
    phone: '+918788263327',
    email: 'shriv.bk@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300925/KL_luh4e2.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

const subOfficers = [
  {
    name: 'श्रीमती स्वाती रत्नदिप कडकधोंड',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+918668417482',
    email: 'vhatkar.swati@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300926/sw_rjnfyd.jpg',
    area: 'आलमला'
  },
  {
    name: 'श्रीमती पल्लवी श्रीराम तोडकर',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+919356390238',
    email: 'pallavitodkar.1996@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300925/pl_c3xmwy.jpg',
    area: 'बेलकुंड'
  },
  {
    name: 'श्रीमती सुचिता हिरालाल कटके',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+919665227350',
    email: 'suchitakatke01@gmail.com',
    image: '/images/default-female.jpg',
    area: 'भादा'
  },
  {
    name: 'श्रीमती सुप्रिया गोविंद शिरमवार',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+918767871580',
    email: 'sshiramwad1992@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300925/su_aqgk2y.jpg',
    area: 'बुधोडा'
  },
  {
    name: 'श्रीमती जिजाबाई दगडू ढेंगळे',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+919623885715',
    email: 'jijabaidhengale@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300924/dh_cb0jus.jpg',
    area: 'चिंचोली काजळे'
  },
  
  {
    name: 'श्रीमती सुलभा बाबुराव पाटील',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+917620870291',
    email: 'sulbhapatil121@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300926/sul_uzc3oi.png',
    area: 'हासेगांव'
  },
  {
    name: 'श्रीमती भाग्यश्री नंदकुमार पाटील',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+917058825103',
    email: 'bhagyashripatil507@gmail.com',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300924/bha_z3eulf.jpg',
    area: 'उजनी'
  }
];

export default function Contact() {
  const theme = useTheme();

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = (emailAddress) => {
    const subject = "Enquiry from ICDS Website";
    const body = "Dear Officer,\n\n";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Main Officers Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Box sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.primary.light,
          borderRadius: '50%',
          width: 80,
          height: 80,
          mb: 3
        }}>
          <WorkIcon sx={{ fontSize: 40, color: theme.palette.primary.contrastText }} />
        </Box>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            mb: 2,
            color: theme.palette.primary.dark,
          }}
        >
          Key Officers
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          sx={{ fontSize: '1.1rem' }}
        >
          Meet our dedicated leadership team working for child development and women empowerment
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 10 }}>
        {mainOfficers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 12px 28px rgba(0,0,0,0.12)'
              }
            }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: 4,
                px: 3
              }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ 
                    width: 120,
                    height: 120,
                    border: `3px solid ${theme.palette.primary.main}`,
                    mb: 3
                  }}
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 1,
                    textAlign: 'center'
                  }}
                >
                  {member.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  {member.position}
                </Typography>
              </Box>
              
              <CardContent sx={{ px: 3, pt: 0 }}>
                <Box sx={{ mb: 2 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<PhoneIcon />}
                    sx={{ 
                      mb: 1.5,
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      py: 1.5
                    }}
                    onClick={() => handlePhoneClick(member.phone)}
                  >
                    {member.phone.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3')}
                  </Button>
                  
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    sx={{ 
                      mb: 2,
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      py: 1.5
                    }}
                    onClick={() => handleEmailClick(member.email)}
                  >
                    {member.email}
                  </Button>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  gap: 1
                }}>
                  <IconButton 
                    sx={{ 
                      backgroundColor: theme.palette.primary.light + '20',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                      }
                    }}
                    onClick={() => window.open(member.social.linkedin, '_blank')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      backgroundColor: theme.palette.primary.light + '20',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                      }
                    }}
                    onClick={() => window.open(member.social.twitter, '_blank')}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Field Officers Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Box sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '50%',
          width: 80,
          height: 80,
          mb: 3
        }}>
          <GroupsIcon sx={{ fontSize: 40, color: theme.palette.secondary.contrastText }} />
        </Box>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            mb: 2,
            color: theme.palette.secondary.dark,
          }}
        >
          Field Officers
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          sx={{ fontSize: '1.1rem' }}
        >
          Our committed team members working across various regions
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {subOfficers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: 3,
                px: 2
              }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ 
                    width: 100,
                    height: 100,
                    border: `2px solid ${theme.palette.secondary.main}`,
                    mb: 2
                  }}
                />
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 0.5,
                    textAlign: 'center'
                  }}
                >
                  {member.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    mb: 1.5,
                    textAlign: 'center',
                    fontSize: '0.8rem'
                  }}
                >
                  {member.position}
                </Typography>
                
                <Chip 
                  icon={<LocationIcon fontSize="small" />}
                  label={member.area} 
                  size="small" 
                  color="secondary"
                  sx={{ 
                    mb: 2,
                    fontWeight: 500,
                    fontSize: '0.7rem'
                  }}
                />
              </Box>
              
              <CardContent sx={{ 
                px: 2, 
                pt: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: 1
              }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PhoneIcon fontSize="small" />}
                  sx={{ 
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    px: 2,
                    py: 1
                  }}
                  onClick={() => handlePhoneClick(member.phone)}
                >
                  Call
                </Button>
                
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<EmailIcon fontSize="small" />}
                  sx={{ 
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    px: 2,
                    py: 1
                  }}
                  onClick={() => handleEmailClick(member.email)}
                >
                  Email
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}