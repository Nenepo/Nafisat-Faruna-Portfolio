import React from 'react'

function Section({
  className,
  id,
  children,
}) {
  return (
    <section id={id} className={`w-full  relative py-10 bg-n-2 px-6 lg:px-32 lg:py-20  ${className || ""} `}>{children}</section>
  )
}

export default Section