import React, { useState } from 'react'

function Radio() {
  const multiVal = ['사과', '배', '포도']
  const [oneRa, setOneRa] = useState<string>('선택안함')
  const [mulRa, setMulRa] = useState<string>('선택안함')
  const handleRa = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMulRa(`${e.target.value}를 선택하였습니다.`)
  }
  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            value="선택되었습니다."
            onChange={e => {
              setOneRa(e.target.value)
            }}
          />
          한개버튼
        </label>
        <br />
        {oneRa}
      </div>
      <div>
        {multiVal.map(item => {
          return (
            <label key={item}>
              <input
                type="radio"
                value={item}
                name="fruit"
                onChange={handleRa}
              />
              {item}
            </label>
          )
        })}
        <br />
        {mulRa}
      </div>
    </>
  )
}

export default Radio
