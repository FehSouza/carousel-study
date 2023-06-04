import { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { ItemCarousel } from '..'
import * as S from './styles'

const itens = [{ text: 'Item 01' }, { text: 'Item 02' }, { text: 'Item 03' }, { text: 'Item 04' }, { text: 'Item 05' }]

const options = { root: null, threshold: 1 }

const totalItens = itens.length
const lastItem = itens.length - 1
const itemWidth = 200
const itemGap = 16
const itemSizeTotal = itemWidth + itemGap

export const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)

  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(Number(entry.target.id))
      })
    }, options)
  )

  const handlePrev = () => {
    if (current === 0) return

    boxRef.current?.scrollTo({
      left: boxRef.current.scrollLeft - itemWidth,
      behavior: 'smooth',
    })
  }

  const handleNext = () => {
    if (current === lastItem) return

    boxRef.current?.scrollTo({
      left: boxRef.current.scrollLeft + itemWidth,
      behavior: 'smooth',
    })
  }

  const handleClickCard = (i: number) => {
    if (i === current) return
    if (i < current) handlePrev()
    if (i > current) handleNext()
  }

  const handleClickDot = (i: number) => {
    boxRef.current?.scrollTo({
      left: i * itemSizeTotal,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => {
        boxRef.current?.scrollTo({
          left: prev === lastItem ? 0 : (prev + 1) * itemSizeTotal,
          behavior: 'smooth',
        })
        return prev + 1
      })
    }, 5000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <S.Container>
      {totalItens > 1 && <S.Arrow onClick={handlePrev}>{<MdKeyboardArrowLeft size={24} />}</S.Arrow>}

      <S.Content width={itemWidth} gap={itemGap} ref={boxRef}>
        {itens.map((item, i) => (
          <ItemCarousel key={i} id={i} text={item.text} itemWidth={itemWidth} observer={observer.current} onClick={handleClickCard} />
        ))}
      </S.Content>

      {totalItens > 1 && <S.Arrow onClick={handleNext}>{<MdKeyboardArrowRight size={24} />}</S.Arrow>}

      {totalItens > 1 && (
        <S.Dots>
          {itens.map((_, i) => (
            <S.Dot key={i} active={i === current} onClick={() => handleClickDot(i)} />
          ))}
        </S.Dots>
      )}
    </S.Container>
  )
}
