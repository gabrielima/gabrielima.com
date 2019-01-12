import { css } from 'styled-components'

const sizes = {
  xl: 1170,
  lg: 992,
  md: 768,
  sm: 600,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  const size = sizes[label];
  acc[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)};
    }
  `;
  return acc
}, {});

// example of usage
// ${media.sm`
//   justify-content: space-between;
// `}

export default media;