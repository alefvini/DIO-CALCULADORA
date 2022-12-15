import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(192,192,192);
    background: radial-gradient(circle, rgba(192,192,192,1) 0%, rgba(116,106,106,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-intems: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-intems: center;
`