import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Button, IconButton, useTheme } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PeopleIcon from '@mui/icons-material/People';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { UseCase } from '../types';

const useCases: UseCase[] = [
  {
    title: "24/7 Lead Qualification & Appointment Setting",
    icon: "phone_in_talk",
    problem: "Wasting time on unqualified leads and missing after-hours opportunities",
    features: [
      "Instantly respond to new leads and calls 24/7/365",
      "Ask your specific qualifying questions (property ownership, budget, timeline)",
      "Book appointments directly into your calendar with smart scheduling",
      "Send automated reminders to reduce no-shows by 40%"
    ],
    idealFor: "Roofing, solar, window, HVAC, and remodeling contractors running ads or attending home shows"
  },
  {
    title: "Inbound Call Handling & Missed Call Recovery",
    icon: "event_available",
    problem: "Missed calls = missed jobs. Many contractors lose thousands monthly from unanswered inquiries",
    features: [
      "Professional voice agents answer calls in your company's voice and tone",
      "Provide instant estimates based on your pricing guidelines",
      "Text-based recovery reaches missed calls within seconds",
      "Create detailed call summaries and next-step recommendations"
    ],
    idealFor: "Busy contractors who receive most inquiries during job-site hours"
  },
  {
    title: "AI Sales Follow-Up & Nurture Campaigns",
    icon: "autorenew",
    problem: "Human reps drop the ball on follow-ups. Leads go cold due to inconsistent outreach",
    features: [
      "Automated but human-sounding follow-up texts and calls at optimal times",
      "Intelligent responses to questions, objections, and rescheduling requests",
      "Keep pipeline warm without needing a full-time inside sales team",
      "Real-time alerts when a lead shows high conversion potential"
    ],
    idealFor: "Big-ticket contractors with longer sales cycles (remodeling, ADUs, solar installations)"
  },
  {
    title: "Customer Service Support",
    icon: "people",
    problem: "Too many routine calls tying up your team during peak hours",
    features: [
      "Handle status updates, basic questions, and scheduling changes automatically",
      "Provide AI-generated summaries and recordings of every interaction",
      "Reduce inbound call volume by up to 60% through smart automation",
      "Seamlessly escalate complex issues to your team with full context"
    ],
    idealFor: "General contractors, kitchen & bath remodelers, and companies juggling multiple job sites"
  },
  {
    title: "After-Hours & Weekend Coverage",
    icon: "nights_stay",
    problem: "Missed opportunities outside office hours hurting your bottom line",
    features: [
      "Seamlessly take over when your office closes with perfect transition",
      "Handle emergencies according to your custom protocols",
      "Schedule non-urgent matters for next business day follow-up",
      "Give your team well-deserved breaks without sacrificing business"
    ],
    idealFor: "All contractors who value work-life balance but can't afford to miss opportunities"
  }
];

const accentColors = ['#c96342', '#5f007d', '#ff5900', '#f9a901', '#ca061b'];

const iconComponents: Record<string, React.ReactNode> = {
  'phone_in_talk': <PhoneInTalkIcon sx={{ fontSize: 32 }} />,
  'event_available': <EventAvailableIcon sx={{ fontSize: 32 }} />,
  'autorenew': <AutorenewIcon sx={{ fontSize: 32 }} />,
  'people': <PeopleIcon sx={{ fontSize: 32 }} />,
  'nights_stay': <NightsStayIcon sx={{ fontSize: 32 }} />
};

const UseCasesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  const theme = useTheme();
  
  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovering) {
      interval = setInterval(() => {
        handleScroll('right');
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isHovering, activeIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const newIndex = direction === 'left' 
        ? (activeIndex - 1 + useCases.length) % useCases.length
        : (activeIndex + 1) % useCases.length;
      
      setActiveIndex(newIndex);
      
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleDotClick = (index: number) => {
    if (scrollContainerRef.current) {
      setActiveIndex(index);
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box
      component="section"
      id="solutions"
      sx={{
        backgroundColor: '#f0eee6',
        py: { xs: 8, md: 12 },
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
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={6}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 3
                }}
              >
                <span style={{ color: '#c96342' }}>Proven</span> Solutions for <span style={{ color: '#c96342' }}>Every</span> Contractor
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  maxWidth: '800px',
                  mx: 'auto',
                  color: theme => theme.palette.text.secondary,
                  lineHeight: 1.6
                }}
              >
                Our <span style={{ color: '#c96342', fontWeight: 600 }}>AI voice agents</span> adapt to your specific business needs, handling everything from 
                <span style={{ color: '#c96342', fontWeight: 600 }}> initial lead capture</span> to 
                <span style={{ color: '#c96342', fontWeight: 600 }}> customer service support</span>
              </Typography>
            </motion.div>
          </Box>

          {/* Carousel navigation */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 4
            }}
          >
            <IconButton 
              onClick={() => handleScroll('left')}
              sx={{
                width: 60,
                height: 60,
                backgroundColor: 'white',
                boxShadow: '0 8px 16px rgba(201, 99, 66, 0.15)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'scale(1.1)',
                  boxShadow: '0 12px 24px rgba(201, 99, 66, 0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowBackIcon sx={{ color: '#c96342', fontSize: 28 }} />
            </IconButton>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              {useCases.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: index === activeIndex ? accentColors[index % accentColors.length] : '#e0e0e0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: index === activeIndex ? 'scale(1.3)' : 'scale(1)',
                    '&:hover': {
                      transform: 'scale(1.2)'
                    }
                  }}
                />
              ))}
            </Box>
            
            <IconButton 
              onClick={() => handleScroll('right')}
              sx={{
                width: 60,
                height: 60,
                backgroundColor: 'white',
                boxShadow: '0 8px 16px rgba(201, 99, 66, 0.15)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'scale(1.1)',
                  boxShadow: '0 12px 24px rgba(201, 99, 66, 0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowForwardIcon sx={{ color: '#c96342', fontSize: 28 }} />
            </IconButton>
          </Box>

          {/* Horizontal scrollable container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'hidden',
              scrollSnapType: 'x mandatory',
              pb: 6,
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {useCases.map((useCase, index) => (
              <Box 
                key={index}
                sx={{
                  flex: '0 0 100%',
                  scrollSnapAlign: 'start',
                  px: 2
                }}
              >
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      backgroundColor: 'white',
                      borderRadius: '24px',
                      border: '1px solid',
                      borderColor: `${accentColors[index % accentColors.length]}20`,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      maxWidth: '1000px',
                      mx: 'auto',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      '&:hover': {
                        boxShadow: `0 20px 40px rgba(${index === 0 ? '201, 99, 66' : index === 1 ? '95, 0, 125' : index === 2 ? '255, 89, 0' : index === 3 ? '249, 169, 1' : '202, 6, 27'}, 0.15)`,
                        borderColor: accentColors[index % accentColors.length]
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        width: { xs: '100%', md: '30%' }
                      }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            background: `linear-gradient(135deg, ${accentColors[index % accentColors.length]}15, ${accentColors[index % accentColors.length]}30)`,
                            mb: 3,
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: `0 10px 20px ${accentColors[index % accentColors.length]}20`
                          }}
                        >
                          <Box sx={{ 
                            color: accentColors[index % accentColors.length],
                            position: 'relative',
                            zIndex: 2
                          }}>
                            {iconComponents[useCase.icon]}
                          </Box>
                          <Box sx={{
                            position: 'absolute',
                            width: '150%',
                            height: '150%',
                            background: `linear-gradient(45deg, transparent, ${accentColors[index % accentColors.length]}10)`,
                            top: '-25%',
                            left: '-25%',
                            transform: 'rotate(45deg)',
                            zIndex: 1
                          }} />
                        </Box>
                        
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            color: accentColors[index % accentColors.length]
                          }}
                        >
                          {useCase.title}
                        </Typography>
                        
                        <Box
                          sx={{
                            p: 2,
                            backgroundColor: `${accentColors[index % accentColors.length]}08`,
                            borderRadius: '12px',
                            border: `1px solid ${accentColors[index % accentColors.length]}15`,
                            mb: { xs: 3, md: 0 },
                            width: '100%'
                          }}
                        >
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            <strong style={{ color: accentColors[index % accentColors.length] }}>Problem:</strong> {useCase.problem}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        width: { xs: '100%', md: '70%' },
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            color: theme.palette.text.primary,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          <Box 
                            component="span" 
                            sx={{ 
                              width: 24, 
                              height: 24, 
                              borderRadius: '50%', 
                              backgroundColor: `${accentColors[index % accentColors.length]}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Box 
                              component="span" 
                              sx={{ 
                                width: 12, 
                                height: 12, 
                                borderRadius: '50%', 
                                backgroundColor: accentColors[index % accentColors.length]
                              }}
                            />
                          </Box>
                          How it <span style={{ color: accentColors[index % accentColors.length] }}>works</span>:
                        </Typography>

                        <Box
                          component="ul"
                          sx={{
                            pl: 0,
                            mb: 4,
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                            gap: 3,
                            listStyle: 'none'
                          }}
                        >
                          {useCase.features.map((feature, i) => (
                            <Box 
                              component="li" 
                              key={i}
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 2,
                                backgroundColor: 'white',
                                p: 2,
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                                border: '1px solid',
                                borderColor: `${accentColors[index % accentColors.length]}10`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  boxShadow: `0 8px 20px ${accentColors[index % accentColors.length]}15`
                                }
                              }}
                            >
                              <Box 
                                sx={{ 
                                  width: 24, 
                                  height: 24, 
                                  borderRadius: '50%', 
                                  backgroundColor: `${accentColors[index % accentColors.length]}15`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  mt: 0.5
                                }}
                              >
                                <Box 
                                  component="span" 
                                  sx={{ 
                                    width: 8, 
                                    height: 8, 
                                    borderRadius: '50%', 
                                    backgroundColor: accentColors[index % accentColors.length]
                                  }}
                                />
                              </Box>
                              <Typography variant="body2">{feature}</Typography>
                            </Box>
                          ))}
                        </Box>

                        <Box
                          sx={{
                            mt: 'auto',
                            pt: 3,
                            borderTop: '1px solid',
                            borderColor: 'rgba(0, 0, 0, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: accentColors[index % accentColors.length],
                                flexShrink: 0
                              }}
                            />
                            <strong>Ideal for:</strong> <span style={{ color: accentColors[index % accentColors.length], fontWeight: 500 }}>{useCase.idealFor}</span>
                          </Typography>
                          
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default UseCasesSection;