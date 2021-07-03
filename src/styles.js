import styled from 'styled-components';
import { green } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.25rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 0.5rem;
  background-color: ${green[10]};
  color: ${green[80]};
  border-radius: 10px;
  font-weight: bold;
`;