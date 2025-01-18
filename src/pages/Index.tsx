import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '@pages/MainPage'
import BtnSelect from '@/pages/btnSelect/BtnSelect'
import TextInput from '@/pages/textInput/TextInput'
import Checkbox from '@/pages/checkbox/Checkbox'
import Radio from '@/pages/radio/Radio'
import RefTest from '@/pages/refTest/RefTest'
import Props from '@/pages/props/Props'
import Slot from '@/pages/slot/slot'
import Context from '@/pages/context/Context'
import DefaultLayout from './layouts/DefaultLayout'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/btnSelect',
        element: <BtnSelect />
      },
      {
        path: '/textInput',
        element: <TextInput />
      },
      {
        path: '/checkbox',
        element: <Checkbox />
      },
      {
        path: '/radio',
        element: <Radio />
      },
      {
        path: '/refTest',
        element: <RefTest />
      },
      {
        path: '/props',
        element: <Props />
      },
      {
        path: '/slot',
        element: <Slot />
      },
      {
        path: '/context',
        element: <Context />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
