import { Button } from '@mui/material';
import * as React from 'react';

interface IProps {
  children: string
  onClick?: () => void
  className?: string;
}

export const CredixButton = ({ children, onClick, className }: IProps) =>
  <Button variant="contained" className={`credix-button ${className}`} onClick={onClick}>{children}</Button>
