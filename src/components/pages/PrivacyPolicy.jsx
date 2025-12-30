// Importing Modules
import React from "react";
import styled from "styled-components";

export default function PrivacyPolicy() {
  return (
    <PolicyContainer>
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <LastUpdated>Last Updated: 27 December 2025</LastUpdated>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <SectionText>
          Riget Zoo Adventures ("we", "our", "us") is committed to protecting your personal data 
          and respecting your privacy. This Privacy Policy explains how we collect, use, and protect 
          your information in compliance with the UK General Data Protection Regulation (UK GDPR) 
          and the Data Protection Act 2018.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>2. Data Controller</SectionTitle>
        <SectionText>
          Riget Zoo Adventures is the data controller responsible for your personal data. 
          If you have any questions about this Privacy Policy, please contact us at: 
          privacy@rigetzoo.co.uk
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>3. Information We Collect</SectionTitle>
        <SectionText>We may collect and process the following data:</SectionText>
        <PolicyList>
          <PolicyListItem><strong>Identity Data:</strong> Name, username, date of birth</PolicyListItem>
          <PolicyListItem><strong>Contact Data:</strong> Email address, telephone number, postal address</PolicyListItem>
          <PolicyListItem><strong>Transaction Data:</strong> Details of tickets and services purchased</PolicyListItem>
          <PolicyListItem><strong>Technical Data:</strong> IP address, browser type, device information</PolicyListItem>
          <PolicyListItem><strong>Usage Data:</strong> Information about how you use our website</PolicyListItem>
          <PolicyListItem><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</PolicyListItem>
        </PolicyList>
      </Section>

      <Section>
        <SectionTitle>4. Legal Basis for Processing</SectionTitle>
        <SectionText>We process your personal data under the following lawful bases:</SectionText>
        <PolicyList>
          <PolicyListItem><strong>Consent:</strong> Where you have given explicit consent for marketing communications</PolicyListItem>
          <PolicyListItem><strong>Contract:</strong> Where processing is necessary for ticket purchases and bookings</PolicyListItem>
          <PolicyListItem><strong>Legal Obligation:</strong> Where we must comply with legal requirements</PolicyListItem>
          <PolicyListItem><strong>Legitimate Interests:</strong> To improve our services and maintain security</PolicyListItem>
        </PolicyList>
      </Section>

      <Section>
        <SectionTitle>5. Your Rights Under UK GDPR</SectionTitle>
        <SectionText>You have the following rights regarding your personal data:</SectionText>
        <PolicyList>
          <PolicyListItem><strong>Right of Access:</strong> Request a copy of your personal data</PolicyListItem>
          <PolicyListItem><strong>Right to Rectification:</strong> Request correction of inaccurate data</PolicyListItem>
          <PolicyListItem><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</PolicyListItem>
          <PolicyListItem><strong>Right to Restrict Processing:</strong> Request limitation of processing</PolicyListItem>
          <PolicyListItem><strong>Right to Data Portability:</strong> Receive your data in a portable format</PolicyListItem>
          <PolicyListItem><strong>Right to Object:</strong> Object to processing based on legitimate interests</PolicyListItem>
          <PolicyListItem><strong>Rights Related to Automated Decision-Making:</strong> Not be subject to automated decisions</PolicyListItem>
        </PolicyList>
      </Section>

      <Section>
        <SectionTitle>6. Data Retention</SectionTitle>
        <SectionText>
          We retain your personal data only for as long as necessary to fulfil the purposes 
          for which it was collected, including legal, accounting, or reporting requirements. 
          Typically, we retain transaction data for 7 years as required by HMRC regulations.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>7. Data Security</SectionTitle>
        <SectionText>
          We have implemented appropriate technical and organisational measures to protect 
          your personal data against unauthorised access, alteration, disclosure, or destruction. 
          This includes encryption, secure servers, and access controls.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>8. Third-Party Sharing</SectionTitle>
        <SectionText>
          We may share your data with trusted third parties including payment processors, 
          analytics providers, and booking systems. All third parties are required to respect 
          the security of your personal data and treat it in accordance with UK law.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>9. International Transfers</SectionTitle>
        <SectionText>
          If we transfer your data outside the UK, we ensure adequate safeguards are in place 
          in compliance with UK GDPR requirements, including Standard Contractual Clauses or 
          adequacy decisions.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>10. Cookies</SectionTitle>
        <SectionText>
          We use cookies on our website. For detailed information about the cookies we use 
          and your choices, please see our <CookieLink href="/cookie-policy">Cookie Policy</CookieLink>.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>11. Complaints</SectionTitle>
        <SectionText>
          If you have concerns about how we handle your data, you have the right to lodge 
          a complaint with the Information Commissioner's Office (ICO), the UK supervisory 
          authority for data protection issues (<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>).
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>12. Changes to This Policy</SectionTitle>
        <SectionText>
          We may update this Privacy Policy from time to time. Any changes will be posted 
          on this page with an updated revision date. We encourage you to review this page 
          periodically.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>13. Contact Us</SectionTitle>
        <SectionText>
          For any questions about this Privacy Policy or to exercise your rights, contact us at:
        </SectionText>
        <ContactInfo>
          <p>Riget Zoo Adventures</p>
          <p>Data Protection Officer</p>
          <p>Email: privacy@rigetzoo.co.uk</p>
        </ContactInfo>
      </Section>
    </PolicyContainer>
  );
}

// Styles
const PolicyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
`;

const PolicyTitle = styled.h1`
  color: #1a8940;
  font-family: "Caveat Brush", cursive;
  font-size: 48px;
  text-align: center;
  margin-bottom: 10px;
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #1a8940;
  font-family: "Caveat Brush", cursive;
  font-size: 28px;
  margin-bottom: 15px;
  border-bottom: 2px solid #ebbf4b;
  padding-bottom: 5px;
`;

const SectionText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 15px;

  a {
    color: #1a8940;
    text-decoration: underline;
  }
`;

const PolicyList = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
  margin-top: 10px;
`;

const PolicyListItem = styled.li`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 8px;
`;

const CookieLink = styled.a`
  color: #1a8940;
  text-decoration: underline;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #1a8940;

  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;
