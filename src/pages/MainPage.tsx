import { useState } from 'react'
import './MainPage.scss'

function MainPage() {
  const [btn, setBtn] = useState(false)
  const [active, setActive] = useState(false)
  const [size, setSize] = useState(false)
  const getClassNames = (names: Record<string, boolean>) =>
    Object.keys(names)
      .filter(name => names[name])
      .join(' ')

  const classNames = getClassNames({
    btn,
    active,
    size
  })
  return (
    <>
      <h1 className={classNames}>Hello world!</h1>

      <button onClick={() => setBtn(!btn)}>Toggle 'btn'</button>
      <button onClick={() => setActive(!active)}>Toggle 'active'</button>
      <button onClick={() => setSize(!size)}>Toggle 'size'</button>
    </>
  )
}

export default MainPage
