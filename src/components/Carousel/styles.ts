import styled from 'styled-components'

export const Container = styled.section`
  margin: auto;
  display: flex;
  gap: 16px;
  position: relative;
`

export const Arrow = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #0000001a;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    background-color: #00000033;
  }
`

export const Content = styled.div<{ width: number; gap: number }>`
  max-width: ${({ width, gap }) => `${width + 4 * gap}px`};
  padding: ${({ gap }) => `${gap}px`};
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: ${({ gap }) => `${gap}px`};
`

export const Dots = styled.ul`
  display: flex;
  position: absolute;
  bottom: -32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Dot = styled.li<{ active: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#00000033' : '#0000001a')};
  transition-duration: 350ms;
  cursor: pointer;
`
