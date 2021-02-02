import styled from 'styled-components';
enum AlertType {
    SUCCESS="success",
    WARNING="warning"
}
const Alert = styled.div<{type:AlertType}>`
  height: 42px;
  padding: 5px;
  background-color: #fff3ca;
  display: flex;
  align-items: center;
  border-left-width: 10px;
  border-left-style:solid;
  border-left-color: ${(({type})=> type=== AlertType.SUCCESS ? 'green' : type === AlertType.WARNING ? 'red' : 'transparent')}
  `;
export {AlertType}
export default Alert