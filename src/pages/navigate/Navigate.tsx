import { useNavigate } from 'react-router-dom'

function Navigate() {
  const navigate = useNavigate()
  const push = () => {
    navigate('/radio')
  }
  const replace = () => {
    navigate('/radio', { replace: true })
  }
  const go = (n: number) => {
    navigate(n)
  }
  return (
    <>
      <button
        type="button"
        onClick={push}>
        페이지 이동
      </button>
      <button
        type="button"
        onClick={replace}>
        페이지 이동(뒤로가기 불가)
      </button>
      <button
        type="button"
        onClick={() => go(1)}>
        앞으로 가기
      </button>
      <button
        type="button"
        onClick={() => go(-1)}>
        뒤로 가기
      </button>
    </>
  )
}

export default Navigate
