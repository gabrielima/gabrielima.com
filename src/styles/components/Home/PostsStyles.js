import styled from 'styled-components';

const PostsList = styled.ul`
  display: flex;
  align-items: center;
  justify-items: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

PostsList.Item = styled.li`
  display: flex;
  flex: 1 0 30%;
  margin-bottom: 20px;
`;

export default PostsList;