import { useEffect, useRef, useState } from 'react'

function RefTest() {
  const ipRef = useRef<HTMLInputElement>(null)
  const [iptxt, setIpText] = useState<string>('')
  const handleFocus = () => {
    ipRef.current.focus()
  }
  useEffect(() => {
    handleFocus()
  }, [])

  return (
    <div>
      <input
        type="text"
        ref={ipRef}
      />
      <button
        type="button"
        onClick={handleFocus}>
        포커스
      </button>
      <button
        type="button"
        onClick={() => {
          setIpText(ipRef.current.value)
        }}>
        입력
      </button>
      <div>출력: {iptxt}</div>
    </div>
  )
}

export default RefTest
