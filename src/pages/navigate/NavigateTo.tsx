import { useNavigate } from 'react-router-dom'

// To 객체의 타입(참고용)
interface To {
  pathname?: string
  search?: string
  hash?: string
}

export default function GoTo() {
  const navigate = useNavigate()
  const query = {
    name: 'Neo',
    age: '85'
  }
  const hash = '#h1-title'

  // 직접 작성
  navigate('/signin?name=Neo&age=22#h1-title')

  // URLSearchParams 사용
  navigate(`/signin?${new URLSearchParams(query).toString()}${hash}`)

  // 객체 사용
  const to: To = {
    pathname: '/signin',
    search: new URLSearchParams(query).toString(),
    hash
  }
  navigate(to)
}
