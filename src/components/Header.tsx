import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Badge,
  Chip,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' }
];

// Make sure we export the Header component as default
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Show the highlight notification after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 280, height: '100%', backgroundColor: theme.palette.background.paper }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box
          component="img"
          src="https://homeproven.com/wp-content/uploads/2023/03/home_proven_logo_trans.png"
          alt="Home Proven Logo"
          sx={{ height: '40px' }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 4 }}>
        {navLinks.map((link) => (
          <ListItem 
            button 
            component="a" 
            href={link.href} 
            key={link.label}
            sx={{ 
              py: 2,
              px: 3,
              '&:hover': { 
                backgroundColor: 'rgba(201, 99, 66, 0.1)' 
              }
            }}
          >
            <ListItemText 
              primary={link.label} 
              sx={{ 
                '& .MuiTypography-root': {
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ px: 3, mt: 2 }}>
          <Button 
            component={RouterLink} 
            to="/start-today"
            variant="contained" 
            color="primary"
            fullWidth
            size="large"
            sx={{ py: 1.5 }}
          >
            Start Today
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  // Status indicator that could appear in the header
  const StatusIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

    </motion.div>
  );

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            py: 1,
            px: { xs: 0, sm: 2 }
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src="https://homeproven.com/wp-content/uploads/2023/03/home_proven_logo_trans.png"
              alt="Home Proven Logo"
              sx={{ 
                height: '40px',
                transition: 'all 0.3s ease'
              }}
            />
            
            {/* Animated notification indicator beside the logo */}
            <AnimatePresence>
              {showHighlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  style={{
                    position: 'absolute',
                    top: -5,
                    right: -10,
                  }}
                >
                  <Badge
                    color="error"
                    overlap="circular"
                    badgeContent={
                      <HomeIcon fontSize="small" sx={{ fontSize: 10 }} />
                    }
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#c96342',
                        padding: '6px',
                        border: '2px solid white',
                      }
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Status pill for mobile */}
              {scrolled && <StatusIndicator />}
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: theme.palette.text.primary,
                  transition: 'color 0.3s ease'
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Status indicator for desktop */}
              {scrolled && <StatusIndicator />}
              
              <Box sx={{ display: 'flex', mr: 4 }}>
                {navLinks.map((link, index) => {
                  // We'll add a special effect to the first nav item
                  const isFirstLink = index === 0;
                  
                  return (
                    <Box
                      component="a"
                      href={link.href}
                      key={link.label}
                      sx={{
                        mx: 2,
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        textDecoration: 'none',
                        position: 'relative',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '0%',
                          height: '2px',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {isFirstLink ? (
                        <Box sx={{ position: 'relative', display: 'inline-block' }}>
                          {link.label}
                          {showHighlight && (
                            <Chip
                              size="small"
                              label="New"
                              sx={{
                                position: 'absolute',
                                top: -14,
                                right: -30,
                                height: '20px',
                                fontSize: '0.65rem',
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                fontWeight: 'bold',
                              }}
                            />
                          )}
                        </Box>
                      ) : (
                        link.label
                      )}
                    </Box>
                  );
                })}
              </Box>
              
              {/* Modified "Start Today" button with floating notification */}
              <Box sx={{ position: 'relative' }}>
                <Button 
                  component={RouterLink} 
                  to="/start-today"
                  variant="contained" 
                  color="primary"
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: '0.95rem',
                    boxShadow: scrolled ? '0 4px 12px rgba(201, 99, 66, 0.2)' : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
                      backgroundSize: '200% 200%',
                      animation: 'shimmer 2s infinite',
                      transformOrigin: '0 0',
                    },
                    '@keyframes shimmer': {
                      '0%': { backgroundPosition: '0% 0%' },
                      '100%': { backgroundPosition: '200% 200%' }
                    }
                  }}
                >
                  Start Today
                </Button>
                
                {/* Floating notification on button */}
                <AnimatePresence>
                  {showHighlight && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ 
                        delay: 0.5,
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -15,
                          right: -10,
                          backgroundColor: 'white',
                          color: theme.palette.text.primary,
                          fontSize: '0.65rem',
                          fontWeight: 'bold',
                          py: 0.3,
                          px: 1,
                          borderRadius: '8px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                          border: '1px solid rgba(201, 99, 66, 0.3)',
                        }}
                      >
                        Limited Time Offer!
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: theme.palette.background.paper,
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

// This is the crucial line that was possibly missing or not implemented correctly
export default Header;