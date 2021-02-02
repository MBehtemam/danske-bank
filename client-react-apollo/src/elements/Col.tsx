import styled from 'styled-components';
enum ColWidth {
    ONE=1,
    TWO=2,
    THREE=3,
    FOUR=4
}
interface ICol {
    colWidth:ColWidth
}
const Col = styled.div<ICol>`
    width: ${props=> {
        switch(props.colWidth){
            case ColWidth.ONE:
                return '25%';
            case ColWidth.TWO:
                return '50%';
            case ColWidth.THREE:
                return '75%';
            case ColWidth.FOUR:
                return '100%';
            default:
                return '25%';
        }
    }

};
@media(max-width: 768px){
    width:100%;
}
`
export default Col