import { useState } from 'react'
import * as S from './styles'

const itens = [{ text: 'Item 01' }, { text: 'Item 02' }, { text: 'Item 03' }, { text: 'Item 04' }, { text: 'Item 05' }, { text: 'Item 06' }]

export const Carousel = () => {
  const [teste, setTeste] = useState(0)
  const [current, setCurrent] = useState(0)
  return (
    <>
      <button
        onClick={() => {
          if (current === 0) return

          setCurrent((prev) => prev - 1)

          setTeste((prev) => {
            if (current + 1 === 0) return +0
            if (current === itens.length - 1) return prev + 200
            return prev + 216
          })
        }}
      >
        -
      </button>
      <S.Container>
        {itens.map((item, i) => (
          <S.Item
            teste={teste}
            key={i}
            onClick={() => {
              setCurrent(i)

              setTeste((prev) => {
                if (i > current) {
                  if (i === 1) return -200
                  if (i === itens.length - 1) return prev - 200
                  return prev - 216
                }

                if (i < current) {
                  if (i === 0) return +0
                  if (i === itens.length - 2) return prev + 200
                  if (i === itens.length - 1) return prev
                  return prev + 216
                }

                return prev
              })
            }}
          >
            <S.Text>{item.text}</S.Text>
          </S.Item>
        ))}
      </S.Container>
      <button
        onClick={() => {
          if (current + 1 === itens.length) return
          setCurrent((prev) => prev + 1)
          setTeste((prev) => {
            if (current + 1 === 1) return -200
            if (current + 1 === itens.length - 1) return prev - 200
            return prev - 216
          })
        }}
      >
        +
      </button>
    </>
  )
}
