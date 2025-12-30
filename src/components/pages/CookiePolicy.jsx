// Importing Modules
import React from "react";
import styled from "styled-components";

// Cookie Policy
export default function CookiePolicy() {
  return (
    <PolicyContainer>
      <PolicyTitle>Cookie Policy</PolicyTitle>
      <LastUpdated>Last Updated: 30 December 2025</LastUpdated>

      <Section>
        <SectionText>
          This Cookie Policy explains how Riget Zoo Adventures uses cookies and similar 
          technologies on our website. By using our website, you consent to the use of 
          cookies as described in this policy, in compliance with the UK Privacy and 
          Electronic Communications Regulations (PECR) and UK GDPR.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>1. What are Cookies?</SectionTitle>
        <SectionText>
          Cookies are small pieces of data stored on your device (computer or mobile device) 
          when you browse websites. They are used to make websites work more efficiently and 
          to provide information to the website owners.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>2. Types of Cookies We Use</SectionTitle>
        
        <SubSection>
          <SubSectionTitle>Essential Cookies</SubSectionTitle>
          <SectionText>
            These cookies are necessary for the website to function properly. They enable 
            you to navigate our site and use its features. Without these cookies, certain 
            services on our website may not be available.
          </SectionText>
          <CookieTable>
            <thead>
              <tr>
                <TableHeader>Cookie Name</TableHeader>
                <TableHeader>Purpose</TableHeader>
                <TableHeader>Duration</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>cookieConsent</TableCell>
                <TableCell>Stores your cookie consent preferences</TableCell>
                <TableCell>1 year</TableCell>
              </tr>
              <tr>
                <TableCell>loggedIn</TableCell>
                <TableCell>Maintains your login session</TableCell>
                <TableCell>Session</TableCell>
              </tr>
            </tbody>
          </CookieTable>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Analytical/Performance Cookies</SubSectionTitle>
          <SectionText>
            These cookies allow us to analyse how visitors use our website, so we can 
            measure and improve its performance. For example, these cookies help us 
            understand which pages are the most and least popular and how visitors 
            move around the site.
          </SectionText>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Functionality Cookies</SubSectionTitle>
          <SectionText>
            These cookies enable enhanced functionality and personalisation, such as 
            remembering your preferences and settings. They may be set by us or by 
            third-party providers whose services we have added to our website.
          </SectionText>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Targeting/Advertising Cookies</SubSectionTitle>
          <SectionText>
            These cookies are used to deliver advertisements that are relevant to your 
            interests. They may be used by advertising networks to track your browsing 
            activity across different websites and to display targeted ads.
          </SectionText>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>3. Managing Cookies</SectionTitle>
        <SectionText>
          You can control and/or delete cookies as you wish. You can delete all cookies 
          that are already on your device and you can set most browsers to prevent them 
          from being placed. However, if you do this, you may have to manually adjust 
          some preferences every time you visit a site and some services and functionalities 
          may not work.
        </SectionText>
        <SectionText>
          <strong>To manage cookies in your browser:</strong>
        </SectionText>
        <PolicyList>
          <PolicyListItem>
            <strong>Chrome:</strong> Settings → Privacy and Security → Cookies
          </PolicyListItem>
          <PolicyListItem>
            <strong>Firefox:</strong> Settings → Privacy & Security → Cookies
          </PolicyListItem>
          <PolicyListItem>
            <strong>Safari:</strong> Preferences → Privacy → Cookies
          </PolicyListItem>
          <PolicyListItem>
            <strong>Edge:</strong> Settings → Cookies and Site Permissions
          </PolicyListItem>
        </PolicyList>
      </Section>

      <Section>
        <SectionTitle>4. Third-Party Cookies</SectionTitle>
        <SectionText>
          Some cookies are placed by third-party services that appear on our pages. We do 
          not control the dissemination of these cookies. You should check the third-party 
          websites for more information about these cookies.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>5. Your Consent</SectionTitle>
        <SectionText>
          When you first visit our website, you will be shown a cookie consent banner. 
          You can choose to accept or decline non-essential cookies. You can change your 
          preferences at any time by clearing your cookies and revisiting our site.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>6. Changes to This Policy</SectionTitle>
        <SectionText>
          We may update this Cookie Policy from time to time. Any changes will be posted 
          on this page with an updated revision date. We encourage you to review this 
          policy periodically for any updates.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>7. Contact Us</SectionTitle>
        <SectionText>
          If you have any questions about our Cookie Policy, please contact us at:
        </SectionText>
        <ContactInfo>
          <p>Riget Zoo Adventures</p>
          <p>Email: privacy@rigetzoo.co.uk</p>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>8. More Information</SectionTitle>
        <SectionText>
          For more information about cookies and how to manage them, visit{" "}
          <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
            www.aboutcookies.org
          </a>{" "}
          or{" "}
          <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer">
            the ICO's cookie guidance
          </a>.
        </SectionText>
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

const SubSection = styled.div`
  margin: 20px 0;
  padding-left: 15px;
  border-left: 3px solid #ebbf4b;
`;

const SubSectionTitle = styled.h3`
  color: #1a8940;
  font-size: 20px;
  margin-bottom: 10px;
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

const CookieTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
`;

const TableHeader = styled.th`
  background: #1a8940;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 14px;
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
