import React, { useContext, useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Box, 
  Paper,
  useMediaQuery,
  useTheme,
  Avatar,
  IconButton
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { 
  ChildCare,
  Restaurant,
  LocalHospital,
  School,
  Groups,
  VolunteerActivism,
  NavigateBefore,
  NavigateNext
} from '@mui/icons-material';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const Home = () => {
  const { language } = useContext(LanguageContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) {
        controls.start("visible");
      }
    }
  });

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f6f5512-533d-42e1-8e99-4c7c04e1af8c.png',
      title: language === 'marathi' ? 'एकात्मिक बाल विकास सेवा' : 'Integrated Child Development Services',
      subtitle: language === 'marathi' ? 'बालकांच्या संपूर्ण विकासासाठी' : 'For holistic child development'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e897b56a-bd0c-43cc-840d-e68cf6a671fa.png',
      title: language === 'marathi' ? 'पोषण आहार कार्यक्रम' : 'Nutrition Program',
      subtitle: language === 'marathi' ? 'आरोग्यदायी आहार सेवा' : 'Healthy nutrition services'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67dae13d-146f-413e-8c7f-92969bb2301f.png',
      title: language === 'marathi' ? 'शिक्षण कार्यक्रम' : 'Education Program',
      subtitle: language === 'marathi' ? 'पूर्व प्राथमिक शिक्षण' : 'Pre-primary education'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79d514e8-e7a2-489a-aee8-bbf811fe3add.png',
      title: language === 'marathi' ? 'आरोग्य सेवा' : 'Health Services',
      subtitle: language === 'marathi' ? 'लसीकरण आणि आरोग्य तपासणी' : 'Immunization and health checkups'
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const content = {
    marathi: {
      title: 'एकात्मिक बाल विकास सेवा',
      subtitle: 'पोषण, आरोग्य आणि शिक्षणाद्वारे औसा भागातील मुलांना सक्षम करणे',
      aboutBtn: 'अधिक जाणून घ्या',
      contactBtn: 'आमच्याशी संपर्क साधा',
      stats: [
        { number: '१९८', label: 'आंगणवाडी केंद्रे' },
        { number: '	१०,०००+', label: 'मुलांना सेवा' },
        { number: '१६००+', label: 'महिला लाभार्थी' },
        { number: '३०+', label: 'वर्षे सेवा' }
      ],
      aboutTitle: 'आयसीडीएस कार्यक्रमाबद्दल',
      aboutText1: 'एकात्मिक बाल विकास सेवा (ICDS) ही भारत सरकारची प्रमुख योजना आहे जी ६ वर्षांखालील मुलांना आणि त्यांच्या आईंना अन्न, पूर्व-प्राथमिक शिक्षण आणि प्राथमिक आरोग्य सेवा पुरवते.',
      aboutText2: 'औसा येथे, आयसीडीएस कार्यक्रमाने समुदायासोबत निष्ठेने काम केले आहे, मुलांच्या सर्वांगीण विकासासाठी आणि महिलांना सक्षम करण्यासाठी विविध उपक्रम आणि हस्तक्षेप सुनिश्चित केले आहेत.',
      dignitariesTitle: 'आमचे मान्यवर',
      dignitaries: [
        {
          name: 'मा. मंत्री, कु. आदिती वरदा सुनील तटकरे',
          designation: 'महिला व बाल विकास विभाग, महाराष्ट्र',
          photo: '/images/aditi_0.jpeg'
        },
        {
          name: 'मा. राज्यमंत्री, श्रीमती मेघना दीपक साकोरे बोर्डीकर',
          designation: 'महिला व बाल विकास विभाग, महाराष्ट्र',
          photo: '/images/state_0.jpeg'
        },
        {
          name: 'डॉ. अनुप कुमार यादव (भा.प्र.से.)',
          designation: 'मा. सचिव, महिला व बाल विकास विभाग, महाराष्ट्र राज्य',
          photo: '/images/SEC.jpg'
        },
        {
          name: 'श्री कैलास पगारे (भा.प्र.से.)',
          designation: 'आयुक्त, एकात्मिक बाल विकास सेवा, महाराष्ट्र राज्य',
          photo: '/images/commissioner_img.jpeg'
        }
      ],
      servicesTitle: 'आमच्या सेवा',
      services: [
        {
          icon: <ChildCare fontSize="large" />,
          title: 'बाल संगोपन',
          description: '६ वर्षांखालील मुलांसाठी संपूर्ण काळजी'
        },
        {
          icon: <Restaurant fontSize="large" />,
          title: 'पोषण',
          description: 'मुलांसाठी आणि आईंसाठी पूरक आहार'
        },
        {
          icon: <LocalHospital fontSize="large" />,
          title: 'आरोग्य सेवा',
          description: 'लसीकरण आणि आरोग्य तपासणी'
        },
        {
          icon: <School fontSize="large" />,
          title: 'पूर्व-प्राथमिक शिक्षण',
          description: 'मुलांच्या बौद्धिक विकासासाठी शिक्षण'
        },
        {
          icon: <Groups fontSize="large" />,
          title: 'समुदाय सहभाग',
          description: 'बाल विकासात स्थानिक समुदायाचा सहभाग'
        },
        {
          icon: <VolunteerActivism fontSize="large" />,
          title: 'महिला सक्षमीकरण',
          description: 'शिक्षण आणि आरोग्य सेवांद्वारे मातांना सक्षम करणे'
        }
      ]
    },
    english: {
      title: 'Integrated Child Development Services',
      subtitle: 'Empowering children in Ausa through nutrition, health and education',
      aboutBtn: 'Learn More',
      contactBtn: 'Contact Us',
      stats: [
        { number: '198', label: 'Anganwadi Centers' },
        { number: '10000+', label: 'Children Served' },
        { number: '1600+', label: 'Women Beneficiaries' },
        { number: '30+', label: 'Years of Service' }
      ],
      aboutTitle: 'About ICDS Program',
      aboutText1: 'Integrated Child Development Services (ICDS) is a flagship program of the Government of India that provides food, preschool education, and primary healthcare to children under 6 years of age and their mothers.',
      aboutText2: 'In Ausa, the ICDS program has worked diligently with the community, ensuring various initiatives and interventions for the holistic development of children and empowerment of women.',
      dignitariesTitle: 'Our Dignitaries',
      dignitaries: [
        {
          name: 'Hon. Minister, Ms. Aditi Varda Sunil Tatkare',
          designation: 'Women and Child Development Department, Maharashtra',
          photo: '/images/aditi_0.jpeg'
        },
        {
          name: 'Hon. Minister, Mrs. Meghana Deepak Sakore Bordikar',
          designation: 'Women and Child Development Department, Maharashtra',
          photo: '/images/state_0.jpeg'
        },
        {
          name: 'Dr. Anup Kumar Yadav (IAS)',
          designation: 'Principal Secretary, Women and Child Development Department, Maharashtra',
          photo: '/images/SEC.jpg'
        },
        {
          name: 'Mr. Kailash Pagare (IAS)',
          designation: 'Commissioner, Integrated Child Development Services, Maharashtra',
          photo: '/images/commissioner_img.jpeg'
        }
      ],
      servicesTitle: 'Our Services',
      services: [
        {
          icon: <ChildCare fontSize="large" />,
          title: 'Child Care',
          description: 'Full-time care for children under 6 years'
        },
        {
          icon: <Restaurant fontSize="large" />,
          title: 'Nutrition',
          description: 'Supplementary nutrition for children and mothers'
        },
        {
          icon: <LocalHospital fontSize="large" />,
          title: 'Healthcare',
          description: 'Immunization and health checkups'
        },
        {
          icon: <School fontSize="large" />,
          title: 'Pre-primary Education',
          description: 'Education for children\'s intellectual development'
        },
        {
          icon: <Groups fontSize="large" />,
          title: 'Community Participation',
          description: 'Involving local community in child development'
        },
        {
          icon: <VolunteerActivism fontSize="large" />,
          title: 'Women Empowerment',
          description: 'Empowering mothers through education and healthcare'
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Slider Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '90vh' },
          overflow: 'hidden',
          bgcolor: 'primary.dark',
        }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
            }}
          >
            {/* Background Image */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }}
            />
            {/* Gradient Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.4)',
                zIndex: 0,
              }}
            />
            <Container maxWidth="lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    mb: 2,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: '1.2rem', md: '1.8rem' },
                    textShadow: '0 2px 5px rgba(0,0,0,0.5)',
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      component={Link}
                      to="/about"
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        fontWeight: 600,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                      }}
                    >
                      {currentContent.aboutBtn}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        fontWeight: 600,
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      {currentContent.contactBtn}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Container>
          </Box>
        ))}

        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.5)',
            },
          }}
        >
          <NavigateBefore fontSize="large" />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.5)',
            },
          }}
        >
          <NavigateNext fontSize="large" />
        </IconButton>

        {/* Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            gap: '10px',
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                bgcolor: index === currentSlide ? 'secondary.main' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  bgcolor: index === currentSlide ? 'secondary.main' : 'rgba(255,255,255,0.8)',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {currentContent.stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      color="primary" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: { xs: '2rem', sm: '2.5rem' }
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Dignitaries Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{ 
                mb: 6,
                fontWeight: 700,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  bgcolor: 'primary.main',
                  mx: 'auto',
                  mt: 3,
                  borderRadius: '2px'
                }
              }}
            >
              {currentContent.dignitariesTitle}
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} justifyContent="center">
            {currentContent.dignitaries.map((person, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 4,
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        mb: 3,
                        border: '3px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Box
                        component="img"
                        src={person.photo}
                        alt={person.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        minHeight: '3em',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {person.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{
                        minHeight: '3em',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {person.designation}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{ 
                mb: 8,
                fontWeight: 700,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  bgcolor: 'primary.main',
                  mx: 'auto',
                  mt: 3,
                  borderRadius: '2px'
                }
              }}
            >
              {currentContent.servicesTitle}
            </Typography>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <Grid container spacing={4}>
              {currentContent.services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    style={{ height: '100%' }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: '100%',
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: 4,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Avatar
                          sx={{
                            width: 80,
                            height: 80,
                            bgcolor: 'primary.light',
                            color: 'primary.contrastText',
                            mb: 3,
                            '& svg': { fontSize: '2.5rem' }
                          }}
                        >
                          {service.icon}
                        </Avatar>
                      </motion.div>
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 600,
                          minHeight: '3em',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{
                          minHeight: '4em',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    '&::after': {
                      content: '""',
                      display: 'block',
                      width: '80px',
                      height: '4px',
                      bgcolor: 'primary.main',
                      mt: 2,
                      borderRadius: '2px'
                    }
                  }}
                >
                  {currentContent.aboutTitle}
                </Typography>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      fontSize: '1.1rem',
                      lineHeight: 1.7
                    }}
                  >
                    {currentContent.aboutText1}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      fontSize: '1.1rem',
                      lineHeight: 1.7
                    }}
                  >
                    {currentContent.aboutText2}
                  </Typography>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    component={Link}
                    to="/about"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ 
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      fontWeight: 600
                    }}
                  >
                    {currentContent.aboutBtn}
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 60,
                  damping: 15
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/icds-children.jpg"
                    alt={language === 'marathi' ? 'आयसीडीएस मुले' : 'ICDS Children'}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;