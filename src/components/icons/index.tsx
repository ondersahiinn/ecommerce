import React from 'react';

interface IconsProps {
    className?: any;
    children?: React.ReactNode;
}
const Svg: React.FC<IconsProps> = (props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' stroke='none' className={`fill-current ${props.className}`}>
            {props.children}
        </svg>
    );
};

// Header Icons
export const UserIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <path d='M20.000,16.333 C20.000,18.123 18.406,20.000 16.667,20.000 C16.667,20.000 3.333,20.000 3.333,20.000 C1.594,20.000 -0.000,18.123 -0.000,16.333 C-0.000,12.390 2.594,10.285 6.038,9.445 C4.774,8.918 3.987,7.935 4.000,6.111 C4.024,2.786 6.692,0.010 10.003,0.010 C13.315,0.010 16.000,2.786 16.000,6.111 C16.000,7.936 15.173,8.905 13.896,9.427 C17.373,10.256 20.000,12.364 20.000,16.333 ZM14.000,5.500 C14.000,3.567 12.209,2.000 10.000,2.000 C7.791,2.000 6.000,3.567 6.000,5.500 C6.000,7.433 7.791,9.000 10.000,9.000 C12.209,9.000 14.000,7.433 14.000,5.500 ZM10.000,11.000 C5.830,11.000 2.000,12.255 2.000,15.667 C2.000,16.805 3.275,18.000 4.667,18.000 C4.667,18.000 15.333,18.000 15.333,18.000 C16.725,18.000 18.000,16.805 18.000,15.667 C18.000,12.255 14.170,11.000 10.000,11.000 Z' fillRule='evenodd' />
        </Svg>
    );
};
export const ThickIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <defs>
                <path id="a" d="M0 0h10v10H0z" />
            </defs>
            <g fill="#fff" fillRule="evenodd">
                <g mask="url(#b)">
                    <path d="M8.238.892l-5.03 7.186a.108.108 0 01-.177.004L1.75 6.375a.625.625 0 10-1 .75l1.28 1.706a1.358 1.358 0 002.202-.038l5.03-7.185A.625.625 0 108.238.892z" />
                </g>
            </g>
        </Svg>
    );
};
export const ArrowIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <path id='next_arrow_copy' width="100%" height="100%" data-name='next arrow copy' fillRule='evenodd' d='M1152,54l-2-1-5,4-5-4-2,1,7,6Z' transform='translate(-1138 -53)' />
        </Svg>
    );
};