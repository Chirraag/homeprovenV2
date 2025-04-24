import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  // Helper function to get the correct href for navigation links
  const getHref = (anchor: string) => {
    const isHomePage = location.pathname === "/";
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f0eee6",
        pt: { xs: 4, sm: 5, md: 6, lg: 8 },
        pb: 4,
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
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box
                component="a"
                href="/"
                sx={{
                  display: "inline-block",
                  mb: 2,
                }}
              >
                <img
                  src="https://homeproven.com/wp-content/uploads/2023/03/home_proven_logo_trans.png"
                  alt="Home Proven Logo"
                  style={{
                    height: isMobile ? "32px" : "40px",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  lineHeight: 1.7,
                  mb: 2,
                  fontSize: { xs: "0.8rem", sm: "0.875rem" },
                }}
              >
                AI voice agents that ensure contractors never miss business
                opportunities. Work smarter, not harder with HomeProven.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  component="a"
                  href="#"
                  aria-label="Twitter"
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      backgroundColor: "#c96342",
                      color: "white",
                    },
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                  }}
                  size={isMobile ? "small" : "small"}
                >
                  <TwitterIcon fontSize={isMobile ? "small" : "small"} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  aria-label="LinkedIn"
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      backgroundColor: "#c96342",
                      color: "white",
                    },
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                  }}
                  size={isMobile ? "small" : "small"}
                >
                  <LinkedInIcon fontSize={isMobile ? "small" : "small"} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  aria-label="Facebook"
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      backgroundColor: "#c96342",
                      color: "white",
                    },
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                  }}
                  size={isMobile ? "small" : "small"}
                >
                  <FacebookIcon fontSize={isMobile ? "small" : "small"} />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      component="a"
                      href={getHref("features")}
                      underline="none"
                      color="textPrimary"
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: (theme) => theme.palette.text.secondary,
                        "&:hover": {
                          color: "#c96342",
                        },
                      }}
                    >
                      Features
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      component="a"
                      href={getHref("solutions")}
                      underline="none"
                      color="textPrimary"
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: (theme) => theme.palette.text.secondary,
                        "&:hover": {
                          color: "#c96342",
                        },
                      }}
                    >
                      Solutions
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      component="a"
                      href={getHref("testimonials")}
                      underline="none"
                      color="textPrimary"
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: (theme) => theme.palette.text.secondary,
                        "&:hover": {
                          color: "#c96342",
                        },
                      }}
                    >
                      Testimonials
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      component="a"
                      href={getHref("pricing")}
                      underline="none"
                      color="textPrimary"
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: (theme) => theme.palette.text.secondary,
                        "&:hover": {
                          color: "#c96342",
                        },
                      }}
                    >
                      Pricing
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/terms-conditions"
                  underline="none"
                  color="textPrimary"
                  sx={{
                    fontSize: { xs: "13px", sm: "14px" },
                    color: (theme) => theme.palette.text.secondary,
                    "&:hover": {
                      color: "#c96342",
                    },
                  }}
                >
                  Terms & Conditions
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/privacy-policy"
                  underline="none"
                  color="textPrimary"
                  sx={{
                    fontSize: { xs: "13px", sm: "14px" },
                    color: (theme) => theme.palette.text.secondary,
                    "&:hover": {
                      color: "#c96342",
                    },
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Link
              href="mailto:sales@homeproven.com"
              underline="none"
              sx={{
                color: "#c96342",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
                transition: "all 0.3s ease",
                fontSize: { xs: "13px", sm: "14px" },
                "&:hover": {
                  color: "#b84a2e",
                },
              }}
            >
              sales@homeproven.com
            </Link>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 3, md: 4 },
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
            }}
          >
            &copy; {new Date().getFullYear()} HomeProven, Inc. All rights
            reserved.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              px: { xs: 2, sm: 3 },
              py: 1,
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              borderRadius: "100px",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
              textAlign: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#c96342",
                display: "inline-block",
                mr: 1.5,
              }}
            />
            HomeProven AI Agents always identify themselves as digital
            assistants in compliance with all relevant regulations.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
