interface onAutoPlayProps {
  setCurrent: (value: React.SetStateAction<number>) => void
  boxRef: React.RefObject<HTMLDivElement>
  time: number
  lastItem: number
  itemSizeTotal: number
}

export let autoPlayId: number

export const onAutoPlay = ({ setCurrent, boxRef, time, lastItem, itemSizeTotal }: onAutoPlayProps) => {
  autoPlayId = setInterval(() => {
    setCurrent((prev) => {
      boxRef.current?.scrollTo({
        left: prev === lastItem ? 0 : (prev + 1) * itemSizeTotal,
        behavior: 'smooth',
      })
      return prev + 1
    })
  }, time)

  return () => clearInterval(autoPlayId)
}
