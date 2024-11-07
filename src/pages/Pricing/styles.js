import styled from 'styled-components';

export const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const FAQSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 3rem;
  border-top: 1px solid ${props => props.theme.colors.darkGrey};

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const FAQItem = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;
