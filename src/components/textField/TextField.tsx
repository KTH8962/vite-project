import React from 'react'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  hint?: string
  value: string
  onChange: (value: string) => void
}

function TextField({
  label = '',
  hint = '',
  value,
  onChange,
  ...restProps
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value) // e.target.value를 (value: string) 형태로 전달
  }
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>
        {label && `${label}::`}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          {...restProps}
        />
      </label>
      {hint && (
        <div
          style={{
            marginTop: '4px',
            fontSize: '11px'
          }}>
          {hint}
        </div>
      )}
    </div>
  )
}

export default TextField
