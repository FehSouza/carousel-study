import { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import * as S from './styles'

const itens = [{ text: 'Item 01' }, { text: 'Item 02' }, { text: 'Item 03' }, { text: 'Item 04' }, { text: 'Item 05' }]

export const Carousel = () => {
  const [pixels, setPixels] = useState(0)
  const [current, setCurrent] = useState(0)

  const totalItens = itens.length
  const lastItem = itens.length - 1
  const itemWidth = 250
  const itemGap = 24
  const itemSizeTotal = itemWidth + itemGap

  const handlePrev = () => {
    if (current === 0) return

    setCurrent((prev) => prev - 1)
    setPixels((prev) => {
      if (current === 1) return 0
      if (current === lastItem) return prev + itemWidth
      return prev + itemSizeTotal
    })
  }

  const handleNext = () => {
    if (current === lastItem) return

    setCurrent((prev) => prev + 1)
    setPixels((prev) => {
      if (totalItens === 2) return -itemWidth + itemGap
      if (current + 1 === 1) return -itemWidth
      if (current + 1 === lastItem) return prev - itemWidth
      return prev - itemSizeTotal
    })
  }

  const handleClickCard = (i: number) => {
    if (i === current) return
    if (i < current) handlePrev()
    if (i > current) handleNext()
  }

  const handleClickDot = (i: number) => {
    setCurrent(i)
    setPixels(() => {
      if (i === 0) return 0
      if (i === lastItem) return lastItem * -itemSizeTotal + 2 * itemGap
      if (i === 1) return -itemWidth
      return i * -itemSizeTotal + itemGap
    })
  }

  return (
    <S.Container>
      {totalItens > 1 && <S.Arrow onClick={handlePrev}>{<MdKeyboardArrowLeft size={24} />}</S.Arrow>}

      <S.Content width={itemWidth} gap={itemGap}>
        {itens.map((item, i) => (
          <S.Item key={i} pixels={pixels} width={itemWidth} onClick={() => handleClickCard(i)}>
            <S.Text>{item.text}</S.Text>
          </S.Item>
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
