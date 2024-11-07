import { StyledButton } from './styles';

export const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
