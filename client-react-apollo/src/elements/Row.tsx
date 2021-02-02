import styled from 'styled-components';

const Row = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

    @media(min-width:768px){
        flex-direction: row;
    }
`;

export default Row