import styled from 'styled-components'

export const ScreenReaderOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const ScreenReaderOnlyFocusable = styled.div`
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
`
