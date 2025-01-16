import React, { useContext, useState } from 'react'
import { createContext } from 'react'

type ColorState = [string, React.Dispatch<React.SetStateAction<string>>]

export const ColorContext = createContext<ColorState | null>(null)

export function ColorProvider({
  children,
  color
}: {
  children: React.ReactNode
  color: ColorState
}) {
  return <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
}

export function useColor() {
  return useContext(ColorContext)
}

type Data = {
  count: number
  increase: () => void
  decrease: () => void
}

export const CountContext = createContext<Data>({} as Data)

export function CountProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  const increase = () => setCount(c => c + 1)
  const decrease = () => setCount(c => c - 1)
  return (
    <CountContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CountContext.Provider>
  )
}

export function useCount() {
  return useContext(CountContext)
}
