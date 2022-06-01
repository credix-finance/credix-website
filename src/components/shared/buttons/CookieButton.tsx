import { Button } from '@mui/material';
import * as React from 'react';

interface IProps {
  children: string
  className?: string;
  onClick?: (...args: any) => void
}

export const CookieButton = ({ children, className, onClick }: IProps) =>
  <Button variant="contained" className={`credix-button ${className}`} onClick={onClick}>{children}</Button>
