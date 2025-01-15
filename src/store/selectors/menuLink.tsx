import { selector } from 'recoil'
import { menuState } from '../atoms/menuState'
import { Link, Route } from 'react-router-dom'

export const menuLink = selector({
  key: 'menuLik',
  get: ({ get }) => {
    const menus = get(menuState)
    return menus.map(item => {
      return (
        <Link
          to={`/${item.link}`}
          key={item.link}>
          {item.name}
        </Link>
      )
    })
  }
})

export const menuRoute = selector({
  key: 'menuRoute',
  get: ({ get }) => {
    const menus = get(menuState)
    return menus.map(item => {
      const Component = item.name
      console.log(Component)
      return (
        <Route
          path={`/${item.link}`}
          key={item.link}
          element={<Component />}></Route>
      )
    })
  }
})
