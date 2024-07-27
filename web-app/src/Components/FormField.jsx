import React, { useState } from "react"
import PropTypes from "prop-types"
import { icons } from "../constants"

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  titleStyles,
  otherStyles,
  iconStart,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`space-y-2 ${otherStyles}`}>
      <label
        className={`text-base ${titleStyles} font-semibold font-psemibold text-semiDark`}
      >
        {title}
      </label>

      <div className="w-full h-14 px-4 bg-black-100 rounded-[14px] bg-semiLight focus-within:border-2 focus-within:border-secondary flex items-center">
        {iconStart && <div className="mr-2">{iconStart}</div>}
        <input
          className="flex-1 placeholder-[#7B7B8B] text-black font-pmedium text-base bg-transparent border-none outline-none"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChangeText(e.target.value)}
          type={title === "Password" && !showPassword ? "password" : "text"}
          {...props}
        />

        {title === "Password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
          >
            <img
              src={!showPassword ? icons.eye : icons.eyeHide}
              alt="Toggle Password Visibility"
              className="w-[25px] h-[25px]"
            />
          </button>
        )}
      </div>
    </div>
  )
}

FormField.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  titleStyles: PropTypes.string,
  placeholder: PropTypes.string,
  handleChangeText: PropTypes.func.isRequired,
  otherStyles: PropTypes.string,
  iconStart: PropTypes.element,
}

FormField.defaultProps = {
  placeholder: "",
  otherStyles: "",
  iconStart: null,
}

export default FormField
