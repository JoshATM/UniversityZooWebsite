// Importing Modules
import React from "react";
import styled from "styled-components";

export default function AccessibilityStatement() {
  return (
    <AccessibilityContainer>
      <AccessibilityTitle>Accessibility Statement</AccessibilityTitle>
      <LastUpdated>Last Updated: 27 December 2025</LastUpdated>

      <Section>
        <SectionTitle>1. Our Commitment</SectionTitle>
        <SectionText>
          Riget Zoo Adventures is committed to ensuring digital accessibility for people with 
          disabilities. We are continually improving the user experience for everyone and 
          applying relevant accessibility standards in compliance with the Equality Act 2010 
          and the Public Sector Bodies (Websites and Mobile Applications) Accessibility 
          Regulations 2018.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>2. Accessibility Standards</SectionTitle>
        <SectionText>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
          These guidelines explain how to make web content more accessible for people with 
          disabilities and more user-friendly for everyone.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>3. Accessibility Features</SectionTitle>
        <SectionText>We have implemented the following accessibility features on our website:</SectionText>
        <AccessibilityList>
          <AccessibilityListItem>
            <strong>Keyboard Navigation:</strong> All pages can be navigated using a keyboard
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Alt Text:</strong> Images include descriptive alternative text
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Colour Contrast:</strong> We maintain sufficient colour contrast for readability
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Resizable Text:</strong> Text can be resized up to 200% without loss of functionality
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Clear Structure:</strong> Proper heading hierarchy and semantic HTML
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Focus Indicators:</strong> Visible focus indicators for interactive elements
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Skip Links:</strong> Skip navigation links for screen reader users
          </AccessibilityListItem>
        </AccessibilityList>
      </Section>

      <Section>
        <SectionTitle>4. Known Limitations</SectionTitle>
        <SectionText>
          While we strive for comprehensive accessibility, some areas may have limitations:
        </SectionText>
        <AccessibilityList>
          <AccessibilityListItem>
            Some older PDF documents may not be fully accessible
          </AccessibilityListItem>
          <AccessibilityListItem>
            Third-party content may not meet our accessibility standards
          </AccessibilityListItem>
          <AccessibilityListItem>
            Some interactive maps may require additional assistance
          </AccessibilityListItem>
        </AccessibilityList>
        <SectionText>
          We are actively working to address these issues and improve our accessibility.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>5. Physical Accessibility at the Zoo</SectionTitle>
        <SectionText>
          Riget Zoo Adventures provides the following physical accessibility features:
        </SectionText>
        <AccessibilityList>
          <AccessibilityListItem>
            <strong>Wheelchair Access:</strong> Paved pathways throughout the zoo suitable for wheelchairs
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Wheelchair Hire:</strong> Free wheelchairs available at the main entrance
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Accessible Toilets:</strong> Located throughout the zoo with Changing Places facilities
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Blue Badge Parking:</strong> Designated accessible parking near the entrance
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Assistance Animals:</strong> Guide dogs and assistance dogs are welcome
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Sensory Guides:</strong> Available for visitors with sensory needs
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Quiet Spaces:</strong> Designated quiet areas for visitors who need a break
          </AccessibilityListItem>
        </AccessibilityList>
      </Section>

      <Section>
        <SectionTitle>6. Concessions and Discounts</SectionTitle>
        <SectionText>
          We offer the following accessibility-related concessions:
        </SectionText>
        <AccessibilityList>
          <AccessibilityListItem>
            <strong>Free Carer Entry:</strong> Essential carers receive free admission with proof of carer status
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Disabled Visitors:</strong> Discounted admission for visitors with disabilities
          </AccessibilityListItem>
          <AccessibilityListItem>
            <strong>Access Card:</strong> We accept Nimbus Disability Access Card
          </AccessibilityListItem>
        </AccessibilityList>
      </Section>

      <Section>
        <SectionTitle>7. Assistive Technologies</SectionTitle>
        <SectionText>
          Our website is designed to be compatible with the following assistive technologies:
        </SectionText>
        <AccessibilityList>
          <AccessibilityListItem>Screen readers (JAWS, NVDA, VoiceOver)</AccessibilityListItem>
          <AccessibilityListItem>Screen magnification software</AccessibilityListItem>
          <AccessibilityListItem>Speech recognition software</AccessibilityListItem>
          <AccessibilityListItem>Operating system accessibility features</AccessibilityListItem>
        </AccessibilityList>
      </Section>

      <Section>
        <SectionTitle>8. Reporting Accessibility Issues</SectionTitle>
        <SectionText>
          If you encounter any accessibility barriers on our website or at our venue, please 
          let us know. We take accessibility feedback seriously and will work to address issues 
          promptly.
        </SectionText>
        <ContactInfo>
          <p><strong>Email:</strong> accessibility@rigetzoo.co.uk</p>
          <p><strong>Phone:</strong> Available on request for accessibility queries</p>
          <p><strong>Response Time:</strong> We aim to respond within 5 working days</p>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>9. Enforcement Procedure</SectionTitle>
        <SectionText>
          If you are not satisfied with our response to your accessibility concern, you can 
          contact the Equality Advisory Support Service (EASS) at{" "}
          <a href="https://www.equalityadvisoryservice.com" target="_blank" rel="noopener noreferrer">
            www.equalityadvisoryservice.com
          </a>
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>10. Continuous Improvement</SectionTitle>
        <SectionText>
          We are committed to maintaining and improving our accessibility. We regularly:
        </SectionText>
        <AccessibilityList>
          <AccessibilityListItem>Conduct accessibility audits of our website</AccessibilityListItem>
          <AccessibilityListItem>Train staff on digital and physical accessibility</AccessibilityListItem>
          <AccessibilityListItem>Consult with disability organisations</AccessibilityListItem>
          <AccessibilityListItem>Update this statement annually or when significant changes occur</AccessibilityListItem>
        </AccessibilityList>
      </Section>
    </AccessibilityContainer>
  );
}

// Styles
const AccessibilityContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
`;

const AccessibilityTitle = styled.h1`
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

const AccessibilityList = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
  margin-top: 10px;
`;

const AccessibilityListItem = styled.li`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 8px;
`;

const ContactInfo = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #1a8940;
  margin-top: 15px;

  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;
