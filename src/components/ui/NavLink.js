import React from "react"
import { MotionText } from "../../theme/utils"
import LocalizedLink from "../ui/LocalizedLink"

const NavLink = props => {
  const { children, onClick, isLast, to = "/", ...rest } = props

  return (
    <MotionText
      mb={{ base: isLast ? 0 : 4, sm: 0 }}
      mr={[0, null, 12]}
      display="block"
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      <LocalizedLink to={to} variant="nav-link" onClick={onClick}>
        {children}
      </LocalizedLink>
    </MotionText>
  )
}

export default NavLink
