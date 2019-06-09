
import styled from 'styled-components';

export default {
  container: styled.div`
    flex: 1;
    margin: 2%;
    box-shadow: 0px 0px 10px 10px rgba(196,196,196,1);
    overflow-y: auto;
  `,
  title: styled.h1`
    background: blue;
    margin: 0;
    padding: 20px;
    color: white;
    text-align: center;
  `,
  detailContainer: styled.div`
    display: flex;
    justify-content: space-around;

  `,
  item: styled.div`
    flex: .33;
    background: #ECECEC;
    padding: 20px;
    margin: 10px;
    height: 78vh;

    img{
      width: 100%
    }
  `
}
