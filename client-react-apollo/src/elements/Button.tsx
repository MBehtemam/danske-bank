import styled, {css,keyframes} from 'styled-components';
interface IButton{
    isLoading?:boolean
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button<IButton>`
  display:inline-block;
  min-height:48px;
  font-size:1rem;
  padding: 1rem 1rem;
  padding-left:${props => props.isLoading ? '3rem' :'1rem'};
  line-height:1.1rem;
  width:auto;
  max-width:100%;
  margin-top:.5rem;
  text-decoration:none;
  border:none;
  border-radius:1000px;
  cursor:pointer;
  position:relative;
  /* Primary Section */
  color:#fff;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.02) 7%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.12) 100%);
  background-color:#009edd;
  /* End of Primary Section */
  &:disabled{
    border-color: #e0e3e4;
    background-color: #eff0f1;
    color:#93989c;
    pointer-events:none;
  }
  ${({ isLoading }) =>
    isLoading &&
    css`
      &:after,&:before {
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        border: 10px solid transparent;
        border-top-color: #3498db;
      }
      &:before{
        z-index: 100;
        animation: ${rotate} 1s infinite;
      }
      &:after{
        border: 10px solid #ccc; 
      }
    `}
`;
export default Button