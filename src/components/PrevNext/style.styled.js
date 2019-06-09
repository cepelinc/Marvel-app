
import styled from 'styled-components';

export default {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    div {
      cursor: pointer;
      &:hover {
        color: blue
      }
    }
  `
}
