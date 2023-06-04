import styled from 'styled-components'

export const Item = styled.div<{ width: number }>`
  min-width: ${({ width }) => `${width}px`};
  max-width: ${({ width }) => `${width}px`};
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4f81ff45;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid #4f81ff21;
  border-radius: 16px;
  scroll-snap-align: center;
  cursor: pointer;
  user-select: none;
`

export const Text = styled.span`
  text-transform: uppercase;
`
