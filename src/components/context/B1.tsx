import { useState } from 'react'
import B2 from './B2'
import { ColorProvider } from '@/contexts/colorContext'

function B1() {
  const color = useState('green')
  return (
    <ColorProvider color={color}>
      <p>B1</p>
      <B2 />
    </ColorProvider>
  )
}

export default B1
