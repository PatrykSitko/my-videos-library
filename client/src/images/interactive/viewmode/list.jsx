import React from 'react';

export default function ListSVG({ enabled, className, svg, ...other }) {
  const style = { fill: enabled ? 'black' : '#9b9b9b' };
  return (
    <div
      {...{
        className: `viewmode-list-svg${
          typeof className === 'string' ? ` ${className}` : ''
        }`,
        ...other
      }}
    >
      <svg
        {...{
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 60.123 60.123',
          ...svg
        }}
      >
        <g>
          <path
            {...style}
            d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"
          />
          <path
            {...style}
            d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
		C60.124,31.719,58.781,33.062,57.124,33.062z"
          />
          <path
            {...style}
            d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"
          />
          <circle {...style} cx="4.029" cy="11.463" r="4.029" />
          <circle {...style} cx="4.029" cy="30.062" r="4.029" />
          <circle {...style} cx="4.029" cy="48.661" r="4.029" />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
}
