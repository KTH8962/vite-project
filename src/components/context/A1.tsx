import { ColorContext, CountContext } from '@/contexts/colorContext'
import A2 from './A2'

function A1() {
  return (
    <>
      <ColorContext.Consumer>
        {colorState => {
          const [color] = colorState ?? colorState // !는 undefined나 null이 아닐경우가 확실할때
          //왼쪽 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자 반환한다.
          return <div style={{ color }}>A1</div>
        }}
      </ColorContext.Consumer>
      <CountContext.Consumer>
        {({ count }) => <div>{count}</div>}
      </CountContext.Consumer>
      <A2 />
    </>
  )
}

export default A1
