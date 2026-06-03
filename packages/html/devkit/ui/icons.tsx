import React from 'react';

/**
 * Shared SVG icon set for the devkit. Each icon inherits `currentColor` and
 * accepts a className so callers control sizing/color via CSS tokens.
 */

interface IconProps {
    className?: string;
}

function Icon({ className, children, viewBox = '0 0 16 16' }: IconProps & {
    children: React.ReactNode;
    viewBox?: string;
}) {
    return (
        <svg
            className={className}
            viewBox={viewBox}
            fill="currentColor"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
}

export const SearchIcon = ({ className }: IconProps) => (
    <Icon className={className}>
        <path d="M6.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.443 8.736.707.707-3.5 3.5-.707-.707 3.5-3.5z" />
    </Icon>
);

export const ChevronIcon = ({ className }: IconProps) => (
    <Icon className={className}>
        <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
    </Icon>
);

export const BackIcon = ({ className }: IconProps) => (
    <Icon className={className}>
        <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
    </Icon>
);

export const FileIcon = ({ className }: IconProps) => (
    <Icon className={className}>
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707L9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1z" />
    </Icon>
);

export const MotionIcon = ({ className }: IconProps) => (
    <Icon className={className}>
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
    </Icon>
);

export const ClockIcon = ({ className }: IconProps) => (
    <Icon className={className}>
        <path d="M8 3.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .252.434l2.5 1.5a.5.5 0 0 0 .496-.868L8.5 7.71V4a.5.5 0 0 0-.5-.5z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
    </Icon>
);

export const KendoLogo = ({ className }: IconProps) => (
    <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="20" height="20" rx="4" fill="#FF6358" />
        <path d="M4 4h5v12H4zM11 4h5v5h-5zM11 11h5v5h-5z" fill="white" />
    </svg>
);
