import styled from 'styled-components';

export const NavBar = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const MenusContainer = styled.ul`
  display: inline-block;
`

export const MenuUserContainer = styled.div`
  display: inline-block;
  float: right;
`

export const MenuItem = styled.li`
  display: inline;
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;

export const TableWrapper = styled.div`
  margin: 0 auto;
  width: 50%;

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  &&, th, td {
    border: 1px solid black
  }
`

