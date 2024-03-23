import React from 'react';

const PokeballIcon = (style) => {
  return (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="78"
      height="79"
      viewBox="0 0 78 79"
      style= {style}
    >
      <defs>
        <filter
          id="filter-1"
          width="140%"
          height="140%"
          x="-20%"
          y="-20%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="path-2"
          d="M29.531 59.447c16.569 0 29.844-12.931 29.844-29.5C59.375 13.38 46.1 0 29.53 0 12.963 0 0 13.379 0 29.947c0 16.569 12.963 29.5 29.531 29.5z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-22 -372)">
          <g transform="translate(28 246)">
            <g transform="translate(3 132.5)">
              <g filter="url(#filter-1)" transform="translate(0 3)">
                <g transform="translate(.157 .5)">
                  <mask id="mask-3" fill="#fff">
                    <use xlinkHref="#path-2"></use>
                  </mask>
                  <use
                    fill="#CC0010"
                    transform="rotate(180 29.687 29.724)"
                    xlinkHref="#path-2"
                  ></use>
                  <path
                    fill="#E50012"
                    d="M31.733 52.427c14.278 0 26.585-11.138 26.585-24.878S46.011 2.67 31.733 2.67c-14.279 0-21.402 11.138-21.402 24.878 0 4.01 1.105 7.218 2.525 10.285 1.536 3.318 3.179 5.976 6.434 8.552 4.04 3.197 6.839 6.04 12.443 6.04z"
                    mask="url(#mask-3)"
                    transform="rotate(180 34.325 27.549)"
                  ></path>
                </g>
                <path
                  fill="#FFF"
                  d="M60 57.548c0-16.49-12.931-30-29.5-30-16.569 0-30 13.432-30 30 0 4.463 15-.124 30-.124s29.5 4.277 29.5.124z"
                  transform="rotate(180 30.25 43.524)"
                ></path>
                <circle
                  cx="30"
                  cy="30"
                  r="29"
                  stroke="#000"
                  strokeWidth="2"
                  transform="rotate(180 30 30)"
                ></circle>
                <g transform="translate(.496 22.562)">
                  <path fill="#000" d="M0 4.959H58.76V9.918H0z"></path>
                  <rect
                    width="14.876"
                    height="14.876"
                    x="22.686"
                    y="0"
                    fill="#000"
                    rx="7.438"
                  ></rect>
                  <rect
                    width="9.174"
                    height="9.174"
                    x="25.537"
                    y="2.727"
                    fill="#FFF"
                    rx="4.587"
                  ></rect>
                  <rect
                    width="7.174"
                    height="7.174"
                    x="26.537"
                    y="3.727"
                    stroke="#DCDCDC"
                    strokeWidth="2"
                    rx="3.587"
                  ></rect>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </>
  );
}

export default PokeballIcon;