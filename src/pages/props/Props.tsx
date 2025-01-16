import { useState } from 'react'
import TextField from '@/components/textField/TextField'

function Props() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div>
      <TextField
        label="이름"
        hint="한글 이름을 입력해 주세요"
        value={name}
        onChange={setName}
      />
      <TextField
        label="나이"
        hint="나이는 숫자를 입력해 주세요"
        value={age}
        onChange={setAge}
      />
      <TextField
        label="이메일"
        value={email}
        onChange={setEmail}
        placeholder="이메일을 입력해주세요."
        name="Email"
        minLength={5}
        maxLength={24}
        autoComplete="email"
        required
      />
      <div>
        이름은 {name}, 나이는 {age}, 이메일은 {email}
      </div>
    </div>
  )
}

export default Props
