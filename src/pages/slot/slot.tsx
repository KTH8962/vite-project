import Button from '@/components/slot/Slot'
import { useState } from 'react'

function Buttons() {
  const [loading] = useState<boolean>(false)
  return (
    <>
      <Button>취소</Button>
      <Button loading={loading}>
        확인
        <br />
        체크
      </Button>
    </>
  )
}

export default Buttons
