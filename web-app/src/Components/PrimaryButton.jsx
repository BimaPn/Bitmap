import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const PrimaryButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  iconStart,
  iconEnd,
  path,
}) => {
  return (
    <Link
      to={path}
      onClick={handlePress}
      className={`bg-primary rounded-[14px] min-h-[58px] flex justify-between items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <div style={{ width: "15%" }}>{iconStart}</div>

      <div>
        <span className={`text-white font-psemibold text-[17px] ${textStyles}`}>
          {title}
        </span>
      </div>

      <div style={{ width: "15%" }}>{iconEnd}</div>

      {isLoading && (
        <div style={{ marginLeft: "8px" }}>
          <span className="loader"></span>
        </div>
      )}
    </Link>
  )
}

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  handlePress: PropTypes.func,
  containerStyles: PropTypes.string,
  textStyles: PropTypes.string,
  isLoading: PropTypes.bool,
  iconStart: PropTypes.element,
  iconEnd: PropTypes.element,
  path: PropTypes.string,
}

// PrimaryButton.defaultProps = {
//   containerStyles: "",
//   textStyles: "",
//   isLoading: false,
//   iconStart: null,
//   iconEnd: null,
// }

export default PrimaryButton
