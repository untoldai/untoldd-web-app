import React from 'react'

const ShadowCard = ({ className, children }) => {
  return (
    <div className={`${className} p-2 shadow-2xl bg-white rounded-md`}>
      {children}
    </div>
  )
}

export default ShadowCard