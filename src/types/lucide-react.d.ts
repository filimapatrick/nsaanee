// Temporary module declaration for lucide-react
// This file provides a minimal typing shim so the project's TypeScript
// typecheck passes when the package does not ship types.
declare module 'lucide-react' {
  import * as React from 'react';
  type IconProps = React.ComponentProps<'svg'> & { size?: number };
  export const Twitter: React.FC<IconProps>;
  export const Facebook: React.FC<IconProps>;
  export const Linkedin: React.FC<IconProps>;
  export const Github: React.FC<IconProps>;
  export const Instagram: React.FC<IconProps>;
  export const X: React.FC<IconProps>;
  export default {} as { [key: string]: React.FC<IconProps> };
}
