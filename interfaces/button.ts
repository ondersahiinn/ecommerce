export interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  theme: ButtonThemes;
  className?: any;
  size?: ButtonSizes;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  onClick?: () => void;
}
export type ButtonThemes =
  | 'Default'
  | 'Primary'
  | 'Variant'
  | 'Secondary'
  | 'BorderedPrimary'
  | 'BorderedDefault'
  | 'GhostPrimary'
  | 'GhostDefault'
  | 'Success'
  | 'Danger';

export type ButtonSizes = 'Large' | 'Default' | 'Small' | 'Tiny';
