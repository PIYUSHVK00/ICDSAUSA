import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  Button, 
  IconButton, 
  CircularProgress,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import EventIcon from '@mui/icons-material/Event';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set PDF worker path (using CDN for maximum compatibility)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Jahirata = () => {
  const navigate = useNavigate();
  const [selectedPdf, setSelectedPdf] = React.useState(null);
  const [numPages, setNumPages] = React.useState(null);
  const [pdfLoading, setPdfLoading] = React.useState(false);
  const [pdfError, setPdfError] = React.useState(null);

  const notices = [
    {
      id: 1,
      title: 'आंगणवाडी सेविका भरती जाहीरनामा',
      date: '१५ जुलै २०२३',
      description: 'औसा तालुक्यातील ५ सेविका २८ मदतनीस आंगणवाडी सेविका पदांसाठी भरती जाहीरनामा',
      pdfLink: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386345/jahirat_ahoy0l.pdf'
    },
    // Add more notices as needed
  ];

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfLoading(false);
    setPdfError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setPdfError('PDF लोड करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    setPdfLoading(false);
  };

  const handlePdfOpen = (pdfLink) => {
    setSelectedPdf(pdfLink);
    setPdfLoading(true);
    setPdfError(null);
  };

  const handlePdfClose = () => {
    setSelectedPdf(null);
    setPdfLoading(false);
    setPdfError(null);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            color: 'primary.main',
            mb: 4,
            textAlign: 'center',
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          जाहीरात
        </Typography>

        <Box sx={{ 
          mb: 4,
          backgroundColor: 'rgba(25, 118, 210, 0.05)',
          p: 3,
          borderRadius: 2,
          borderLeft: '4px solid',
          borderColor: 'primary.main'
        }}>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            एकात्मिक बाल विकास सेवा (ICDS) औसा येथील सर्व अलीकडील जाहिराती येथे पहा. 
            सर्व सूचना आणि जाहिराती येथे नियमितपणे अद्ययावत केल्या जातात.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <List>
            {notices.map((notice, index) => (
              <React.Fragment key={notice.id}>
                <ListItem alignItems="flex-start" sx={{ 
                  py: 3,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                    borderRadius: 1
                  }
                }}>
                  <Box sx={{ 
                    mr: 2, 
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <EventIcon fontSize="large" />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ 
                          fontWeight: 600,
                          fontFamily: "'Noto Sans Devanagari', sans-serif",
                          color: 'text.primary'
                        }}>
                          {notice.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                            sx={{ 
                              display: 'block', 
                              mb: 1,
                              fontFamily: "'Noto Sans Devanagari', sans-serif"
                            }}
                          >
                            {notice.description}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontFamily: "'Noto Sans Devanagari', sans-serif"
                            }}
                          >
                            तारीख: {notice.date}
                          </Typography>
                        </>
                      }
                    />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handlePdfOpen(notice.pdfLink)}
                      sx={{
                        textTransform: 'none',
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'primary.dark'
                        }
                      }}
                    >
                      पहा
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      href={notice.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<DownloadIcon />}
                      sx={{
                        textTransform: 'none',
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.04)',
                          borderColor: 'primary.dark'
                        }
                      }}
                    >
                      डाउनलोड
                    </Button>
                  </Box>
                </ListItem>
                {index < notices.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        {/* PDF Viewer Modal */}
        {selectedPdf && (
          <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            overflow: 'auto'
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 1
            }}>
              <IconButton onClick={handlePdfClose} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto'
            }}>
              <Box sx={{ 
                backgroundColor: 'white',
                p: 2,
                borderRadius: 1,
                maxWidth: '90%',
                maxHeight: '90%',
                overflow: 'auto',
                textAlign: 'center'
              }}>
                {pdfLoading && (
                  <Box sx={{ p: 4 }}>
                    <CircularProgress />
                    <Typography sx={{ mt: 2, fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                      PDF लोड होत आहे...
                    </Typography>
                  </Box>
                )}
                
                {pdfError && (
                  <Box sx={{ p: 4 }}>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <Typography sx={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {pdfError}
                      </Typography>
                    </Alert>
                    <Button 
                      variant="contained" 
                      sx={{ mt: 2 }}
                      onClick={() => handlePdfOpen(selectedPdf)}
                    >
                      पुन्हा प्रयत्न करा
                    </Button>
                  </Box>
                )}

                {!pdfLoading && !pdfError && (
                  <Document
                    file={selectedPdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <Box sx={{ p: 4 }}>
                        <CircularProgress />
                        <Typography sx={{ mt: 2, fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                          PDF लोड होत आहे...
                        </Typography>
                      </Box>
                    }
                    error={
                      <Box sx={{ p: 4 }}>
                        <Alert severity="error">
                          <Typography sx={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            PDF लोड करताना त्रुटी आली
                          </Typography>
                        </Alert>
                      </Box>
                    }
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <Page 
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={Math.min(800, window.innerWidth * 0.8)}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    ))}
                  </Document>
                )}
              </Box>
            </Box>
          </Box>
        )}

        <Box sx={{ 
          textAlign: 'center', 
          mt: 4,
          mb: 6,
          backgroundColor: 'rgba(25, 118, 210, 0.05)',
          p: 4,
          borderRadius: 2
        }}>
          <Typography variant="body1" sx={{ 
            mb: 3,
            fontSize: '1.1rem',
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            जाहिरातींसंबंधी अधिक माहितीसाठी आमच्या कार्यालयाशी संपर्क साधा
          </Typography>
          <Button 
            variant="contained"
            color="primary"
            size="large"
            onClick={handleContactClick}
            sx={{
              px: 4,
              py: 1.5,
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: 2,
              boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            संपर्क करा
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Jahirata;