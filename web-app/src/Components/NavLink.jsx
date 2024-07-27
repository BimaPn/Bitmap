import React from "react"
import PropTypes from "prop-types"
import { NavLink as NavBtn } from "react-router-dom"

const NavLink = ({
  title,
  //   btnType,
  containerStyles,
  textStyles,
  iconStart,
  iconEnd,
  path,
}) => {
  return (
    <NavBtn
      to={path}
      className={`${containerStyles} bg-primary flex justify-center items-center rounded-[14px]`}
    >
      <div style={{ width: "15%" }}>{iconStart}</div>

      <div>
        <span className={`text-white font-psemibold text-[17px] ${textStyles}`}>
          {title}
        </span>
      </div>

      <div style={{ width: "15%" }}>{iconEnd}</div>
    </NavBtn>
  )
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  handlePress: PropTypes.func,
  containerStyles: PropTypes.string,
  textStyles: PropTypes.string,
  btnType: PropTypes.string,
  isLoading: PropTypes.bool,
  iconStart: PropTypes.element,
  iconEnd: PropTypes.element,
  path: PropTypes.string,
}

export default NavLink
