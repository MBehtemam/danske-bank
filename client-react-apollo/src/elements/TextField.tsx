import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

interface ITextField {
  isRequired: boolean;
  label: string;
  hasError?: boolean;
  error?:string,
  placeholder?: string;
  onChange?(event:ChangeEvent<{value:string}>):void,
  [propName: string]: any;
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0;
`;

const InputLabel = styled.label<{ isRequired: boolean }>`
  position: relative;
  display: block;
  margin: 0;
  font-weight: 400;
  color: #003755;
  margin-bottom: 0.5rem;
  position: relative;
  ${({ isRequired }) =>
    isRequired &&
    css`
      &:after {
        content: '*';
        font-weight: 700;
        color: red;
        position: absolute;
        top: 0;
      }
    `}
`;

const Input = styled.input<{ hasError?: boolean; placeholder?: string }>`
  display: block;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 400;
  color: #003755;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 2px;
  border-width:1px;
  border-style: solid;
  border-color:${({hasError})=> hasError ?' #fbb273':'rgba(0, 0, 0, 0.13)'};
  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border-color: #009edd;
    background-color: #fff;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  }
`;

const InputError = styled.div`
  background-color:#fbb273;
  display:block;
  padding: .7rem 1rem;
  margin-top: 1rem;
  color:#fff;
  position:relative;
  &:before{
    content:'';
    position:absolute;
    width: 0; 
    height: 0; 
    top:-8px;
    left:10px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fbb273; 
  }
`

const TextFiled = (props: ITextField) => (
  <InputGroup>
    <InputLabel isRequired={props.isRequired}>{props.label}</InputLabel>
    <Input
      onChange={(e) => props.onChange ? props.onChange(e) : null}
      hasError={props.hasError}
      placeholder={props.placeholder ? props.placeholder : ''}
    />
    {props.hasError ? <InputError>{props.error ? props.error : ''}</InputError>:null}
  </InputGroup>
);

export default TextFiled;
