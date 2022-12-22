import styled from 'styled-components';

export const HeroImage = styled.div`
    border-radius: 10px;
    right: 0;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://images.unsplash.com/photo-1541912058-fdc02fa1789d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80);
`;

export const HeroWrapper = styled.div`
    height: 80vh;
    position: relative;
    width: 100%;
`;

export const HeroContent = styled.div`
    display: flex;
    min-height: 100%;
    align-items: center;
`;

