import React from 'react';
import { 
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const schemes = [
  {
    id: 'lekh-ladki',
    title: 'लेख लाडकी योजना',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386599/2_mojwpt.jpg',
    description: 'मुलींच्या शिक्षणासाठी प्रोत्साहन योजना'
  },
  {
    id: 'bal-sangopan-shikshan',
    title: 'पुर्व बाल्यावस्थेतील संगोपन व शिक्षण',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386615/purva_baly_acpkyr.jpg',
    description: 'लहान मुलांच्या सर्वांगीण विकासासाठी'
  },
  {
    id: 'ek-rakmi-labha',
    title: 'एकरक्कमी लाभ योजना',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745406590/favicon_e2ahxl.jpg',
    description: 'एकवेळचे आर्थिक सहाय्य योजना'
  },
  {
    id: 'adarsh-anganwadi',
    title: 'आदर्श अंगणवाडी योजना',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386601/angan1_ts0psd.jpg',
    description: 'अंगणवाडी केंद्रांच्या सुविधांमध्ये सुधारणा'
  },
  {
    id: 'baby-care-kit',
    title: 'बेबी केअर किट',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386604/baby_care_ea50vy.jpg',
    description: 'नवजात बाळांसाठी आवश्यक वस्तूंचे किट'
  },
  {
    id: 'beti-bachao-beti-padhao',
    title: 'बेटी बचाओ बेटी पढाओ योजना',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386607/IMG-20250418-WA0023_xmzw2x.jpg',
    description: 'मुलींचे संरक्षण व शिक्षण प्रोत्साहन'
  },
  {
    id: 'vcdc',
    title: 'ग्राम बाल विकास केंद्र (VCDC)',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745406832/VCDC_d25aop.jpg',
    description: 'ग्रामीण भागातील बाल विकास केंद्रे'
  },
  {
    id: 'poshan-abhiyan',
    title: 'पोषण अभियान',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386615/poshan_abh_uu4d2b.jpg',
    description: 'कुपोषण दूर करण्यासाठी राष्ट्रीय अभियान'
  },
  {
    id: 'purak-poshan-aahar',
    title: 'पुरक पोषण आहार',
    image: 'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745406590/favicon_e2ahxl.jpg',
    description: 'पोषक आहार वितरण कार्यक्रम'
  }
];

export default function Yojana() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          color: '#1a237e',
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Arial Unicode MS'
        }}
      >
        आयसीडीएस योजना
      </Typography>

      <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
        एकात्मिक बाल विकास सेवेअंतर्गत चालविल्या जाणाऱ्या सर्व योजना
      </Typography>

      <Grid container spacing={4}>
        {schemes.map((scheme) => (
          <Grid item xs={12} sm={6} md={4} key={scheme.id}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea onClick={() => navigate(`/yojana/${scheme.id}`)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={scheme.image}
                  alt={scheme.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {scheme.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {scheme.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}