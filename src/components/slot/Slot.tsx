function Button({ children, loading = false, ...restProps }) {
  return (
    <button
      className={loading ? 'loading' : ''}
      {...restProps}>
      {children}
    </button>
  )
}

export default Button
