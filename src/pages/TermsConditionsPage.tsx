import React, { useEffect } from 'react';
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
  TableRow 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditionsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms & Conditions - Home Proven";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: '16px', mb: 4 }}>
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>
            <Typography color="text.primary">Terms & Conditions</Typography>
          </Breadcrumbs>

          <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
            Terms of Use
          </Typography>

          <Typography variant="body1" paragraph>
            Updated 4/1/2025
          </Typography>

          <Typography variant="body1" paragraph>
            This Software Licensing Agreement (the "Agreement") is entered into on the date of
            Execution (the "Effective Date"), between ("Subscriber") and Renowned Marketing, LLC., a
            Florida corporation doing business as HomeProven, HomeProven AI, and
            HomeProven.com, with its principal location at 7957 N University Dr #301, Parkland, FL
            33067 (hereinafter referred to as "HOMEPRVOEN" which is a registered trademark of
            Renowned Marketing, LLC). For purposes of this Agreement, Subscriber and Licensor
            each will be referred to individually as a "Party" and together as the "Parties." For purposes
            of these Terms of Use, the term "Service" also includes the Site, except where the context
            specifically indicates otherwise. These Terms of Use apply to your use of the Service. This
            Service is intended for use only by users that are at least 18 years of age.
          </Typography>

          <Typography variant="body1" paragraph>
            "Site" refers to https://www.homeproven.com and all associated white label accounts. The
            Site contains text, pictures, graphics, videos, logos, images, works of authorship,
            computer code, design elements, trade dress, technical information, and other content, as
            well as available features or services discussed, referenced, provided, or offered through
            or on the Site (collectively with all information and material about HOMEPROVEN and its
            Services, the "Content"). For the purposes of these Terms of Use, the term "Site" also
            includes the Content, except where the context specifically indicates otherwise.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
            PLEASE NOTE: Your access to and use of the Service are governed by these Terms of Use,
            as well as all applicable laws and regulations. Only individuals and entities who have
            reached the age of legal majority and can form legally binding agreements under
            applicable law are permitted to use the Service and/or establish a Service account, where
            applicable. Please read these Terms of Use carefully. If you do not accept and agree to
            these Terms of Use, you are not authorized to access or use the Service. By accessing
            and using the Service, you acknowledge and agree to be bound by these Terms of Use.
          </Typography>

          <Typography variant="body1" paragraph>
            We may update, modify, supplement, or change these Terms of Use from time to time by
            providing advance notice, which may include posting the revised Terms here. If you
            continue to use the Service after such changes are posted, you will be bound by the
            updated Terms of Use. Unless otherwise indicated, any new Content added to the Service
            will also be subject to these Terms of Use, effective on the date of such addition. You are
            encouraged to review the Site and these Terms of Use periodically for any updates or
            changes. If you do not agree to the changes, you must stop using our Services.
          </Typography>

          <Typography variant="body1" paragraph>
            WHEREAS, Subscriber is a law firm or company authorized to provide legal or claims
            management services as defined by the applicable authorities where the firm is located.
          </Typography>

          <Typography variant="body1" paragraph>
            WHEREAS, HOMEPROVEN has developed the web/cloud-based HOMEPROVEN legal
            client continuity AI platform to be used by law firms, claims management firms, and
            related entities to enhance case management, client communication, and firm efficiency.
            Experience cutting-edge technology with best-in-class fraud detection, client retention,
            and enrichment tools.
          </Typography>

          <Typography variant="body1" paragraph>
            WHEREAS, Subscriber wishes to utilize HOMEPROVEN to assist in client continuity.
          </Typography>

          <Typography variant="body1" paragraph>
            NOW THEREFORE, for valuable consideration, the receipt and sufficiency of which is
            hereby acknowledged, the parties hereto, intending to be legally bound, hereby agree as
            follows:
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
            1. USE OF HOMEPROVEN.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            1.1 GRANT.
          </Typography>

          <Typography variant="body1" paragraph>
            Licensor hereby grants the Subscriber a limited, non-exclusive and non-transferable license, without right of sublicense, during the Term to access and display on Subscriber's Display Devices within the United States, Canada, and other approved countries (to be named), HOMEPROVEN, hereinafter "Service", and to permit Authorized Users to use the Service, subject to the terms and conditions of this Agreement. All rights in the Service not expressly granted hereunder are reserved to Licensor.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            1.2 SERVICE DATA.
          </Typography>

          <Typography variant="body1" paragraph>
            We collect various types of information about individuals who interact with your business through the Service (collectively, "Service Data"). You agree that we, along with the service providers we use to assist in providing the Service, have the right to access your account and use, modify, reproduce, distribute, display, and disclose Service Data as necessary to develop, enhance, and provide the Service, including AI-generated features and improvements, and to respond to your support requests. Any use of Service Data for AI or machine learning purposes will be done using anonymized data, ensuring that all personally identifiable information is removed or obfuscated. We are committed to holding this data securely and in compliance with applicable data protection laws.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            1.3 SCOPE.
          </Typography>

          <Typography variant="body1" paragraph>
            The license granted to Subscriber under this Agreement is limited to a single, authorized Application for the display and retrieval of the Service on Subscriber's device(s) used for managing active cases and clients. The license does not extend to multiple applications or devices beyond what is necessary for accessing content within the Service as provided under the subscription. Nothing in this Agreement obligates HOMEPROVEN to continue providing access to any Service beyond the date when HOMEPROVEN ceases offering such Service to subscribers generally. Any use of Service Data, including AI-generated features, will be conducted in accordance with Section 1.2, with data anonymized and held securely. We are committed to taking measures to prepare all data processing, including AI-related data usage, to comply with applicable data protection laws, including but not limited to planned HIPPA, GDPR and CCPA compliance.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            1.4 RESTRICTIONS OF USE.
          </Typography>

          <Typography variant="body1" paragraph>
            Subscriber shall not edit, alter, abridge or otherwise change in any manner the content of the Service, including, without limitation, all copyright and proprietary rights notices. Subscriber may not, and may not permit others to:
          </Typography>

          <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
            <li>
              <Typography variant="body1">
                reverse engineer, decompile, decode, decrypt, disassemble, or in any way derive source code from, the software or Service;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                modify, translate, adapt, alter, or create derivative works from the Service;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                copy (other than one back-up copy), distribute, publicly display, transmit, sell, rent, lease or otherwise exploit the Service; or
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                distribute, sublicense, rent, lease, loan (or grant any third party access to or use of) the Service to any third party.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                use our Services for any illegal, harmful, or abusive activity. For example, you may not:
                <ul style={{ listStyleType: 'none', paddingLeft: '20px', marginTop: '8px' }}>
                  <li>use our Services in a way that infringes, misappropriates or violates anyone's rights.</li>
                  <li>modify, copy, lease, sell or distribute any of our Services.</li>
                  <li>attempt to or assist anyone to reverse engineer, decompile or discover the source code or underlying components of our Services, including our models, algorithms, or systems (except to the extent this restriction is prohibited by applicable law).</li>
                  <li>automatically or programmatically extract data or Output (defined as output from the Services based on input).</li>
                  <li>represent that Output was human-generated when it was not.</li>
                  <li>interfere with or disrupt our Services, including circumvent any rate limits or restrictions or bypass any protective measures or safety mitigations we put on our Services.</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                use Output to develop models that compete with HOMEPROVEN.
              </Typography>
            </li>
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            1.5 DEFINITIONS.
          </Typography>

          <Typography variant="body1" paragraph>
            As used herein, the "Agreement" shall mean these terms and conditions and any written amendments agreed to by both parties; "Application" shall mean the Licensor-developed application used by Subscriber for the Service under this Agreement; "Active Cases" and "Clients" shall refer to the number of legal cases and clients managed through the Service, which determine the applicable subscription fees; "Billing Start Date" shall mean the date on which billing begins for the selected Service, which under no circumstances shall be later than the Service Start Date; "Display Devices" shall mean any device used to access and display the Service; the "Service" shall mean Licensor's information applications subscribed to by Subscriber under this Agreement; "Service Start Date" shall mean the date from which Subscriber receives access to the applicable Service; "Fees" shall mean the fees payable under this Agreement for the Services rendered, based on the number of active cases and clients; "Office" shall mean the address(es) of Subscriber's office(s) in which a Display Device is located, including clients at multiple locations who specifically utilize/subscribe to the Service; and "Vendor" shall mean the single distributor that delivers the Service to Subscriber, subject to Licensor's continuing authorization of such Vendor's Application.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
            2. FEES AND PAYMENTS
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.1. Subscription Fees.
          </Typography>

          <Typography variant="body1" paragraph>
            By selecting a paid Service, you agree to pay HOMEPROVEN the applicable monthly or annual subscription fees as indicated at the time of signup. Fees are charged on the Billing Start Date and are payable in advance for the services rendered, based on the number of active cases and clients managed through the Service. The number of active cases and clients will be assessed on a monthly basis, and fees will be adjusted accordingly based on increases or decreases. However, no prorated adjustments will be made for mid-term changes in case or client numbers. All fees paid are non-refundable. You authorize HOMEPROVEN, along with our payment affiliates or service providers, to process and store your payment card information. HOMEPROVEN's subscription fee schedules are available on homeproven.com or in the attached EXHIBIT A: PRICING
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.2. Usage Fees.
          </Typography>

          <Typography variant="body1" paragraph>
            In addition to subscription fees, HOMEPROVEN offers various usage-based services, including but not limited to SMS text messaging, email, voice AI calling, social media direct messages (DMs), mailed letters, contact enrichment, skip tracing, and local notary or door knocker services. Each of these services has its own pricing, which is subject to change. Usage fees, including charges for additional services beyond your selected plan, are non-refundable. Usage of services like SMS text messages, phone calls, or similar services will be calculated by rounding up to the nearest unit (e.g., minute, message, or instance of service). Spam calls or similar misuse may be excluded from billing at HOMEPROVEN's discretion. If an adjustment is required, please contact our support team. HOMEPROVEN reserves the right to change its fees at any time by posting an updated pricing structure on our website at the following link: homeproven.com or as agreed in the attached EXHIBIT A: PRICING, or in your account, or by sending you a notification via email, to which you agree by, without limitation, using the Service after HOMEPROVEN has provided or made available to Subscriber such updated or amended fees.
          </Typography>

          {/* Continue with more sections from the PDF... */}
          
          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.3. Late Payments.
          </Typography>

          <Typography variant="body1" paragraph>
            If you fail to pay the fees or any other amounts due under this Agreement by the due date specified on the invoice or as otherwise provided herein, HOMEPROVEN is entitled to charge interest on the overdue amounts from the date payment was due. Interest will be calculated at a rate of 1.5% per month, or the maximum rate permitted by law, whichever is higher, both pre-judgment and post-judgment.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.4. Additional Fees for Certain Services.
          </Typography>

          <Typography variant="body1" paragraph>
            In some cases, HOMEPROVEN may incur additional fees related to porting phone numbers into or out of the platform. Certain regions (including, but not limited to, Alaska and the Yukon Territories) may incur extra costs for call forwarding or other services. Sending or receiving SMS and MMS messages to/from specific carriers or using any other additional services such as social media DMs, mailed letters, skip tracing, or local notaries, may also result in extra network or service-provider fees. HOMEPROVEN reserves the right to pass these charges on to you, and you agree to pay them.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.5 Professional Services.
          </Typography>

          <Typography variant="body1" paragraph>
            During the term of this Agreement, Subscriber may request Licensor to perform computer professional services in the nature of software development, customization add-in, documentation and/or integration services (hereinafter, "Professional Services"). Upon receipt of a request, Licensor may provide Subscriber with a written proposal, and when the parties agree to all requirements of the proposed Professional Services, a Task Order for the Professional Services shall be executed by the parties. All Task Orders shall be subject to the terms and conditions of this Agreement. Services performed by Licensor are not exclusive to Subscriber, and Licensor may perform services of any type or nature for any other person or entity at any time.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.6. Taxes.
          </Typography>

          <Typography variant="body1" paragraph>
            You are responsible for promptly paying or reimbursing HOMEPROVEN for any applicable sales, use, excise, value-added, or similar taxes, assessments, duties, or other charges imposed by a governmental agency based on the Services provided, including any interest or penalties that result from your actions.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            2.7. Disputed Fees.
          </Typography>

          <Typography variant="body1" paragraph>
            If you dispute any portion of the fees billed to you, you must notify us in writing by identifying the specific fees which you dispute within sixty (60) days from the billing date, or the fees shall be considered correct. The parties agree to work together to promptly resolve any disputes promptly.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
            3. SERVICE DESCRIPTION, DELIVERY AND ACCEPTANCE
          </Typography>

          <Typography variant="body1" paragraph>
            If the Service is delivered to Subscriber via a Display Device, HOMEPROVEN will make the Service available to the Subscriber upon successful sign-up and completion of the subscription process. The Service will be deemed accepted upon the Service Start Date. Any updates, bug fixes, or upgrades ("Corrections") to the Service will be deemed accepted by the Subscriber on the day such Corrections are delivered.
          </Typography>

          <Typography variant="body1" paragraph>
            HOMEPROVEN will provide the Services based on the plan you select when you subscribe to the Service. You can choose a plan that includes one or more of HOMEPROVEN's offerings. The terms associated with these plans will be clearly indicated at the time of subscription or as updated on the HOMEPROVEN website.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
            4. LIMITED LICENSE; ALL RIGHTS RESERVED; COPYRIGHT; MARKS; OWNERSHIP
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            4.1 License
          </Typography>

          <Typography variant="body1" paragraph>
            HOMEPROVEN grants you a limited, non-exclusive, and revocable license to access and use the Service, subject to the terms set forth in these Terms of Use. HOMEPROVEN (or the respective third-party owners) retains all rights, title, and interest in the Service, including all features, services, and intellectual property rights (such as copyrights, trademarks, and service marks). All rights not expressly granted are reserved. Any unauthorized use terminates the license granted by HOMEPROVEN.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}>
            4.2 Copyright
          </Typography>

          <Typography variant="body1" paragraph>
            Except as otherwise stated, the Service and all Content (including but not limited to text, images, videos, software, etc.) on the Site are the copyrighted works of HOMEPROVEN or its third-party content suppliers and are protected by U.S. and international copyright laws. You may download and print a hard copy for personal use, provided that any copyright or proprietary notices remain intact. However, you may not otherwise copy, alter, distribute, reproduce, or transmit the Content without HOMEPROVEN's prior written authorization or the consent of applicable third parties. Unauthorized use may violate copyright laws and other applicable regulations.
          </Typography>

          <Typography variant="body1" paragraph>
            If you believe that any content on the Site infringes upon your intellectual property rights, please contact us immediately with all relevant information at Renowned Marketing LLC DBA HOMEPROVEN, 7957 N University Dr #301, Parkland, FL 33067, or via email at support@homeproven.com. Written claims concerning copyright infringement must include the following information:
          </Typography>

          <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
            <li>
              <Typography variant="body1">
                A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                A description of the copyrighted work that you claim has been infringed upon;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                A description of where the allegedly infringing material is located on our site so we can find it;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Your address, telephone number, and e-mail address;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                A statement by you that the above information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on the copyright owner's behalf.
              </Typography>
            </li>
          </Typography>

          {/* Continue with remaining sections... */}

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
            EXHIBIT A: PRICING
          </Typography>

          <TableContainer component={Paper} sx={{ my: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="pricing table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f0f8ff' }}>
                  <TableCell></TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Starter</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Growth</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Premium</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Pricing (Monthly Rate)</TableCell>
                  <TableCell align="center">$699*</TableCell>
                  <TableCell align="center">$999*</TableCell>
                  <TableCell align="center">$1,999*</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Minutes/Month Included</TableCell>
                  <TableCell align="center">Up to 1,000 ($0.60 per add'l min)</TableCell>
                  <TableCell align="center">Up to 2,000 ($0.50 per add'l min)</TableCell>
                  <TableCell align="center">Up to 6,000 ($0.40 per add'l min)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Use Case</TableCell>
                  <TableCell align="center">Smaller/Startup</TableCell>
                  <TableCell align="center">Growing</TableCell>
                  <TableCell align="center">Large (Multi-Location)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}># of Products</TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">Up to 3</TableCell>
                  <TableCell align="center">Up to 8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}># of Appt Types</TableCell>
                  <TableCell align="center">2</TableCell>
                  <TableCell align="center">4</TableCell>
                  <TableCell align="center">8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Custom Screening Questions</TableCell>
                  <TableCell align="center">-</TableCell>
                  <TableCell align="center">Custom Screening Questions</TableCell>
                  <TableCell align="center">Custom Screening Questions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>SMS Features</TableCell>
                  <TableCell align="center">Booking Confirmation</TableCell>
                  <TableCell align="center">Booking & Call F/U SMS</TableCell>
                  <TableCell align="center">Booking & Call F/U SMS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Scheduling</TableCell>
                  <TableCell align="center">Basic</TableCell>
                  <TableCell align="center">Advanced Scheduling + Rescheduling</TableCell>
                  <TableCell align="center">Advanced Scheduling + Rescheduling</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Languages</TableCell>
                  <TableCell align="center">English only</TableCell>
                  <TableCell align="center">2 (English & Spanish)</TableCell>
                  <TableCell align="center">2 (English & Spanish)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Dedicated Rep</TableCell>
                  <TableCell align="center">Online Support</TableCell>
                  <TableCell align="center">Dedicated POC</TableCell>
                  <TableCell align="center">Dedicated POC</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="body1" paragraph sx={{ mt: 4 }}>
            For more information, please contact us at sales@homeproven.com
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', mt: 6 }}>
            HomeProven AI Agents always identify themselves as digital assistants in compliance with all relevant regulations.
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsConditionsPage;