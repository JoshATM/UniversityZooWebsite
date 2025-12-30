// Importing Modules
import React from "react";
import styled from "styled-components";

export default function TermsOfService() {
  return (
    <TermsContainer>
      <TermsTitle>Terms of Service</TermsTitle>
      <LastUpdated>Last Updated: 27 December 2025</LastUpdated>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <SectionText>
          Welcome to Riget Zoo Adventures. These Terms of Service ("Terms") govern your use 
          of our website and services. By accessing our website or purchasing tickets, you 
          agree to be bound by these Terms in accordance with UK law, including the Consumer 
          Rights Act 2015 and the Consumer Contracts Regulations 2013.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>2. Company Information</SectionTitle>
        <SectionText>
          Riget Zoo Adventures is operated in the United Kingdom. For any queries regarding 
          these Terms, please contact us at: info@rigetzoo.co.uk
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>3. Ticket Purchases</SectionTitle>
        <SectionText>
          <strong>3.1 Contract Formation:</strong> A binding contract is formed when we send 
          you a confirmation email after you complete your purchase.
        </SectionText>
        <SectionText>
          <strong>3.2 Pricing:</strong> All prices are displayed in GBP (£) and include VAT 
          where applicable. We reserve the right to change prices, but any changes will not 
          affect orders already confirmed.
        </SectionText>
        <SectionText>
          <strong>3.3 Payment:</strong> Payment must be made at the time of booking. We accept 
          major credit and debit cards.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>4. Cancellation and Refunds</SectionTitle>
        <SectionText>
          Under the Consumer Contracts Regulations 2013, you have the following rights:
        </SectionText>
        <TermsList>
          <TermsListItem>
            <strong>14-Day Cancellation Period:</strong> You may cancel within 14 days of 
            purchase for a full refund, provided the visit date has not passed.
          </TermsListItem>
          <TermsListItem>
            <strong>Exceptions:</strong> Once you have visited the zoo or the experience has 
            been fully performed, your right to cancel ends.
          </TermsListItem>
          <TermsListItem>
            <strong>How to Cancel:</strong> Contact us at refunds@rigetzoo.co.uk with your 
            booking reference to request a cancellation.
          </TermsListItem>
          <TermsListItem>
            <strong>Refund Timeline:</strong> Refunds will be processed within 14 days of 
            receiving your cancellation request.
          </TermsListItem>
        </TermsList>
      </Section>

      <Section>
        <SectionTitle>5. Visitor Conduct</SectionTitle>
        <SectionText>
          All visitors must adhere to the following rules for the safety of animals, staff, 
          and other guests:
        </SectionText>
        <TermsList>
          <TermsListItem>Do not feed animals unless in designated feeding areas</TermsListItem>
          <TermsListItem>Do not climb barriers or enter restricted areas</TermsListItem>
          <TermsListItem>Supervise children at all times</TermsListItem>
          <TermsListItem>Do not use flash photography in sensitive animal areas</TermsListItem>
          <TermsListItem>Follow all staff instructions and signage</TermsListItem>
          <TermsListItem>No smoking or vaping except in designated areas</TermsListItem>
        </TermsList>
        <SectionText>
          We reserve the right to refuse entry or remove any visitor who breaches these rules 
          without refund.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>6. Liability</SectionTitle>
        <SectionText>
          <strong>6.1 Our Liability:</strong> We accept liability for death or personal injury 
          caused by our negligence, as well as for fraud or fraudulent misrepresentation. 
          We do not exclude liability where it would be unlawful to do so under the Consumer 
          Rights Act 2015.
        </SectionText>
        <SectionText>
          <strong>6.2 Limitation:</strong> Subject to the above, our total liability to you 
          shall not exceed the price paid for your tickets.
        </SectionText>
        <SectionText>
          <strong>6.3 Your Responsibility:</strong> You are responsible for your personal 
          belongings and for supervising any children in your care.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>7. Intellectual Property</SectionTitle>
        <SectionText>
          All content on this website, including text, images, logos, and graphics, is owned 
          by Riget Zoo Adventures and protected by UK copyright and trademark laws. You may 
          not reproduce, distribute, or use any content without our written permission.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>8. Website Use</SectionTitle>
        <SectionText>
          <strong>8.1 Account Security:</strong> You are responsible for maintaining the 
          confidentiality of your account credentials and for all activities under your account.
        </SectionText>
        <SectionText>
          <strong>8.2 Prohibited Uses:</strong> You must not use our website for any unlawful 
          purpose, to transmit harmful content, or to attempt to gain unauthorised access to 
          our systems.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>9. Data Protection</SectionTitle>
        <SectionText>
          We process your personal data in accordance with our{" "}
          <PolicyLink href="/privacy-policy">Privacy Policy</PolicyLink> and UK GDPR. 
          By using our services, you acknowledge that you have read and understood our 
          data processing practices.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>10. Dispute Resolution</SectionTitle>
        <SectionText>
          If you have a complaint, please contact us first at complaints@rigetzoo.co.uk. 
          We will try to resolve any disputes through negotiation.
        </SectionText>
        <SectionText>
          If we cannot resolve a dispute, you may refer the matter to an Alternative 
          Dispute Resolution (ADR) scheme or take action through the UK courts.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>11. Governing Law</SectionTitle>
        <SectionText>
          These Terms are governed by the laws of England and Wales. Any disputes shall be 
          subject to the exclusive jurisdiction of the courts of England and Wales, without 
          prejudice to your statutory rights as a consumer.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>12. Changes to Terms</SectionTitle>
        <SectionText>
          We may update these Terms from time to time. Changes will be posted on this page 
          with an updated revision date. Continued use of our services constitutes acceptance 
          of the revised Terms.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>13. Contact Us</SectionTitle>
        <SectionText>For any questions about these Terms, contact us at:</SectionText>
        <ContactInfo>
          <p>Riget Zoo Adventures</p>
          <p>Email: info@rigetzoo.co.uk</p>
          <p>Customer Service: support@rigetzoo.co.uk</p>
        </ContactInfo>
      </Section>
    </TermsContainer>
  );
}

// Styles
const TermsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
`;

const TermsTitle = styled.h1`
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
`;

const TermsList = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
  margin-top: 10px;
`;

const TermsListItem = styled.li`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 8px;
`;

const PolicyLink = styled.a`
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
