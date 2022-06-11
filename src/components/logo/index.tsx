import React from 'react';
import Image from 'next/image';
interface Props {
  className?: string;
}
export const Logo: React.FC<Props> = (props) => {
  return (
    <div {...props}>
      <Image
        src="/icons/logo.svg"
        alt="Hepsiburada"
        width="192"
        height="34"
        className="w-full"
      />
    </div>
  );
};
