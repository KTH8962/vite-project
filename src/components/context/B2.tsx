import { useColor } from '@/contexts/colorContext'
import B3_1 from './B3_1'
import B3_2 from './B3_2'

function B2() {
  const [color, setColor] = useColor()
  return (
    <>
      <p style={{ color }}>B2</p>
      <button
        onClick={() => {
          setColor('blue')
        }}>
        변경
      </button>
      <B3_1 />
      <B3_2 />
    </>
  )
}

export default B2
