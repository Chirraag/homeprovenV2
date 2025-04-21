import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimerIcon from '@mui/icons-material/Timer';

const FinalCTA: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201, 99, 66, 0.1) 0%, transparent 50%)',
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 89, 0, 0.15) 0%, transparent 70%)',
          top: '-150px',
          right: '-100px',
          animation: 'pulse-soft 3s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(95, 0, 125, 0.15) 0%, transparent 70%)',
          bottom: '-100px',
          left: '-50px',
          animation: 'pulse-soft 4s ease-in-out infinite',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Join the AI Revolution or{' '}
                  <Box 
                    component="span" 
                    sx={{
                      background: 'linear-gradient(90deg, #ff5900, #c96342, #f9a901)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Get Left Behind
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 400,
                    maxWidth: '600px'
                  }}
                >
                  Be at the forefront. Not playing catch-up.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 4
                  }}
                >
                  {[
                    { icon: <RocketLaunchIcon />, text: 'Launch in 24 hours' },
                    { icon: <TrendingUpIcon />, text: 'Increase capture by 40%' },
                    { icon: <TimerIcon />, text: 'Save 30+ hours weekly' }
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '100px',
                      }}
                    >
                      {React.cloneElement(item.icon, { sx: { color: '#c96342' } })}
                      <Typography variant="body1">{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'flex-end' },
                    gap: 3
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/start-today"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      fontSize: '1.2rem',
                      py: 2,
                      px: 6,
                      fontWeight: 600,
                      boxShadow: '0 8px 24px rgba(201, 99, 66, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(201, 99, 66, 0.4)',
                      }
                    }}
                  >
                    Start Today
                  </Button>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                      textAlign: { xs: 'left', md: 'right' },
                      maxWidth: '200px'
                    }}
                  >
                    No credit card required. Set up takes less than 5 minutes.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FinalCTA;