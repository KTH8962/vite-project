import React, { useState } from 'react'

function Checkbox() {
  const checkArray = ['apple', 'grape', 'melon']
  const [checked, setChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    setCheckedItems(prevCheckedItems =>
      checked
        ? [...prevCheckedItems, value]
        : prevCheckedItems.filter(item => item != value)
    )
  }
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={e => {
              setChecked(e.target.checked)
            }}
          />
          체크
        </label>
      </div>
      <div>
        {checkArray.map(item => {
          return (
            <label key={item}>
              <input
                type="checkbox"
                value={item}
                onChange={handleChecked}
              />
              {item}
            </label>
          )
        })}
        <br />
        {checkedItems && checkedItems.join(', ')}
      </div>
    </>
  )
}

export default Checkbox
