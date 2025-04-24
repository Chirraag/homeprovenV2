import React, { useRef, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";
import RetellAgent from "./RetellAgent";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video state is now managed by the native video controls
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("play", () => setIsPlaying(true));
      videoRef.current.addEventListener("pause", () => setIsPlaying(false));
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("play", () =>
            setIsPlaying(true),
          );
          videoRef.current.removeEventListener("pause", () =>
            setIsPlaying(false),
          );
        }
      };
    }
  }, [videoRef]);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
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
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Audio wave animation for the video (representing voice)
  const audioWaveElements = Array.from({ length: 5 }, (_, i) => ({
    height: 15 + Math.random() * 15,
    delay: i * 0.1,
    duration: 0.7 + Math.random() * 0.3,
  }));

  // Floating elements animation
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    delay: i * 0.2,
    duration: 3 + Math.random() * 2,
    y: 10 + Math.random() * 10,
  }));

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        backgroundColor: theme.palette.background.default,
        pt: { xs: 12, sm: 14, md: 16, lg: 20 },
        pb: { xs: 6, sm: 6, md: 8, lg: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements with parallax effect */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            y: [-el.y, el.y, -el.y],
            x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
          }}
          style={{
            position: "absolute",
            width: isSmallMobile ? "200px" : "300px",
            height: isSmallMobile ? "200px" : "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${i % 2 === 0 ? "rgba(201, 99, 66, 0.1)" : "rgba(95, 0, 125, 0.1)"} 0%, transparent 70%)`,
            left: `${(i * 30) % 100}%`,
            top: `${(i * 20) % 80}%`,
            transform: `translateY(${scrollY * 0.05 * ((i % 3) - 1)}px)`,
            pointerEvents: "none",
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric patterns - dots grid */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(rgba(201, 99, 66, 0.1) 2px, transparent 2px)",
          backgroundSize: { xs: "20px 20px", sm: "30px 30px" },
          pointerEvents: "none",
          opacity: 0.5,
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Box sx={{ position: "relative" }}>
                  <Typography
                    variant="h1"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      mb: 3,
                      position: "relative",
                      fontSize: {
                        xs: "2.5rem",
                        sm: "3rem",
                        md: "3.5rem",
                        lg: "4rem",
                      },
                      lineHeight: { xs: 1.2, md: 1.1 },
                      "& .highlight": {
                        background: "linear-gradient(90deg, #ff5900, #c96342)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                    }}
                  >
                    Never Miss{" "}
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="highlight"
                    >
                      Another Lead
                    </motion.span>
                  </Typography>

                  {/* Floating labels side by side - responsive adjustments */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: -20, sm: -30 },
                      left: { xs: -10, sm: -20 },
                      display: "flex",
                      gap: { xs: 1, sm: 2 },
                      flexWrap: { xs: "wrap", sm: "nowrap" },
                      maxWidth: { xs: "100%", sm: "auto" },
                    }}
                  >
                    {/* AI-Powered label with shine effect */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#c96342",
                          color: "white",
                          px: { xs: 1.5, sm: 2 },
                          py: 0.5,
                          borderRadius: "20px",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          boxShadow: "0 4px 12px rgba(201, 99, 66, 0.2)",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "-50%",
                            left: "-50%",
                            width: "200%",
                            height: "200%",
                            background:
                              "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                            transform: "rotate(30deg)",
                            animation: "shine 3s infinite",
                          },
                          "@keyframes shine": {
                            "0%": {
                              transform: "translateX(-100%) rotate(30deg)",
                            },
                            "100%": {
                              transform: "translateX(100%) rotate(30deg)",
                            },
                          },
                        }}
                      >
                        <RocketLaunchIcon
                          sx={{ fontSize: { xs: 14, sm: 16 } }}
                        />
                        AI-Powered
                      </Box>
                    </motion.div>

                    {/* 500+ Happy Contractors badge - moved from below */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "white",
                          color: theme.palette.text.primary,
                          px: { xs: 1.5, sm: 2 },
                          py: 0.5,
                          borderRadius: "20px",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                          border: "1px solid rgba(201, 99, 66, 0.1)",
                          whiteSpace: "nowrap",
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
                        500+ Happy Contractors
                      </Box>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: 400,
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: "90%",
                    fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                    lineHeight: 1.4,
                  }}
                >
                  AI voice agents that sound human, work 24/7, and cost a
                  fraction of traditional services
                </Typography>
              </motion.div>

              {/* RetellAgent now properly contained within the left column */}
              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.4 }}
                style={{
                  marginTop: "4rem",
                  marginBottom: "2rem",
                  marginRight: isMobile ? "0" : "8rem",
                }}
              >
                <RetellAgent />
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Box
                className="video-container"
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
                  aspectRatio: "9/16",
                  maxWidth: { xs: "300px", sm: "350px", md: "400px" },
                  mx: "auto",
                  backgroundColor: "#000",
                  transform: isMobile ? "none" : "translateY(-20px)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    background:
                      "linear-gradient(45deg, #ff5900, #c96342, #5f007d)",
                    zIndex: -1,
                    borderRadius: "18px",
                    opacity: 0.5,
                    animation: "pulseBorder 2s infinite alternate",
                  },
                  "@keyframes pulseBorder": {
                    "0%": { opacity: 0.3 },
                    "100%": { opacity: 0.7 },
                  },
                }}
              >
                {/* NEW: Top notification banner overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    right: 12,
                    zIndex: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "12px",
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 1, sm: 1.5 },
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.5 },
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 32, sm: 40 },
                      height: { xs: 32, sm: 40 },
                      borderRadius: "50%",
                      backgroundColor: "#c96342",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SupportAgentIcon
                      sx={{
                        color: "white",
                        fontSize: { xs: 18, sm: 22 },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "0.75rem", sm: "0.85rem" },
                        color: theme.palette.text.primary,
                      }}
                    >
                      Voice AI Agent - Active
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.65rem", sm: "0.75rem" },
                        color: theme.palette.text.secondary,
                      }}
                    >
                      Handling customer calls 24/7
                    </Typography>
                  </Box>
                </Box>

                <Box
                  component="video"
                  ref={videoRef}
                  poster="https://homeproven.com/wp-content/uploads/2025/04/video-capture-t0040.02seg-5722.webp"
                  onEnded={handleVideoEnd}
                  controls
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  preload="metadata"
                >
                  <source
                    src="https://homeproven.com/wp-content/uploads/2025/04/Ryan_Voice-AI-Agent-Demo-Video1-2.mp4"
                    type="video/mp4"
                  />
                </Box>

                {/* Removed custom play/pause overlay button in favor of native video controls */}

                {/* Audio wave visualization - moved up to avoid conflict with video controls */}
                {isPlaying && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: { xs: 80, sm: 100, md: 120 },
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      height: 30,
                      zIndex: 5,
                    }}
                  >
                    {audioWaveElements.map((el, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [5, el.height, 5],
                        }}
                        transition={{
                          duration: el.duration,
                          repeat: Infinity,
                          delay: el.delay,
                          ease: "easeInOut",
                        }}
                        style={{
                          width: 4,
                          height: 15,
                          backgroundColor: "white",
                          borderRadius: 2,
                        }}
                      />
                    ))}
                  </Box>
                )}

                {/* Enhanced floating label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                ></motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              mt: { xs: 6, sm: 8, md: 10, lg: 12 },
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                mb: 4,
                px: { xs: 2, sm: 0 },
              }}
            >
              Trusted by over 500+ contractors nationwide to handle their
              customer communications efficiently and professionally
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, md: 4 },
                flexWrap: "wrap",
                px: { xs: 2, sm: 0 },
              }}
            >
              {[
                "24/7 Availability",
                "Human-Like Conversations",
                "Seamless Integration",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1, sm: 1.5 },
                      backgroundColor: "white",
                      borderRadius: "100px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
                      },
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        fontSize: "inherit",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
