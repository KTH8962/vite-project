import { atom } from 'recoil'

export const menuState = atom<Array<Record<string, string>>>({
  key: 'menuState',
  default: [
    { link: 'btnSelect', name: 'BtnSelect' },
    { link: 'textInput', name: 'TextInput' },
    { link: 'checkbox', name: 'Checkbox' },
    { link: 'radio', name: 'Radio' },
    { link: 'refTest', name: 'RefTest' },
    { link: 'props', name: 'Props' },
    { link: 'slot', name: 'Slot' },
    { link: 'context', name: 'Context' }
  ]
})
