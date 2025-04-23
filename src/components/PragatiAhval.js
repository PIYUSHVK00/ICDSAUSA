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
  Alert,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import EventIcon from '@mui/icons-material/Event';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set PDF worker path
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PragatiAhval = () => {
  const [selectedPdf, setSelectedPdf] = React.useState(null);
  const [numPages, setNumPages] = React.useState(null);
  const [pdfLoading, setPdfLoading] = React.useState(false);
  const [pdfError, setPdfError] = React.useState(null);

  const allReports = [
    { month: 'एप्रिल २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_APRIL_2024_dz2tpi.pdf' },
    { month: 'मे २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_MAY_2024_qwclpt.pdf' },
    { month: 'जून २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_JUNE_2024_mzpb5s.pdf' },
    { month: 'जुलै २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_JULLY_2024_hccbor.pdf' },
    { month: 'ऑगस्ट २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_AUG_2024_ephgkm.pdf' },
    { month: 'सप्टेंबर २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386344/MPR_SEPT_2024_kgshba.pdf' },
    { month: 'ऑक्टोबर २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386344/MPR_OCT_2024_shuo0u.pdf' },
    { month: 'नोव्हेंबर २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386344/MPR_NOV_2024_mgjvki.pdf' },
    { month: 'डिसेंबर २०२४', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_DEC_2024_yo0gaj.pdf' },
    { month: 'जानेवारी २०२५', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_JAN_2025_c4psab.pdf' },
    { month: 'फेब्रुवारी २०२५', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_FEB_2025_a4bwoj.pdf' },
    { month: 'मार्च २०२५', link: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386343/MPR_MARCH_2025_wemeo5.pdf' }
  ];

  // Only 2025 reports for "अलीकडील अहवाल"
  const recentReports = allReports.filter(report => 
    report.month.includes('२०२५')
  );

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
          मासिक प्रगती अहवाल
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
            औसा तालुक्यातील आयसीडीएस योजनेअंतर्गत मासिक प्रगती अहवाल खालीलप्रमाणे आहेत.
          </Typography>
        </Box>

        {/* Recent Reports (2025 only) */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            mb: 3,
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            display: 'flex',
            alignItems: 'center'
          }}>
            <Chip label="२०२५" color="primary" sx={{ mr: 2, fontWeight: 600 }} />
            अलीकडील अहवाल
          </Typography>
          <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
            <List>
              {recentReports.map((report, index) => (
                <React.Fragment key={index}>
                  <ListItem 
                    sx={{ 
                      py: 2,
                      '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' }
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ 
                          fontWeight: 600,
                          fontFamily: "'Noto Sans Devanagari', sans-serif",
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <EventIcon color="action" sx={{ mr: 1 }} />
                          {report.month}
                        </Typography>
                      }
                    />
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handlePdfOpen(report.link)}
                        sx={{
                          textTransform: 'none',
                          fontFamily: "'Noto Sans Devanagari', sans-serif"
                        }}
                      >
                        पहा
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        href={report.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<DownloadIcon />}
                        sx={{
                          textTransform: 'none',
                          fontFamily: "'Noto Sans Devanagari', sans-serif"
                        }}
                      >
                        डाउनलोड
                      </Button>
                    </Box>
                  </ListItem>
                  {index < recentReports.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>

        {/* All Reports */}
        <Paper elevation={3} sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            mb: 3,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            सर्व मासिक अहवाल
          </Typography>
          <List>
            {allReports.map((report, index) => (
              <React.Fragment key={index}>
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
                          {report.month}
                        </Typography>
                      }
                    />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handlePdfOpen(report.link)}
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
                      href={report.link}
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
                {index < allReports.length - 1 && <Divider variant="inset" component="li" />}
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
      </motion.div>
    </Container>
  );
};

export default PragatiAhval;