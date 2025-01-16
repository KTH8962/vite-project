import A1 from '@/components/context/A1'
import B1 from '@/components/context/B1'
import { ColorProvider, CountProvider } from '@/contexts/colorContext'
import { useState } from 'react'

function Context() {
  const color = useState('red')
  return (
    <ColorProvider color={color}>
      <CountProvider>
        <A1 />
        <B1 />
      </CountProvider>
    </ColorProvider>
  )
}

export default Context
