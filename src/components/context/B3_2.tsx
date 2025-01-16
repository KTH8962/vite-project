import { useColor } from '@/contexts/colorContext'

function B3_2() {
  const [color] = useColor()
  return <div style={{ color }}>B3_2</div>
}

export default B3_2
