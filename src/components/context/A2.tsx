import { useColor } from '@/contexts/colorContext'

function A2() {
  const [color] = useColor()
  return <div style={{ color }}>A2</div>
}

export default A2
