import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    quote:
      "I was spending $8,500/month on an answering service that couldn't qualify leads. HomeProven costs 40% less and converts 3× more appointments. It paid for itself in the first week.",
    name: "Jason Martinez",
    company: "Apex Roofing",
    location: "Dallas, TX",
    rating: 5,
    metric: "300% ROI in 30 days",
    avatarSeed: "Leah",
    hairColor: "89CFF0",
    color: "#c96342",
  },
  {
    quote:
      "We missed a $45,000 kitchen remodel because the call came in on Saturday night. That will never happen again with HomeProven. Now we capture every lead, even at 2 AM.",
    name: "Sarah Johnson",
    company: "Elite Kitchen & Bath",
    location: "Chicago, IL",
    rating: 5,
    metric: "100% after-hours coverage",
    avatarSeed: "Sadie",
    hairColor: "98FF98",
    color: "#5f007d",
  },
  {
    quote:
      "My sales team was drowning in follow-up calls. HomeProven's AI handles all the initial contact and scheduling. Our close rate has increased by 27% since implementing.",
    name: "Mike Davidson",
    company: "Precision Windows & Doors",
    location: "Phoenix, AZ",
    rating: 5,
    metric: "27% increase in close rate",
    avatarSeed: "Luis",
    hairColor: "FDFD96",
    color: "#ff5900",
  },
  {
    quote:
      "The natural conversations still amaze me. Customers have no idea they're talking to AI. We've reduced our receptionist costs by 70% while providing better service.",
    name: "Jennifer Chen",
    company: "Modern HVAC Solutions",
    location: "San Francisco, CA",
    rating: 5,
    metric: "70% cost reduction",
    avatarSeed: "Jocelyn",
    hairColor: "DDA0DD",
    color: "#c96342",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const autoPlayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetAutoPlay();
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
    resetAutoPlay();
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        backgroundColor: "#faf9f6",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201, 99, 66, 0.04) 1px, transparent 0)",
          backgroundSize: { xs: "20px 20px", sm: "30px 30px", md: "40px 40px" },
          opacity: 0.7,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={{ xs: 6, sm: 8, md: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            What <span style={{ color: "#c96342" }}>Contractors</span> Are
            Saying
          </Typography>

          <Typography
            variant="h5"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: theme.palette.text.secondary,
              mb: { xs: 4, sm: 5, md: 6 },
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Don't just take our word for it. Hear from contractors who have
            transformed their businesses with HomeProven AI agents.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 1.5, sm: 2, md: 4 },
              flexWrap: "wrap",
              mb: { xs: 6, sm: 7, md: 8 },
            }}
          >
            {[
              { value: "500+", label: "Happy Contractors", color: "#c96342" },
              { value: "1M+", label: "Calls Handled", color: "#5f007d" },
              { value: "99.7%", label: "Satisfaction Rate", color: "#ff5900" },
            ].map((item, index) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.5,
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1.5, sm: 2 },
                  backgroundColor: "white",
                  borderRadius: { xs: "12px", sm: "16px" },
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                  minWidth: { xs: "100px", sm: "auto" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: item.color,
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            maxWidth: "1000px",
            mx: "auto",
            px: { xs: 1, sm: 2, md: 6 },
            mb: 6,
          }}
        >
          {!isMobile && (
            <>
              <IconButton
                onClick={handlePrev}
                aria-label="Previous testimonial"
                sx={{
                  position: "absolute",
                  left: { xs: -8, sm: -16, md: -20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px solid",
                  borderColor: theme.palette.primary.light,
                  zIndex: 2,
                  width: { sm: "40px", md: "48px" },
                  height: { sm: "40px", md: "48px" },
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { sm: "1rem", md: "1.25rem" },
                  }}
                />
              </IconButton>

              <IconButton
                onClick={handleNext}
                aria-label="Next testimonial"
                sx={{
                  position: "absolute",
                  right: { xs: -8, sm: -16, md: -20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px solid",
                  borderColor: theme.palette.primary.light,
                  zIndex: 2,
                  width: { sm: "40px", md: "48px" },
                  height: { sm: "40px", md: "48px" },
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { sm: "1rem", md: "1.25rem" },
                  }}
                />
              </IconButton>
            </>
          )}

          <Box
            sx={{
              position: "relative",
              minHeight: { xs: "550px", sm: "500px", md: "450px" },
              mb: 4,
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4, md: 6 },
                    borderRadius: { xs: "16px", sm: "20px", md: "24px" },
                    height: "100%",
                    position: "relative",
                    backgroundColor: "white",
                    border: "1px solid rgba(201, 99, 66, 0.1)",
                    boxShadow: "0 20px 40px rgba(201, 99, 66, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "visible",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", mb: 3, gap: 0.5 }}>
                      {[...Array(testimonials[activeIndex].rating)].map(
                        (_, i) => (
                          <StarIcon
                            key={i}
                            sx={{
                              color: testimonials[activeIndex].color,
                              fontSize: { xs: 20, sm: 24, md: 28 },
                            }}
                          />
                        ),
                      )}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontStyle: "italic",
                        mb: 4,
                        lineHeight: 1.6,
                        fontWeight: 400,
                        color: theme.palette.text.primary,
                        minHeight: { xs: "auto", md: "120px" },
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      "{testimonials[activeIndex].quote}"
                    </Typography>

                    <Box
                      sx={{
                        display: "inline-block",
                        px: { xs: 2, sm: 3 },
                        py: { xs: 1, sm: 1.5 },
                        backgroundColor: `${testimonials[activeIndex].color}15`,
                        borderRadius: "100px",
                        mb: 4,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: testimonials[activeIndex].color,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        {testimonials[activeIndex].metric}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 2, sm: 3 },
                    }}
                  >
                    <Avatar
                      src={`https://api.dicebear.com/9.x/dylan/svg?seed=${testimonials[activeIndex].avatarSeed}&hairColor=${testimonials[activeIndex].hairColor}&mood=superHappy&backgroundColor=0047AB&facialHairProbability=0`}
                      alt={testimonials[activeIndex].name}
                      sx={{
                        width: { xs: 56, sm: 64, md: 72 },
                        height: { xs: 56, sm: 64, md: 72 },
                        border: "3px solid white",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        backgroundColor: testimonials[activeIndex].color,
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          fontWeight: "bold",
                          mb: 0.5,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {testimonials[activeIndex].name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        {testimonials[activeIndex].company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.8rem",
                            md: "0.85rem",
                          },
                        }}
                      >
                        {testimonials[activeIndex].location}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </AnimatePresence>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5, md: 2 },
              position: "relative",
              zIndex: 2,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                  resetAutoPlay();
                }}
                sx={{
                  width: { xs: 10, sm: 12 },
                  height: { xs: 10, sm: 12 },
                  borderRadius: "50%",
                  backgroundColor:
                    index === activeIndex ? testimonial.color : "#e0e0e0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: index === activeIndex ? "scale(1.4)" : "scale(1)",
                  "&:hover": {
                    backgroundColor:
                      index === activeIndex ? testimonial.color : "#bdbdbd",
                    transform: "scale(1.2)",
                  },
                }}
                role="button"
                aria-label={`View testimonial ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
