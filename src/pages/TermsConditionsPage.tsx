import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsConditionsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    document.title = "Terms & Conditions - Home Proven";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#faf9f6", minHeight: "100vh" }}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, sm: 10, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: "16px",
            mb: 4,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Home
            </Link>
            <Typography
              color="text.primary"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Terms & Conditions
            </Typography>
          </Breadcrumbs>

          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              mb: 4,
              fontWeight: "bold",
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              lineHeight: 1.2,
            }}
          >
            Terms of Use
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            Updated 4/1/2025
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            This Software Licensing Agreement (the "Agreement") is entered into
            on the date of Execution (the "Effective Date"), between
            ("Subscriber") and Renowned Marketing, LLC., a Florida corporation
            doing business as HomeProven, HomeProven AI, and HomeProven.com,
            with its principal location at 7957 N University Dr #301, Parkland,
            FL 33067 (hereinafter referred to as "HOMEPRVOEN" which is a
            registered trademark of Renowned Marketing, LLC). For purposes of
            this Agreement, Subscriber and Licensor each will be referred to
            individually as a "Party" and together as the "Parties." For
            purposes of these Terms of Use, the term "Service" also includes the
            Site, except where the context specifically indicates otherwise.
            These Terms of Use apply to your use of the Service. This Service is
            intended for use only by users that are at least 18 years of age.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            "Site" refers to https://www.homeproven.com and all associated white
            label accounts. The Site contains text, pictures, graphics, videos,
            logos, images, works of authorship, computer code, design elements,
            trade dress, technical information, and other content, as well as
            available features or services discussed, referenced, provided, or
            offered through or on the Site (collectively with all information
            and material about HOMEPROVEN and its Services, the "Content"). For
            the purposes of these Terms of Use, the term "Site" also includes
            the Content, except where the context specifically indicates
            otherwise.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            PLEASE NOTE: Your access to and use of the Service are governed by
            these Terms of Use, as well as all applicable laws and regulations.
            Only individuals and entities who have reached the age of legal
            majority and can form legally binding agreements under applicable
            law are permitted to use the Service and/or establish a Service
            account, where applicable. Please read these Terms of Use carefully.
            If you do not accept and agree to these Terms of Use, you are not
            authorized to access or use the Service. By accessing and using the
            Service, you acknowledge and agree to be bound by these Terms of
            Use.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            We may update, modify, supplement, or change these Terms of Use from
            time to time by providing advance notice, which may include posting
            the revised Terms here. If you continue to use the Service after
            such changes are posted, you will be bound by the updated Terms of
            Use. Unless otherwise indicated, any new Content added to the
            Service will also be subject to these Terms of Use, effective on the
            date of such addition. You are encouraged to review the Site and
            these Terms of Use periodically for any updates or changes. If you
            do not agree to the changes, you must stop using our Services.
          </Typography>

          {/* Additional paragraphs here - truncated for brevity */}

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.25rem", sm: "1.375rem", md: "1.5rem" },
            }}
          >
            1. USE OF HOMEPROVEN.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              mt: 3,
              mb: 1,
              fontWeight: "bold",
              fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
            }}
          >
            1.1 GRANT.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            Licensor hereby grants the Subscriber a limited, non-exclusive and
            non-transferable license, without right of sublicense, during the
            Term to access and display on Subscriber's Display Devices within
            the United States, Canada, and other approved countries (to be
            named), HOMEPROVEN, hereinafter "Service", and to permit Authorized
            Users to use the Service, subject to the terms and conditions of
            this Agreement. All rights in the Service not expressly granted
            hereunder are reserved to Licensor.
          </Typography>

          {/* More sections here - truncated for brevity */}

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.25rem", sm: "1.375rem", md: "1.5rem" },
            }}
          >
            EXHIBIT A: PRICING
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              my: 4,
              overflow: "auto",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Table
              sx={{
                minWidth: isMobile ? 500 : 650,
                "& th, & td": {
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  padding: { xs: "8px 12px", sm: "16px" },
                },
              }}
              aria-label="pricing table"
            >
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f0f8ff" }}>
                  <TableCell></TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Starter
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Growth
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Premium
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Pricing (Monthly Rate)
                  </TableCell>
                  <TableCell align="center">$699*</TableCell>
                  <TableCell align="center">$999*</TableCell>
                  <TableCell align="center">$1,999*</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Minutes/Month Included
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      whiteSpace: { xs: "normal", md: "nowrap" },
                      wordBreak: { xs: "break-word", md: "normal" },
                    }}
                  >
                    Up to 1,000 ($0.60 per add'l min)
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      whiteSpace: { xs: "normal", md: "nowrap" },
                      wordBreak: { xs: "break-word", md: "normal" },
                    }}
                  >
                    Up to 2,000 ($0.50 per add'l min)
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      whiteSpace: { xs: "normal", md: "nowrap" },
                      wordBreak: { xs: "break-word", md: "normal" },
                    }}
                  >
                    Up to 6,000 ($0.40 per add'l min)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Use Case
                  </TableCell>
                  <TableCell align="center">Smaller/Startup</TableCell>
                  <TableCell align="center">Growing</TableCell>
                  <TableCell align="center">Large (Multi-Location)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    # of Products
                  </TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">Up to 3</TableCell>
                  <TableCell align="center">Up to 8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    # of Appt Types
                  </TableCell>
                  <TableCell align="center">2</TableCell>
                  <TableCell align="center">4</TableCell>
                  <TableCell align="center">8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Custom Screening Questions
                  </TableCell>
                  <TableCell align="center">-</TableCell>
                  <TableCell align="center">
                    Custom Screening Questions
                  </TableCell>
                  <TableCell align="center">
                    Custom Screening Questions
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    SMS Features
                  </TableCell>
                  <TableCell align="center">Booking Confirmation</TableCell>
                  <TableCell align="center">Booking & Call F/U SMS</TableCell>
                  <TableCell align="center">Booking & Call F/U SMS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Scheduling
                  </TableCell>
                  <TableCell align="center">Basic</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      whiteSpace: { xs: "normal", md: "nowrap" },
                      wordBreak: { xs: "break-word", md: "normal" },
                    }}
                  >
                    Advanced Scheduling + Rescheduling
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      whiteSpace: { xs: "normal", md: "nowrap" },
                      wordBreak: { xs: "break-word", md: "normal" },
                    }}
                  >
                    Advanced Scheduling + Rescheduling
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Languages
                  </TableCell>
                  <TableCell align="center">English only</TableCell>
                  <TableCell align="center">2 (English & Spanish)</TableCell>
                  <TableCell align="center">2 (English & Spanish)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Dedicated Rep
                  </TableCell>
                  <TableCell align="center">Online Support</TableCell>
                  <TableCell align="center">Dedicated POC</TableCell>
                  <TableCell align="center">Dedicated POC</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            variant="body1"
            paragraph
            sx={{
              mt: 4,
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            For more information, please contact us at sales@homeproven.com
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontWeight: "bold",
              mt: 6,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              textAlign: "center",
              backgroundColor: "rgba(201, 99, 66, 0.05)",
              p: 2,
              borderRadius: "8px",
            }}
          >
            HomeProven AI Agents always identify themselves as digital
            assistants in compliance with all relevant regulations.
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsConditionsPage;
