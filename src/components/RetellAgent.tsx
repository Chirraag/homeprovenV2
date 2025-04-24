import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import PhoneIcon from "@mui/icons-material/Phone";
import CallEndIcon from "@mui/icons-material/CallEnd";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion, AnimatePresence } from "framer-motion";
import { RetellWebClient } from "retell-client-js-sdk";
import Retell from "retell-sdk";

interface RetellAgentProps {
  onCallStart?: () => void;
  onCallEnd?: () => void;
}

const RetellAgent: React.FC<RetellAgentProps> = ({
  onCallStart,
  onCallEnd,
}) => {
  const [isRinging, setIsRinging] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const retellClientRef = useRef<RetellWebClient | null>(null);
  const retellSDKRef = useRef<Retell | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    retellClientRef.current = new RetellWebClient();
    audioRef.current = new Audio("/calling.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (retellClientRef.current) {
        retellClientRef.current.stopCall();
      }
    };
  }, []);

  const startCall = async () => {
    if (isCallActive) {
      endCall();
      return;
    }

    try {
      setIsRinging(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
      onCallStart?.();

      // Replace SDK call with backend API call
      const response = await fetch(
        "https://homeproven-backend.replit.app/api/create-web-call",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        },
      );

      const webCallResponse = await response.json();

      if (!webCallResponse?.data?.access_token) {
        throw new Error("Failed to get access token");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      setIsRinging(false);
      setIsCallActive(true);

      await retellClientRef.current?.startCall({
        accessToken: webCallResponse.data.access_token,
        sampleRate: 24000,
        captureDeviceId: "default",
        playbackDeviceId: "default",
        emitRawAudioSamples: false,
      });
    } catch (error) {
      console.error("Error starting call:", error);
      setIsRinging(false);
      setIsCallActive(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const endCall = () => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall();
    }
    setIsCallActive(false);
    onCallEnd?.();
  };

  // Animated backgrounds for the call button
  const bgPulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 4,
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(201, 99, 66, 0.1)",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100%",
        mx: "auto",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #ff5900, #c96342, #5f007d)",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        },
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          right: -20,
          width: { xs: 80, sm: 100, md: 120 },
          height: { xs: 80, sm: 100, md: 120 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201, 99, 66, 0.1) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          left: -30,
          width: { xs: 100, sm: 120, md: 150 },
          height: { xs: 100, sm: 120, md: 150 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(95, 0, 125, 0.05) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Small dots pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(rgba(201, 99, 66, 0.1) 1px, transparent 1px)",
          backgroundSize: { xs: "15px 15px", sm: "20px 20px" },
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                  "& svg": {
                    color: "#c96342",
                  },
                }}
              >
                <RocketLaunchIcon
                  fontSize={isSmallMobile ? "small" : "small"}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                    color: "#1a1a1a",
                    position: "relative",
                    display: "inline-block",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "40%",
                      height: "2px",
                      backgroundColor: "#c96342",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Talk to Our AI Agent
                </Typography>
              </Box>
            </motion.div>

            {/* Floating element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                position: "absolute",
                right: isSmallMobile ? -40 : -60,
                top: isSmallMobile ? -15 : -25,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#1a1a1a",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  px: { xs: 1, sm: 1.5 },
                  py: 0.5,
                  borderRadius: "12px",
                  fontSize: { xs: "0.65rem", sm: "0.75rem" },
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  border: "1px solid rgba(201, 99, 66, 0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                <SupportAgentIcon
                  sx={{ fontSize: { xs: 12, sm: 14 }, color: "#c96342" }}
                />
                24/7 Available
              </Box>
            </motion.div>
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: "400px",
              mx: "auto",
              textAlign: "center",
              fontWeight: 400,
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
              lineHeight: 1.6,
              px: { xs: 1, sm: 0 },
            }}
          >
            Experience our human-like AI voice agent in action. Click the button
            below to start a conversation.
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            mt: 1,
            mb: 2,
          }}
        >
          {/* Background pulse effects */}
          {!isCallActive && (
            <>
              <motion.div
                variants={bgPulseVariants}
                animate="pulse"
                style={{
                  position: "absolute",
                  width: isSmallMobile ? 120 : 150,
                  height: isSmallMobile ? 120 : 150,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(201, 99, 66, 0.2) 0%, transparent 70%)",
                  zIndex: 0,
                }}
              />
              <motion.div
                variants={bgPulseVariants}
                animate="pulse"
                transition={{ delay: 0.5 }}
                style={{
                  position: "absolute",
                  width: isSmallMobile ? 140 : 180,
                  height: isSmallMobile ? 140 : 180,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(201, 99, 66, 0.1) 0%, transparent 70%)",
                  zIndex: 0,
                }}
              />
            </>
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <IconButton
              onClick={startCall}
              sx={{
                width: { xs: 90, sm: 100, md: 120 },
                height: { xs: 90, sm: 100, md: 120 },
                backgroundColor: isCallActive ? "#ca061b" : "#c96342",
                "&:hover": {
                  backgroundColor: isCallActive ? "#b80516" : "#b84a2e",
                },
                transition: "all 0.3s ease",
                boxShadow: isCallActive
                  ? "0 8px 20px rgba(202, 6, 27, 0.3)"
                  : "0 10px 25px rgba(201, 99, 66, 0.25), 0 0 0 2px rgba(201, 99, 66, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.1)",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)",
                  zIndex: 1,
                },
              }}
            >
              <AnimatePresence mode="wait">
                {isRinging ? (
                  <motion.div
                    key="ringing"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [-10, 10] }}
                    exit={{ scale: 0 }}
                    transition={{
                      scale: { duration: 0.2 },
                      rotate: {
                        repeat: Infinity,
                        duration: 0.3,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <PhoneIcon
                      sx={{
                        fontSize: { xs: 36, sm: 42, md: 48 },
                        color: "white",
                      }}
                    />
                  </motion.div>
                ) : isCallActive ? (
                  <motion.div
                    key="active"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CallEndIcon
                      sx={{
                        fontSize: { xs: 36, sm: 42, md: 48 },
                        color: "white",
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MicIcon
                      sx={{
                        fontSize: { xs: 36, sm: 42, md: 48 },
                        color: "white",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </IconButton>
          </motion.div>

          {/* Enhanced ripple effect */}
          {isRinging && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: -15,
                  left: -15,
                  right: -15,
                  bottom: -15,
                  border: "3px solid rgba(201, 99, 66, 0.7)",
                  borderRadius: "50%",
                  animation: "ripple 1.5s infinite",
                  "@keyframes ripple": {
                    "0%": {
                      transform: "scale(0.8)",
                      opacity: 1,
                    },
                    "100%": {
                      transform: "scale(1.2)",
                      opacity: 0,
                    },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: -8,
                  left: -8,
                  right: -8,
                  bottom: -8,
                  border: "2px solid rgba(201, 99, 66, 0.5)",
                  borderRadius: "50%",
                  animation: "ripple 1.5s infinite 0.3s",
                }}
              />
            </>
          )}

          {/* Enhanced active call visualization */}
          {isCallActive && (
            <Box
              sx={{
                position: "absolute",
                width: "150%",
                height: 2,
                backgroundColor: "rgba(255,255,255,0.8)",
                top: "50%",
                left: "-25%",
                transform: "translateY(-50%)",
                animation: "waveform 2s infinite linear",
                opacity: 0.2,
                "@keyframes waveform": {
                  "0%": { transform: "translateY(-50%) scaleY(1)" },
                  "50%": { transform: "translateY(-50%) scaleY(2)" },
                  "100%": { transform: "translateY(-50%) scaleY(1)" },
                },
              }}
            />
          )}

          {/* Call status with enhanced styling */}
          {(isRinging || isCallActive) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  mt: 2,
                  px: { xs: 2, sm: 2.5 },
                  py: 1,
                  borderRadius: "100px",
                  backgroundColor: isCallActive
                    ? "rgba(202, 6, 27, 0.1)"
                    : "rgba(201, 99, 66, 0.1)",
                  color: isCallActive ? "#ca061b" : "#c96342",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  border: isCallActive
                    ? "1px solid rgba(202, 6, 27, 0.2)"
                    : "1px solid rgba(201, 99, 66, 0.2)",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "currentColor",
                    animation: "pulse 1s infinite",
                    "@keyframes pulse": {
                      "50%": {
                        opacity: 0.5,
                      },
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "inherit",
                  }}
                >
                  {isRinging ? "Connecting..." : "In Call"}
                </Typography>
              </Box>
            </motion.div>
          )}
        </Box>

        {/* Additional info about capabilities */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 1, sm: 2 },
            mt: { xs: 6, sm: 8 },
            flexWrap: "wrap",
          }}
        >
          {["Human-like voice", "Low Latency"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.6, sm: 0.8 },
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "100px",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  fontWeight: 500,
                  color: "text.secondary",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#c96342",
                  }}
                />
                {item}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default RetellAgent;
