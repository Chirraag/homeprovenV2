import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const PricingSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        backgroundColor: "#faf9f6",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={{ xs: 5, sm: 6, md: 8 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: { xs: 4, md: 6 },
                  color: (theme) => theme.palette.text.primary,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Only Pay For What You Use
              </Typography>
            </motion.div>
          </Box>

          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* Left box - white background */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: { xs: "16px", md: "24px" },
                    border: "1px solid rgba(201, 99, 66, 0.1)",
                    backgroundColor: "#ffffff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(201, 99, 66, 0.1)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: { xs: 3, md: 4 },
                      color: (theme) => theme.palette.text.primary,
                      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                    }}
                  >
                    No long-term contracts. No hidden fees.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 2, md: 3 },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#c96342",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: (theme) => theme.palette.text.primary,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          }}
                        >
                          Voice AI Agent Usage:
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "1rem",
                            },
                          }}
                        >
                          Flexible pricing plans
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#c96342",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: (theme) => theme.palette.text.primary,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          }}
                        >
                          Appointment Setting:
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "1rem",
                            },
                          }}
                        >
                          Pay only for what you need
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#c96342",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: (theme) => theme.palette.text.primary,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          }}
                        >
                          Volume discounts available for high volume contractors
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    size={isMobile ? "medium" : "large"}
                    href="/start-today"
                    sx={{
                      mt: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                      boxShadow: "0 8px 24px rgba(201, 99, 66, 0.2)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(201, 99, 66, 0.3)",
                      },
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
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: { xs: "16px", md: "24px" },
                    background:
                      "linear-gradient(135deg, #c96342 0%, #ff5900 100%)",
                    color: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(201, 99, 66, 0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: { xs: 3, md: 4 },
                      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                    }}
                  >
                    Every plan includes:
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 2, md: 3 },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "white",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        Custom training for your specific business
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "white",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        Updates to your AI knowledge base
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "white",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        Calendar integration with your existing systems
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "white",
                          fontSize: { xs: 20, md: 24 },
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
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
