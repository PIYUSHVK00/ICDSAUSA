import React from 'react';
import { 
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
  IconButton,
  useTheme,
  Chip,
  Fade
} from '@mui/material';
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Work as WorkIcon,
  Groups as GroupsIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const mainOfficers = [
  {
    name: 'श्रीमती. जिजाबाई दगडू ढेंगळे',
    position: 'बालविकास प्रकल्प अधिकारी (प्रभारी)',
    phone: '+91 98765 43210',
    email: 'cdpo.ausa@icds.gov.in',
    image: 'images/dh.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    isMain: true
  },
  {
    name: 'श्री. विश्वास शिवलिंग कुंभकर्ण',
    position: 'विस्तार अधिकारी (सांख्यिकी)',
    phone: '+91 87654 32109',
    email: 'acdpo.ausa@icds.gov.in',
    image: 'images/Vishwas.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    isMain: true
  },
  {
    name: 'श्रीमती. बनशंकरी रतन कलशेट्टे',
    position: 'कनिष्ठ सहाय्यक',
    phone: '+91 76543 21098',
    email: 'extofficer.ausa@icds.gov.in',
    image: 'images/KL.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    isMain: true
  }
];

const subOfficers = [
  {
    name: 'श्रीमती सुप्रिया गोविंद शिरमवार',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 65432 10987',
    email: 'supervisor1.ausa@icds.gov.in',
    image: 'images/su.jpg',
    area: 'बुधोडा'
  },
  {
    name: 'श्रीमती स्वाती रत्नदिप कडकधोंड',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 54321 09876',
    email: 'supervisor2.ausa@icds.gov.in',
    image: 'images/sw.jpg',
    area: 'आलमला'
  },
  {
    name: 'श्रीमती पल्लवी श्रीराम तोडकर',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 43210 98765',
    email: 'accounts.ausa@icds.gov.in',
    image: 'images/pl.jpg',
    area: 'बेलकुंड'
  },
  {
    name: 'श्रीमती भाग्यश्री नंदकुमार पाटील',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 32109 87654',
    email: 'dataentry.ausa@icds.gov.in',
    image: 'images/pl.jpg',
    area: 'उजनी'
  },
  {
    name: 'श्रीमती जिजाबाई दगडू ढेंगळे',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 21098 76543',
    email: 'nutrition.ausa@icds.gov.in',
    image: 'images/dh.jpg',
    area: 'चिंचोली काजळे'
  },
  {
    name: 'श्रीमती सुचिता हिरालाल कटके',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 10987 65432',
    email: 'medical.ausa@icds.gov.in',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    area: 'भादा'
  },
  {
    name: 'श्रीमती सुलभा बाबुराव पाटील',
    position: 'अंगणवाडी पर्यवेक्षिका',
    phone: '+91 09876 54321',
    email: 'training.ausa@icds.gov.in',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    area: 'हासेगांव'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const cardVariants = {
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Contact() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* Main Officers Section */}
      <Box textAlign="center" sx={{ mb: 9 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #64b5f6, #1976d2)'
                : 'linear-gradient(45deg, #0288d1, #01579b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              letterSpacing: 1
            }}
          >
            <WorkIcon sx={{ fontSize: 40 }} />
            Key Officers
          </Typography>
        </motion.div>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}
        >
          Meet our leadership team driving child development and women empowerment initiatives
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
        {mainOfficers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 4,
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff'
              }}>
                <Box sx={{ 
                  pt: 3,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <motion.div variants={imageVariants} whileHover="hover">
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={member.name}
                      sx={{ 
                        height: 200,
                        width: 200,
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: `3px solid ${theme.palette.primary.light}`,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    />
                  </motion.div>
                </Box>
                <CardContent sx={{ 
                  flexGrow: 1,
                  px: 3,
                  py: 4,
                  textAlign: 'center'
                }}>
                  <Typography 
                    variant="h6" 
                    color="text.primary" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {member.position}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: theme.palette.text.secondary
                  }}>
                    <PhoneIcon fontSize="small" sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="body2">
                      {member.phone}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: theme.palette.text.secondary
                  }}>
                    <EmailIcon fontSize="small" sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="body2">
                      {member.email}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2, opacity: 0.5 }} />
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    gap: 2
                  }}>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                      <IconButton 
                        color="primary" 
                        size="medium"
                        sx={{ 
                          backgroundColor: theme.palette.primary.light + '33',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                      <IconButton 
                        color="primary" 
                        size="medium"
                        sx={{ 
                          backgroundColor: theme.palette.primary.light + '33',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Sub Officers Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #81c784, #388e3c)'
                : 'linear-gradient(45deg, #43a047, #1b5e20)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              letterSpacing: 1
            }}
          >
            <GroupsIcon sx={{ fontSize: 40 }} />
            Field Officers & Staff
          </Typography>
        </motion.div>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}
        >
          Our committed team executing ICDS programs across various regions
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {subOfficers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Fade in={true} timeout={1000 + index * 200}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff'
                }}>
                  <Box sx={{ 
                    pt: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <motion.div variants={imageVariants} whileHover="hover">
                      <CardMedia
                        component="img"
                        image={member.image}
                        alt={member.name}
                        sx={{ 
                          height: 180,
                          width: 180,
                          objectFit: 'cover',
                          borderRadius: '50%',
                          border: `3px solid ${theme.palette.secondary.light}`,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}
                      />
                    </motion.div>
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1,
                    px: 3,
                    py: 4,
                    textAlign: 'center'
                  }}>
                    <Typography 
                      variant="h6" 
                      color="text.primary" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {member.position}
                    </Typography>
                    <Chip 
                      label={member.area} 
                      size="small" 
                      color="secondary" 
                      sx={{ 
                        mb: 2,
                        fontWeight: 500,
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, #f06292, #ec407a)'
                          : 'linear-gradient(45deg, #ec407a, #d81b60)',
                        color: 'white'
                      }}
                    />
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: theme.palette.text.secondary
                    }}>
                      <PhoneIcon fontSize="small" sx={{ mr: 1, color: theme.palette.secondary.main }} />
                      <Typography variant="body2">
                        {member.phone}
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: theme.palette.text.secondary
                    }}>
                      <EmailIcon fontSize="small" sx={{ mr: 1, color: theme.palette.secondary.main }} />
                      <Typography variant="body2">
                        {member.email}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}