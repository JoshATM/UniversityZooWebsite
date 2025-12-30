// Importing Modules
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Riget Zoo Adventures</FooterTitle>
          <FooterText>Experience wildlife like never before</FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLinks>
            <FooterLink onClick={() => navigate("/privacy-policy")}>Privacy Policy</FooterLink>
            <FooterLink onClick={() => navigate("/terms-of-service")}>Terms of Service</FooterLink>
            <FooterLink onClick={() => navigate("/cookie-policy")}>Cookie Policy</FooterLink>
            <FooterLink onClick={() => navigate("/accessibility")}>Accessibility</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>info@rigetzoo.co.uk</FooterText>
          <FooterText>privacy@rigetzoo.co.uk</FooterText>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <FooterCopyright>
          © 2025 Riget Zoo Adventures. All rights reserved.
        </FooterCopyright>
      </FooterBottom>
    </FooterContainer>
  );
}

// Styles
const FooterContainer = styled.footer`
  width: -webkit-fill-available;
  background: #1a8940;
  color: #ffffff;
  padding: 30px 20px 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  color: #ebbf4b;
  font-family: "Caveat Brush", cursive;
  font-size: 24px;
  margin-bottom: 15px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: #ffffff;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ebbf4b;
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 25px;
  padding-top: 20px;
  text-align: center;
`;

const FooterCopyright = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;
