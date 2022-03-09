import styled from 'styled-components';

const headerHeight = '80px';
const footerHeight = '87px';

const Root = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  min-heigth: 100%;

  main {
    min-heigth: calc(100% - ${headerHeight} - ${footerHeight})
  }
`;

export default Root;