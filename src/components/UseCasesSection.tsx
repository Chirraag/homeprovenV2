import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PeopleIcon from "@mui/icons-material/People";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { UseCase } from "../types";

const useCases: UseCase[] = [
  {
    title: "24/7 Lead Qualification & Appointment Setting",
    icon: "phone_in_talk",
    problem:
      "Wasting time on unqualified leads and missing after-hours opportunities",
    features: [
      "Instantly respond to new leads and calls 24/7/365",
      "Ask your specific qualifying questions (property ownership, budget, timeline)",
      "Book appointments directly into your calendar with smart scheduling",
      "Send automated reminders to reduce no-shows by 40%",
    ],
    idealFor:
      "Roofing, solar, window, HVAC, and remodeling contractors running ads or attending home shows",
  },
  {
    title: "Inbound Call Handling & Missed Call Recovery",
    icon: "event_available",
    problem:
      "Missed calls = missed jobs. Many contractors lose thousands monthly from unanswered inquiries",
    features: [
      "Professional voice agents answer calls in your company's voice and tone",
      "Provide instant estimates based on your pricing guidelines",
      "Text-based recovery reaches missed calls within seconds",
      "Create detailed call summaries and next-step recommendations",
    ],
    idealFor:
      "Busy contractors who receive most inquiries during job-site hours",
  },
  {
    title: "AI Sales Follow-Up & Nurture Campaigns",
    icon: "autorenew",
    problem:
      "Human reps drop the ball on follow-ups. Leads go cold due to inconsistent outreach",
    features: [
      "Automated but human-sounding follow-up texts and calls at optimal times",
      "Intelligent responses to questions, objections, and rescheduling requests",
      "Keep pipeline warm without needing a full-time inside sales team",
      "Real-time alerts when a lead shows high conversion potential",
    ],
    idealFor:
      "Big-ticket contractors with longer sales cycles (remodeling, ADUs, solar installations)",
  },
  {
    title: "Customer Service Support",
    icon: "people",
    problem: "Too many routine calls tying up your team during peak hours",
    features: [
      "Handle status updates, basic questions, and scheduling changes automatically",
      "Provide AI-generated summaries and recordings of every interaction",
      "Reduce inbound call volume by up to 60% through smart automation",
      "Seamlessly escalate complex issues to your team with full context",
    ],
    idealFor:
      "General contractors, kitchen & bath remodelers, and companies juggling multiple job sites",
  },
  {
    title: "After-Hours & Weekend Coverage",
    icon: "nights_stay",
    problem:
      "Missed opportunities outside office hours hurting your bottom line",
    features: [
      "Seamlessly take over when your office closes with perfect transition",
      "Handle emergencies according to your custom protocols",
      "Schedule non-urgent matters for next business day follow-up",
      "Give your team well-deserved breaks without sacrificing business",
    ],
    idealFor:
      "All contractors who value work-life balance but can't afford to miss opportunities",
  },
];

const accentColors = ["#c96342", "#5f007d", "#ff5900", "#f9a901", "#ca061b"];

const iconComponents: Record<string, React.ReactNode> = {
  phone_in_talk: <PhoneInTalkIcon sx={{ fontSize: 32 }} />,
  event_available: <EventAvailableIcon sx={{ fontSize: 32 }} />,
  autorenew: <AutorenewIcon sx={{ fontSize: 32 }} />,
  people: <PeopleIcon sx={{ fontSize: 32 }} />,
  nights_stay: <NightsStayIcon sx={{ fontSize: 32 }} />,
};

const UseCasesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const controls = useAnimation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovering && !isTouching) {
      interval = setInterval(() => {
        handleScroll("right");
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isHovering, isTouching, activeIndex]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const newIndex =
        direction === "left"
          ? (activeIndex - 1 + useCases.length) % useCases.length
          : (activeIndex + 1) % useCases.length;

      setActiveIndex(newIndex);

      scrollContainerRef.current.scrollTo({
        left: newIndex * scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index: number) => {
    if (scrollContainerRef.current) {
      setActiveIndex(index);
      scrollContainerRef.current.scrollTo({
        left: index * scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    // Threshold for swipe detection
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        handleScroll("right");
      } else {
        // Swipe right
        handleScroll("left");
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      component="section"
      id="solutions"
      sx={{
        backgroundColor: "#f0eee6",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.03) 1px, transparent 0)",
          backgroundSize: { xs: "20px 20px", sm: "30px 30px", md: "40px 40px" },
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                <span style={{ color: "#c96342" }}>Proven</span> Solutions for{" "}
                <span style={{ color: "#c96342" }}>Every</span> Contractor
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "800px",
                  mx: "auto",
                  color: (theme) => theme.palette.text.secondary,
                  lineHeight: 1.6,
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  px: { xs: 2, md: 0 },
                }}
              >
                Our{" "}
                <span style={{ color: "#c96342", fontWeight: 600 }}>
                  AI voice agents
                </span>{" "}
                adapt to your specific business needs, handling everything from
                <span style={{ color: "#c96342", fontWeight: 600 }}>
                  {" "}
                  initial lead capture
                </span>{" "}
                to
                <span style={{ color: "#c96342", fontWeight: 600 }}>
                  {" "}
                  customer service support
                </span>
              </Typography>
            </motion.div>
          </Box>

          {/* Carousel navigation - fully responsive design */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: { xs: 3, md: 4 },
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            <IconButton
              onClick={() => handleScroll("left")}
              aria-label="Previous use case"
              sx={{
                width: { xs: 32, sm: 40, md: 50, lg: 60 },
                height: { xs: 32, sm: 40, md: 50, lg: 60 },
                backgroundColor: "white",
                boxShadow: "0 8px 16px rgba(201, 99, 66, 0.15)",
                "&:hover": {
                  backgroundColor: "white",
                  transform: "scale(1.1)",
                  boxShadow: "0 12px 24px rgba(201, 99, 66, 0.2)",
                },
                transition: "all 0.3s ease",
                minWidth: { xs: 32, sm: 40 }, // Ensure minimum size for touch
                minHeight: { xs: 32, sm: 40 }, // Ensure minimum size for touch
                padding: { xs: 0.5, sm: 1 }, // Adjust padding for different sizes
              }}
            >
              <ArrowBackIcon
                sx={{
                  color: "#c96342",
                  fontSize: { xs: 16, sm: 20, md: 24, lg: 28 },
                }}
              />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 0.75, sm: 1, md: 1.5 },
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {useCases.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    width: { xs: 8, sm: 10, md: 12, lg: 14 },
                    height: { xs: 8, sm: 10, md: 12, lg: 14 },
                    borderRadius: "50%",
                    backgroundColor:
                      index === activeIndex
                        ? accentColors[index % accentColors.length]
                        : "#e0e0e0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform:
                      index === activeIndex ? "scale(1.3)" : "scale(1)",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                    // Improve touch target size while maintaining visual size
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: -8,
                      left: -8,
                      right: -8,
                      bottom: -8,
                      zIndex: -1,
                    },
                  }}
                  role="button"
                  aria-label={`View use case ${index + 1}`}
                  tabIndex={0}
                />
              ))}
            </Box>

            <IconButton
              onClick={() => handleScroll("right")}
              aria-label="Next use case"
              sx={{
                width: { xs: 32, sm: 40, md: 50, lg: 60 },
                height: { xs: 32, sm: 40, md: 50, lg: 60 },
                backgroundColor: "white",
                boxShadow: "0 8px 16px rgba(201, 99, 66, 0.15)",
                "&:hover": {
                  backgroundColor: "white",
                  transform: "scale(1.1)",
                  boxShadow: "0 12px 24px rgba(201, 99, 66, 0.2)",
                },
                transition: "all 0.3s ease",
                minWidth: { xs: 32, sm: 40 }, // Ensure minimum size for touch
                minHeight: { xs: 32, sm: 40 }, // Ensure minimum size for touch
                padding: { xs: 0.5, sm: 1 }, // Adjust padding for different sizes
              }}
            >
              <ArrowForwardIcon
                sx={{
                  color: "#c96342",
                  fontSize: { xs: 16, sm: 20, md: 24, lg: 28 },
                }}
              />
            </IconButton>
          </Box>

          {/* Horizontal scrollable container with touch support */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              overflowX: "hidden",
              scrollSnapType: "x mandatory",
              pb: { xs: 4, sm: 5, md: 6 },
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              touchAction: "pan-x",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {useCases.map((useCase, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "start",
                  px: { xs: 1, sm: 2 },
                }}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, sm: 3, md: 4 },
                      backgroundColor: "white",
                      borderRadius: { xs: "16px", sm: "20px", md: "24px" },
                      border: "1px solid",
                      borderColor: `${accentColors[index % accentColors.length]}20`,
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      maxWidth: "1000px",
                      mx: "auto",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                      "&:hover": {
                        boxShadow: `0 20px 40px rgba(${index === 0 ? "201, 99, 66" : index === 1 ? "95, 0, 125" : index === 2 ? "255, 89, 0" : index === 3 ? "249, 169, 1" : "202, 6, 27"}, 0.15)`,
                        borderColor: accentColors[index % accentColors.length],
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 3, md: 4 },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: { xs: "center", md: "flex-start" },
                          textAlign: { xs: "center", md: "left" },
                          width: { xs: "100%", md: "30%" },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: { xs: 64, sm: 72, md: 80 },
                            height: { xs: 64, sm: 72, md: 80 },
                            borderRadius: { xs: "16px", md: "20px" },
                            background: `linear-gradient(135deg, ${accentColors[index % accentColors.length]}15, ${accentColors[index % accentColors.length]}30)`,
                            mb: 3,
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: `0 10px 20px ${accentColors[index % accentColors.length]}20`,
                          }}
                        >
                          <Box
                            sx={{
                              color: accentColors[index % accentColors.length],
                              position: "relative",
                              zIndex: 2,
                              fontSize: { xs: 24, sm: 28, md: 32 },
                            }}
                          >
                            {React.cloneElement(
                              iconComponents[
                                useCase.icon
                              ] as React.ReactElement,
                              {
                                sx: { fontSize: "inherit" },
                              },
                            )}
                          </Box>
                          <Box
                            sx={{
                              position: "absolute",
                              width: "150%",
                              height: "150%",
                              background: `linear-gradient(45deg, transparent, ${accentColors[index % accentColors.length]}10)`,
                              top: "-25%",
                              left: "-25%",
                              transform: "rotate(45deg)",
                              zIndex: 1,
                            }}
                          />
                        </Box>

                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: "bold",
                            mb: 2,
                            color: accentColors[index % accentColors.length],
                            fontSize: {
                              xs: "1.25rem",
                              sm: "1.5rem",
                              md: "1.75rem",
                            },
                          }}
                        >
                          {useCase.title}
                        </Typography>

                        <Box
                          sx={{
                            p: 2,
                            backgroundColor: `${accentColors[index % accentColors.length]}08`,
                            borderRadius: "12px",
                            border: `1px solid ${accentColors[index % accentColors.length]}15`,
                            mb: { xs: 3, md: 0 },
                            width: "100%",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: 500,
                              fontSize: {
                                xs: "0.85rem",
                                sm: "0.9rem",
                                md: "1rem",
                              },
                            }}
                          >
                            <strong
                              style={{
                                color:
                                  accentColors[index % accentColors.length],
                              }}
                            >
                              Problem:
                            </strong>{" "}
                            {useCase.problem}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          width: { xs: "100%", md: "70%" },
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            mb: 2,
                            color: theme.palette.text.primary,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: { xs: 20, sm: 24 },
                              height: { xs: 20, sm: 24 },
                              borderRadius: "50%",
                              backgroundColor: `${accentColors[index % accentColors.length]}15`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                width: { xs: 10, sm: 12 },
                                height: { xs: 10, sm: 12 },
                                borderRadius: "50%",
                                backgroundColor:
                                  accentColors[index % accentColors.length],
                              }}
                            />
                          </Box>
                          How it{" "}
                          <span
                            style={{
                              color: accentColors[index % accentColors.length],
                            }}
                          >
                            works
                          </span>
                          :
                        </Typography>

                        <Box
                          component="ul"
                          sx={{
                            pl: 0,
                            mb: 4,
                            display: "grid",
                            gridTemplateColumns: {
                              xs: "1fr",
                              sm: "repeat(2, 1fr)",
                            },
                            gap: { xs: 2, sm: 3 },
                            listStyle: "none",
                          }}
                        >
                          {useCase.features.map((feature, i) => (
                            <Box
                              component="li"
                              key={i}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 2,
                                backgroundColor: "white",
                                p: { xs: 1.5, sm: 2 },
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                                border: "1px solid",
                                borderColor: `${accentColors[index % accentColors.length]}10`,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  transform: "translateY(-4px)",
                                  boxShadow: `0 8px 20px ${accentColors[index % accentColors.length]}15`,
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: { xs: 20, sm: 24 },
                                  height: { xs: 20, sm: 24 },
                                  borderRadius: "50%",
                                  backgroundColor: `${accentColors[index % accentColors.length]}15`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  mt: 0.5,
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    width: { xs: 6, sm: 8 },
                                    height: { xs: 6, sm: 8 },
                                    borderRadius: "50%",
                                    backgroundColor:
                                      accentColors[index % accentColors.length],
                                  }}
                                />
                              </Box>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.85rem",
                                    md: "0.9rem",
                                  },
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Box
                          sx={{
                            mt: "auto",
                            pt: 3,
                            borderTop: "1px solid",
                            borderColor: "rgba(0, 0, 0, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              fontSize: {
                                xs: "0.85rem",
                                sm: "0.9rem",
                                md: "1rem",
                              },
                              mb: { xs: 1, md: 0 },
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor:
                                  accentColors[index % accentColors.length],
                                flexShrink: 0,
                              }}
                            />
                            <strong>Ideal for:</strong>{" "}
                            <span
                              style={{
                                color:
                                  accentColors[index % accentColors.length],
                                fontWeight: 500,
                              }}
                            >
                              {useCase.idealFor}
                            </span>
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
