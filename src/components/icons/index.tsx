import React from 'react';

interface IconsProps {
    className?: any;
    onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
    children?: React.ReactNode;
}
const Svg: React.FC<IconsProps> = (props) => {
    const { className, onClick, children } = props;
    return (
        <svg xmlns='http://www.w3.org/2000/svg' stroke='none' className={`fill-current ${props.className}`} onClick={props.onClick} >
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
            <path fill="currentColor" fillRule="nonzero" d="M13.927 2.2l-6.845 9.289a1.011 1.011 0 0 1-1.43.188L.764 7.769a1 1 0 0 1 1.25-1.562L6.09 9.468l6.227-8.451a1 1 0 1 1 1.61 1.183z"></path>
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
export const CartIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <path id='basket_icon' data-name='basket icon' strokeWidth="2px" fillRule='evenodd' d='M1222,54c0.03-.719-0.31-2.031-1.44-2h-10.84l-0.81-2.806A1.6,1.6,0,0,0,1207.48,48h-2.47a0.879,0.879,0,0,0-1.01.981v0.193a0.956,0.956,0,0,0,1.19.887l0.89,0,1.76,6.276A2.174,2.174,0,0,0,1210,58h9a2.155,2.155,0,0,0,2-1Zm-12.99,10.5a1.5,1.5,0,1,0,1.5-1.5A1.5,1.5,0,0,0,1209.01,64.5Zm7,0a1.49,1.49,0,1,0,1.49-1.5A1.5,1.5,0,0,0,1216.01,64.5Z' transform='translate(-1203 -47)' />
        </Svg>
    );
};
export const DropdownIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <g fill="none" fillRule="evenodd"><path d="M0 0H20V20H0z" transform="translate(.262)"></path><path fill="#484848" d="M8.09 8.333c-.617 0-1.01.082-1.18.244-.254.244-.325.853 0 1.179l2.5 2.5c.326.325.854.325 1.18 0l2.5-2.5c.325-.326.259-.935 0-1.179-.174-.162-.567-.244-1.18-.244H8.09z" transform="translate(.262)"></path></g>
        </Svg>
    );
};
export const SearchIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <path fillRule="nonzero" d="M14.653 13.165l5.039 5.038a1.053 1.053 0 1 1-1.489 1.489l-5.038-5.038a8.12 8.12 0 1 1 1.488-1.489zm-4.086.585A6.014 6.014 0 1 0 5.863 2.68a6.014 6.014 0 0 0 4.704 11.07z"></path>
        </Svg>
    );
};
export const CloseIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>
            <path fillRule="evenodd" d="M6.864 5.846a.12.12 0 0 1 0-.17L11.31 1.23A.72.72 0 1 0 10.29.212L5.846 4.656a.12.12 0 0 1-.17 0L1.229.212A.72.72 0 1 0 .211 1.23l4.445 4.446a.12.12 0 0 1 0 .17L.211 10.292a.72.72 0 1 0 1.018 1.018l4.446-4.446a.12.12 0 0 1 .17 0l4.446 4.446a.72.72 0 0 0 1.018-1.018L6.864 5.846z"></path>
        </Svg>
    );
};
export const SliderArrowIcon: React.FC<IconsProps> = (props) => {
    return (
        <Svg {...props}>

            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </Svg>
    );
};
