import React from 'react';

const PlusIcon = (props) => {
    // const {} = props;
    return (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
        >
        <defs>
            <filter id="filter-1" width="140%" height="140%" x="-20%" y="-20%" filterUnits="objectBoundingBox">
            <feOffset
                dy="1"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation="1.5"
            ></feGaussianBlur>
            <feColorMatrix
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.502567745 0"
            ></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
            </filter>
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-295 -10)">
            <g filter="url(#filter-1)" transform="translate(301 16)">
                <rect
                width="40"
                height="40"
                x="0"
                y="0"
                fill="#44D7B6"
                rx="20"
                ></rect>
                <path
                fill="#000"
                fillRule="nonzero"
                d="M22.296875 31.8085938L22.296875 21.4765625 31.4160156 21.4765625 31.4160156 17.5458984 22.296875 17.5458984 22.296875 8 18.1191406 8 18.1191406 17.5458984 9 17.5458984 9 21.4765625 18.1191406 21.4765625 18.1191406 31.8085938z"
                ></path>
            </g>
            </g>
        </g>
        </svg>
        </>
        );
}

export default PlusIcon;