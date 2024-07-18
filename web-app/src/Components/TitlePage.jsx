import { PropTypes } from "prop-types"
import React from "react"

const TitlePage = ({ title, textStyles }) => {
  return (
    <h1 className={`${textStyles} text-primary font-pblack font-bold`}>
      {title}
    </h1>
  )
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  textStyles: PropTypes.string,
}

export default TitlePage
