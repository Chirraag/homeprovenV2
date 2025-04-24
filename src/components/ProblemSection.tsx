import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { motion, useAnimation } from "framer-motion";

const painPoints = [
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: "After-Hours Calls",
    description: "Over 60% of leads call when your office is closed",
    impact: "Lost Business",
    color: "#ff5900",
  },
  {
    icon: <PhoneMissedIcon sx={{ fontSize: 40 }} />,
    title: "Missed Opportunities",
    description: "Each unanswered call is $1,500-$3,000 in lost revenue",
    impact: "Revenue Loss",
    color: "#ca061b",
  },
  {
    icon: <PhoneCallbackIcon sx={{ fontSize: 40 }} />,
    title: "Slow Response",
    description: "78% of customers go with the first contractor who answers",
    impact: "Lost Leads",
    color: "#5f007d",
  },
  {
    icon: <MoneyOffIcon sx={{ fontSize: 40 }} />,
    title: "High Service Costs",
    description: "Traditional answering services drain your profit margin",
    impact: "Reduced Profit",
    color: "#f9a901",
  },
];

const MoneyAnimation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const moneySigns = Array.from({ length: isMobile ? 8 : 15 }, (_, i) => i);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {moneySigns.map((_, index) => {
        const randomDelay = Math.random() * 20;
        const randomDuration = 15 + Math.random() * 15;
        const randomLeft = Math.random() * 100;
        const randomScale = 0.5 + Math.random() * 1.5;
        const randomOpacity = 0.15 + Math.random() * 0.15;

        return (
          <Box
            key={index}
            component={motion.div}
            sx={{
              position: "absolute",
              top: `-50px`,
              left: `${randomLeft}%`,
              color: "rgba(201, 99, 66, 0.3)",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              opacity: randomOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${randomScale})`,
            }}
            initial={{ top: -50, rotate: Math.random() * 180 - 90 }}
            animate={{
              top: "120%",
              rotate: Math.random() * 360 - 180,
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          >
            <AttachMoneyIcon sx={{ fontSize: { xs: 36, sm: 42, md: 48 } }} />
          </Box>
        );
      })}
    </Box>
  );
};

// Component for the money counter animation
const MoneyCounter = () => {
  const [count, setCount] = useState(0);
  const maxAmount = 3000;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 5;
        return newCount <= maxAmount ? newCount : 0;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(count);

  return (
    <Typography
      variant="h2"
      component="div"
      sx={{
        fontWeight: "bold",
        color: "#c96342",
        textShadow: "0 0 10px rgba(201, 99, 66, 0.2)",
        transition: "all 0.2s ease",
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
      }}
    >
      <Box component="span" sx={{ fontSize: "70%", opacity: 0.8, mr: 1 }}>
        -
      </Box>
      {formattedAmount}
    </Typography>
  );
};

const ProblemSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

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

  const moneyCounterControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document.getElementById("money-counter-section");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementPosition - window.innerHeight / 1.5) {
          moneyCounterControls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [moneyCounterControls]);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f0eee6",
        color: "#000000",
        py: { xs: 6, sm: 7, md: 8, lg: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.03) 1px, transparent 0)",
          backgroundSize: { xs: "24px 24px", sm: "32px 32px" },
          opacity: 0.5,
        }}
      />

      {/* Money signs falling animation */}
      <MoneyAnimation />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={{ xs: 6, sm: 8, md: 10 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  background: "linear-gradient(45deg, #ff5900, #c96342)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "2.8rem",
                    lg: "3.5rem",
                  },
                }}
              >
                The High Cost of Missed Opportunities
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 2 },
                  mt: 4,
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  backgroundColor: "rgba(201, 99, 66, 0.1)",
                  borderRadius: "100px",
                  border: "1px solid rgba(201, 99, 66, 0.2)",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  justifyContent: "center",
                }}
              >
                <TrendingUpIcon
                  sx={{
                    color: "#c96342",
                    fontSize: { xs: 24, sm: 28, md: 32 },
                  }}
                />
                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    color: "#c96342",
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  78%
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333333",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.4,
                    textAlign: { xs: "center", sm: "left" },
                    width: { xs: "100%", sm: "auto" },
                    mt: { xs: 1, sm: 0 },
                  }}
                >
                  of customers choose the first contractor who responds
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  maxWidth: "800px",
                  mx: "auto",
                  mt: { xs: 5, sm: 6, md: 7 },
                  mb: { xs: 3, sm: 4, md: 5 },
                  px: { xs: 2, sm: 0 },
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 500,
                    color: "#333333",
                    lineHeight: 1.6,
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  Even with an amazing team, you're losing business when:
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: { xs: 1, sm: 1.5 },
                    mb: 5,
                  }}
                >
                  {[
                    "Calls come in after hours",
                    "Your team is already on other calls",
                    "Weekend inquiries go to voicemail",
                    "Follow-ups fall through the cracks",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        backgroundColor: "white",
                        px: { xs: 2, sm: 3 },
                        py: { xs: 1, sm: 1.5 },
                        borderRadius: "100px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#c96342",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          color: "#333333",
                          fontSize: "inherit",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#333333",
                    fontWeight: 500,
                    fontStyle: "italic",
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  Every unanswered call costs the average contractor
                  $1,500-$3,000 in potential revenue
                </Typography>
              </Box>
            </motion.div>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {painPoints.map((point, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, sm: 4 },
                      height: "100%",
                      backgroundColor: "white",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      borderRadius: { xs: "12px", sm: "16px" },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                        "& .impact-tag": {
                          backgroundColor: point.color,
                          color: "white",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        backgroundColor: point.color,
                        opacity: 0.7,
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        component={motion.div}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          color: point.color,
                          mb: 3,
                          p: 2,
                          borderRadius: "50%",
                          backgroundColor: `${point.color}15`,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {React.cloneElement(point.icon, {
                          sx: {
                            fontSize: { xs: 28, sm: 32, md: 40 },
                          },
                        })}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontWeight: "bold",
                          color: "#000000",
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 3,
                          color: "#333333",
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        {point.description}
                      </Typography>
                      <Box
                        className="impact-tag"
                        sx={{
                          mt: "auto",
                          px: 2,
                          py: 0.5,
                          borderRadius: "20px",
                          backgroundColor: "rgba(0, 0, 0, 0.06)",
                          color: "#333333",
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.8rem",
                            md: "0.85rem",
                          },
                          fontWeight: 600,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {point.impact}
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            id="money-counter-section"
            initial="hidden"
            animate={moneyCounterControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
            style={{ marginTop: isTablet ? "40px" : "64px" }}
          >
            <Box
              sx={{
                textAlign: "center",
                p: { xs: 3, sm: 4, md: 6 },
                backgroundColor: "white",
                borderRadius: { xs: "16px", sm: "20px", md: "24px" },
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "radial-gradient(circle at center, rgba(201, 99, 66, 0.05) 0%, transparent 70%)",
                  opacity: 0.7,
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#333333",
                  position: "relative",
                  zIndex: 1,
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                Watch Your Money Disappear With Every Missed Call
              </Typography>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <MoneyCounter />
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      color: "#333333",
                      position: "relative",
                      zIndex: 1,
                      fontWeight: 400,
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Lost per unanswered call
                  </Typography>
                </Box>
              </motion.div>

              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1, sm: 2 },
                  justifyContent: "center",
                }}
              >
                {[
                  "5 missed calls = $15,000 lost",
                  "10 missed calls = $30,000 lost",
                  "20 missed calls = $60,000 lost",
                ].map((text, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    sx={{
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1, sm: 1.5 },
                      backgroundColor: "rgba(201, 99, 66, 0.1)",
                      borderRadius: "100px",
                      border: "1px solid rgba(201, 99, 66, 0.2)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "#333333",
                        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.9rem" },
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProblemSection;
