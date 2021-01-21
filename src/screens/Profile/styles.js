import styled from 'styled-components'


export const ProfileMain = styled.div`
    display:flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 800px;
    height:auto;
    background: var(--white);
    padding: 10px;
    border-radius: 5px;
`
export const TittleProfile = styled.span`
    display:flex;
    justify-content: center;
    width: 100%;
    font-size: 3em;
    margin: 10px 0px;
`

export const DivImg = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const CircleImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 80px;
    width: 80px;
`

export const ProfileImg  = styled.img`
    width: 100%;
    border-radius: 50px;
`

export const DivInfos = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow:row wrap;
    justify-content: flex-start;
    margin-bottom: 20px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 10px;
`

export const TittleCard = styled.span`
    color: #b3b3b3;
    font-size: 1em;
    width: 100%;
    height: 50px;
`

export const TextCard = styled.span`
    color: black;
    font-size: 2em;
`
