
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default {
  container: styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    div{
      display: flex;
        div{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        padding: .2em;
        font-size: 1em;
        text-align: center;
        background: red;
        color: white;
        padding: 5px;
        border-left: 1px solid #E8E8E8;
        img {
          width: 100%
        };
        span {
          text-decoration: underline;
        };
        p {
          font-size: 1em;
        }
      };

    }
  `,
  link: styled(Link)`
    text-align: right;
    font-size: 1em;
    padding: 5px
  `,
}
