import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <CheckCircleIcon />,
    text: "24/7 AI Voice Agents",
    highlight: "Never miss a lead"
  },
  {
    icon: <CheckCircleIcon />,
    text: "Human-like Conversations", 
    highlight: "Build trust"
  },
  {
    icon: <CheckCircleIcon />,
    text: "Auto Scheduling",
    highlight: "Save time"
  },
  {
    icon: <CheckCircleIcon />,
    text: "Lead Qualification",
    highlight: "Focus on hot leads"
  },
  {
    icon: <CheckCircleIcon />,
    text: "Team Handoff",
    highlight: "Seamless transition"
  },
  {
    icon: <CheckCircleIcon />,
    text: "70%+ Cost Savings",
    highlight: "Maximize ROI"
  }
];

const testimonials = [
  {
    quote: "HomeProven costs 40% less and converts 3× more appointments.",
    name: "Jason Martinez",
    company: "Apex Roofing",
    location: "Dallas, TX",
    avatarSeed: "Leah",
    hairColor: "89CFF0",
    color: "#c96342"
  },
  {
    quote: "Now we capture every lead, even at 2 AM.",
    name: "Sarah Johnson",
    company: "Elite Kitchen & Bath",
    location: "Chicago, IL",
    avatarSeed: "Sadie",
    hairColor: "98FF98",
    color: "#5f007d"
  }
];

const StartTodayPage: React.FC = () => {
  useEffect(() => {
    document.title = "Start Today - HomeProven AI Voice Agents";
    window.scrollTo(0, 0);
  }, []);

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
      sx={{
        minHeight: '100vh',
        backgroundColor: '#faf9f6',
        py: 4,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201, 99, 66, 0.1) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 6
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'block',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <img 
              src="https://homeproven.com/wp-content/uploads/2023/03/home_proven_logo_trans.png" 
              alt="HomeProven Logo"
              style={{ height: '40px' }}
            />
          </Box>
        </Box>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {/* Left Column - Calendar */}
            <Grid item xs={12} md={5}>
              <motion.div 
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    height: '700px',
                    border: '2px solid',
                    borderColor: '#c96342',
                    position: 'relative',
                    boxShadow: '0 15px 40px rgba(201, 99, 66, 0.15)'
                  }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      backgroundColor: '#c96342',
                      color: 'white',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.5
                    }}
                  >
                    <CalendarMonthIcon />
                    <Typography variant="h6" fontWeight={600}>
                      Schedule Your Free Consultation
                    </Typography>
                  </Box>
                  
                  <Box
                    component="iframe"
                    src="https://calendly.com/alex-homeproven/30min"
                    width="100%"
                    height="calc(100% - 60px)"
                    frameBorder="0"
                    sx={{
                      border: 'none',
                      transition: 'opacity 0.3s ease',
                      backgroundColor: 'white',
                    }}
                  />
                  
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(4px)',
                      px: 2,
                      py: 0.75,
                      borderRadius: '100px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <LockIcon sx={{ fontSize: 16, color: '#c96342' }} />
                    <Typography variant="caption" fontWeight={600}>
                      Secure scheduling • SSL encrypted
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Right Column - Content */}
            <Grid item xs={12} md={7}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* Header */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      background: 'linear-gradient(90deg, #ff5900, #c96342)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2
                    }}
                  >
                    Join the AI Revolution
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 400,
                      mb: 4
                    }}
                  >
                    Be at the forefront. Not playing catch-up.
                  </Typography>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div variants={itemVariants}>
                  <Grid container spacing={2}>
                    {benefits.map((benefit, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            border: '1px solid rgba(201, 99, 66, 0.1)',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 24px rgba(201, 99, 66, 0.1)'
                            }
                          }}
                        >
                          <Box 
                            sx={{ 
                              color: '#c96342', 
                              mr: 2,
                              display: 'flex'
                            }}
                          >
                            {React.cloneElement(benefit.icon, { sx: { fontSize: 24 } })}
                          </Box>
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {benefit.text}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: '#c96342',
                                fontWeight: 500
                              }}
                            >
                              {benefit.highlight}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>

                {/* Testimonials */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                    {testimonials.map((testimonial, index) => (
                      <Paper
                        key={index}
                        elevation={0}
                        sx={{
                          p: 3,
                          flex: 1,
                          borderRadius: '16px',
                          backgroundColor: 'white',
                          border: '1px solid rgba(201, 99, 66, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0
                          }}
                        >
                          <img
                            src={`https://api.dicebear.com/9.x/dylan/svg?seed=${testimonial.avatarSeed}&hairColor=${testimonial.hairColor}&mood=superHappy&backgroundColor=0047AB&facialHairProbability=0`}
                            alt={testimonial.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontStyle: 'italic',
                              mb: 1
                            }}
                          >
                            "{testimonial.quote}"
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {testimonial.name}, {testimonial.company}
                          </Typography>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                </motion.div>

                {/* Features */}
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      mt: 2
                    }}
                  >
                    {[
                      { icon: <TimerIcon />, text: 'Quick 30-min call' },
                      { icon: <CalendarMonthIcon />, text: 'Launch in 24 hours' },
                      { icon: <LockIcon />, text: 'No commitment required' }
                    ].map((item, index) => (
                      <Paper
                        key={index}
                        elevation={0}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 1.5,
                          pl: 2,
                          pr: 3,
                          backgroundColor: 'white',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          borderRadius: '100px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <Box 
                          sx={{ 
                            mr: 1.5, 
                            color: '#c96342',
                            display: 'flex'
                          }}
                        >
                          {React.cloneElement(item.icon, { sx: { fontSize: 20 } })}
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                          {item.text}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StartTodayPage;