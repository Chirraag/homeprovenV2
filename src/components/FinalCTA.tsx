import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimerIcon from "@mui/icons-material/Timer";

const FinalCTA: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: { xs: 6, sm: 7, md: 8, lg: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(201, 99, 66, 0.1) 0%, transparent 50%)",
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: "200px", sm: "250px", md: "300px" },
          height: { xs: "200px", sm: "250px", md: "300px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 89, 0, 0.15) 0%, transparent 70%)",
          top: "-150px",
          right: "-100px",
          animation: "pulse-soft 3s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: "150px", sm: "175px", md: "200px" },
          height: { xs: "150px", sm: "175px", md: "200px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(95, 0, 125, 0.15) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-50px",
          animation: "pulse-soft 4s ease-in-out infinite",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                      lg: "3.5rem",
                    },
                    lineHeight: { xs: 1.2, md: 1.1 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Join the AI Revolution or{" "}
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(90deg, #ff5900, #c96342, #f9a901)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
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
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 400,
                    maxWidth: "600px",
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  Be at the forefront. Not playing catch-up.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 1, sm: 1.5, md: 2 },
                    mb: 4,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  {[
                    { icon: <RocketLaunchIcon />, text: "Launch in 24 hours" },
                    {
                      icon: <TrendingUpIcon />,
                      text: "Increase capture by 40%",
                    },
                    { icon: <TimerIcon />, text: "Save 30+ hours weekly" },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: { xs: 1.5, sm: 2 },
                        py: { xs: 0.75, sm: 1 },
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "100px",
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        sx: {
                          color: "#c96342",
                          fontSize: isMobile ? "1rem" : "1.25rem",
                        },
                      })}
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "inherit",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-end" },
                    gap: 3,
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/start-today"
                    variant="contained"
                    color="primary"
                    size={isMobile ? "medium" : "large"}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      py: { xs: 1.5, sm: 1.75, md: 2 },
                      px: { xs: 4, sm: 5, md: 6 },
                      fontWeight: 600,
                      boxShadow: "0 8px 24px rgba(201, 99, 66, 0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(201, 99, 66, 0.4)",
                      },
                    }}
                  >
                    Start Today
                  </Button>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textAlign: { xs: "center", md: "right" },
                      maxWidth: "200px",
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
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
