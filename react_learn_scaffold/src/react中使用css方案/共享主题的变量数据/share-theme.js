// StyledButton
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.fontSize};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// styled的高级特性：继承
const HYButton = styled(StyledButton)`
  transition: all ease-in 1s;
`

export default HYButton;
