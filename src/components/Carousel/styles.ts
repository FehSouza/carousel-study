import styled from 'styled-components'

export const Container = styled.section`
  margin: auto;
  display: flex;
  max-width: 264px;
  padding: 16px;
  gap: 16px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 16px;
`

export const Item = styled.div<{ teste: number }>`
  min-width: 200px;
  max-width: 200px;
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
  transform: ${({ teste }) => `translateX(${teste}px)`};
  transition-duration: 350ms;
`

export const Text = styled.span`
  text-transform: uppercase;
`
