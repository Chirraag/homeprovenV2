import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        backgroundColor: '#faf9f6',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={8}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 6,
                  color: theme => theme.palette.text.primary
                }}
              >
                Only Pay For What You Use
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {/* Left box - white background */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    borderRadius: '24px',
                    border: '1px solid rgba(201, 99, 66, 0.1)',
                    backgroundColor: '#ffffff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(201, 99, 66, 0.1)'
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 4,
                      color: theme => theme.palette.text.primary
                    }}
                  >
                    No long-term contracts. No hidden fees.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#c96342', fontSize: 24, mt: 0.5 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme => theme.palette.text.primary }}>
                          Voice AI Agent Usage:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Flexible pricing plans
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#c96342', fontSize: 24, mt: 0.5 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme => theme.palette.text.primary }}>
                          Appointment Setting:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Pay only for what you need
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#c96342', fontSize: 24, mt: 0.5 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme => theme.palette.text.primary }}>
                          Volume discounts available for high volume contractors
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="/start-today"
                    sx={{
                      mt: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      boxShadow: '0 8px 24px rgba(201, 99, 66, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(201, 99, 66, 0.3)'
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
            
            {/* Right box - gradient background */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #c96342 0%, #ff5900 100%)',
                    color: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(201, 99, 66, 0.2)'
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 4
                    }}
                  >
                    Every plan includes:
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: 'white', fontSize: 24, mt: 0.5 }} />
                      <Typography variant="body1">
                        Custom training for your specific business
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: 'white', fontSize: 24, mt: 0.5 }} />
                      <Typography variant="body1">
                        Updates to your AI knowledge base
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: 'white', fontSize: 24, mt: 0.5 }} />
                      <Typography variant="body1">
                        Calendar integration with your existing systems
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: 'white', fontSize: 24, mt: 0.5 }} />
                      <Typography variant="body1">
                        Detailed analytics and call recordings
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;