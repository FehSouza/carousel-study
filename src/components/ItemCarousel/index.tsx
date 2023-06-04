import { useEffect, useRef } from 'react'
import * as S from './styles'

interface ItemCarouselProps {
  id: number
  text: string
  itemWidth: number
  observer: IntersectionObserver
  onClick: (id: number) => void
}

export const ItemCarousel = ({ id, text, itemWidth, observer, onClick }: ItemCarouselProps) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elementToObserve = itemRef.current

    if (elementToObserve) observer.observe(elementToObserve)
    return () => {
      if (elementToObserve) observer.unobserve(elementToObserve)
    }
  }, [observer])

  return (
    <S.Item ref={itemRef} id={`${id}`} width={itemWidth} onClick={() => onClick(id)}>
      <S.Text>{text}</S.Text>
    </S.Item>
  )
}
