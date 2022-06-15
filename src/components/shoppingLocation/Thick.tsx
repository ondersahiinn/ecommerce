import React from 'react';

export const Thick: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#fff">
      <defs>
        <path id="a" d="M0 0h10v10H0z" />
      </defs>
      <g fill="#fff" fillRule="evenodd">
        <g mask="url(#b)">
          <path d="M8.238.892l-5.03 7.186a.108.108 0 01-.177.004L1.75 6.375a.625.625 0 10-1 .75l1.28 1.706a1.358 1.358 0 002.202-.038l5.03-7.185A.625.625 0 108.238.892z" />
        </g>
      </g>
    </svg>
  );
};
