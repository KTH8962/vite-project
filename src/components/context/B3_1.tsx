import { useCount } from '@/contexts/colorContext'

function B3_1() {
  const { count, increase, decrease } = useCount()
  return (
    <>
      <div>B3_1</div>
      <div>{count}</div>
      <button
        type="button"
        onClick={increase}>
        증가
      </button>
      <button
        type="button"
        onClick={decrease}>
        감소
      </button>
    </>
  )
}

export default B3_1
