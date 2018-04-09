import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 40em) [main-end]
    minmax(1em, 1fr) [full-end];
`

export const ContainerMain = styled.div`
  grid-column: main;
`

export const ContainerFull = styled.div`
  display: inherit;
  grid-column: full;
  grid-template-columns: inherit;
`
