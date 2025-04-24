import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import { motion } from "framer-motion";

const features = [
  {
    text: "Voice agents that sound indistinguishable from humans",
    subtext: "While always identifying as AI for transparency",
    icon: <VolumeUpIcon sx={{ fontSize: 20 }} />,
  },
  {
    text: "Respond within seconds, 24/7/365",
    subtext: "Never miss another opportunity, day or night",
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
  },
  {
    text: "Qualify leads and schedule appointments automatically",
    subtext: "Direct integration with your existing calendar system",
    icon: <CheckCircleIcon sx={{ fontSize: 20 }} />,
  },
  {
    text: "Handle unlimited simultaneous calls",
    subtext: "Scale instantly during peak periods without extra costs",
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
  },
  {
    text: "Save up to 70% compared to traditional services",
    subtext: "Pay only for the minutes you use, no monthly minimums",
    icon: <CheckCircleIcon sx={{ fontSize: 20 }} />,
  },
  {
    text: "Full compliance and security built-in",
    subtext: "TCPA compliant with automatic disclosures",
    icon: <SecurityIcon sx={{ fontSize: 20 }} />,
  },
];

const SolutionSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const avatarColors = ["c96342", "5f007d", "ff5900"];

  return (
    <Box
      component="section"
      id="features"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle dot pattern */}
      <Box
        className="bg-pattern-dots"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: { xs: 3, md: 4 },
                  position: "relative",
                }}
              >
                {avatarColors.map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: 60, sm: 70, md: 80 },
                      height: { xs: 60, sm: 70, md: 80 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "4px solid white",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                      ml: index > 0 ? -3 : 0,
                      zIndex: 3 - index,
                      backgroundColor: `#${color}`,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.05)",
                        zIndex: 10,
                      },
                    }}
                  >
                    <img
                      src={`https://api.dicebear.com/9.x/bottts/svg?backgroundColor=c0aede&seed=agent${index}&face=round01&mouth=diagram,smile02`}
                      alt={`AI Agent ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: { xs: 2, md: 3 },
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                }}
              >
                Meet Your New AI Team Members
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  maxWidth: "800px",
                  mx: "auto",
                  mb: 4,
                  p: { xs: 2, sm: 3 },
                  backgroundColor: (theme) =>
                    theme.palette.background.secondary,
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: (theme) => `${theme.palette.primary.main}20`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <VerifiedIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: { xs: 18, md: 20 },
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: (theme) => theme.palette.primary.main,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Transparency First
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: (theme) => theme.palette.text.secondary,
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    textAlign: "center",
                  }}
                >
                  Our AI agents sound so human, customers often forget they're
                  not talking to a real person. That's why we always identify
                  ourselves as digital assistants upfront for full transparency
                  and compliance.
                </Typography>
              </Box>
            </motion.div>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={containerVariants}>
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}05`,
                          transform: "translateX(8px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: { xs: 32, md: 36 },
                          height: { xs: 32, md: 36 },
                          borderRadius: "50%",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: (theme) => theme.palette.primary.main,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            fontSize: {
                              xs: "0.9rem",
                              sm: "0.95rem",
                              md: "1rem",
                            },
                          }}
                        >
                          {feature.text}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: (theme) => theme.palette.text.secondary,
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.85rem",
                              md: "0.9rem",
                            },
                          }}
                        >
                          {feature.subtext}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={4}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: "24px",
                    backgroundColor: (theme) => theme.palette.background.paper,
                    textAlign: "center",
                    overflow: "hidden",
                    position: "relative",
                    border: "1px solid",
                    borderColor: (theme) => `${theme.palette.primary.main}10`,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage:
                        "radial-gradient(circle at center, rgba(201, 99, 66, 0.05) 0%, transparent 70%)",
                      zIndex: 0,
                    }}
                  />

                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        borderRadius: "50%",
                        p: { xs: 1.5, sm: 2, md: 2.5 },
                        mb: 3,
                        boxShadow: (theme) =>
                          `0 8px 24px ${theme.palette.primary.main}30`,
                      }}
                    >
                      <VolumeUpIcon
                        sx={{
                          fontSize: { xs: 28, sm: 32, md: 36 },
                          color: "white",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: {
                          xs: "1.25rem",
                          sm: "1.5rem",
                          md: "1.75rem",
                        },
                      }}
                    >
                      Experience the Difference
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                        px: { xs: 1, sm: 0 },
                      }}
                    >
                      Listen to real conversations between HomeProven AI agents
                      and potential customers. Notice how our agents handle
                      objections, answer questions, and schedule appointments
                      seamlessly.
                    </Typography>

                    <Button
                      component={RouterLink}
                      to="/start-today"
                      variant="contained"
                      color="primary"
                      startIcon={<VolumeUpIcon />}
                      size={isMobile ? "medium" : "large"}
                      className="btn-hover-lift"
                      sx={{
                        px: { xs: 3, sm: 3.5, md: 4 },
                        py: { xs: 1, sm: 1.25, md: 1.5 },
                        mb: 3,
                        fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                      }}
                    >
                      Listen to Live Demo
                    </Button>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Chip
                        label="100% Real Conversation"
                        size={isMobile ? "small" : "small"}
                        sx={{
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}10`,
                          color: (theme) => theme.palette.primary.main,
                          fontWeight: 600,
                          fontSize: {
                            xs: "0.65rem",
                            sm: "0.7rem",
                            md: "0.75rem",
                          },
                        }}
                      />
                      <Chip
                        label="Unedited Audio"
                        size={isMobile ? "small" : "small"}
                        sx={{
                          backgroundColor: (theme) =>
                            `${theme.palette.info.main}10`,
                          color: (theme) => theme.palette.info.main,
                          fontWeight: 600,
                          fontSize: {
                            xs: "0.65rem",
                            sm: "0.7rem",
                            md: "0.75rem",
                          },
                        }}
                      />
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

export default SolutionSection;
