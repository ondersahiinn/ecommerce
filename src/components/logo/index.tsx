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
        width="191"
        height="34"
        className="max-w-full"
      />
    </div>
  );
};
