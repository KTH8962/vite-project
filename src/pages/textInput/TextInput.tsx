import { useState } from 'react'

function TextInput() {
  const style = {
    marginTop: '30px'
  }
  const [oneText, setOneText] = useState('')
  return (
    <>
      <div style={style}>
        <textarea
          value={oneText}
          onChange={e => {
            setOneText(e.target.value)
            console.log(oneText)
          }}
        />
      </div>
      <div>{oneText}</div>
      <pre>{oneText}</pre>
    </>
  )
}

export default TextInput
