import React from 'react'
import PropTypes from 'prop-types'

function NoPersonStamp ({ text }) {
  return (
      <div className={'w-full h-full flex justify-center items-center text-gray-300 text-2xl select-none'}>
        {text}
      </div>
  )
}

NoPersonStamp.propTypes = {
  text: PropTypes.string
}

export default NoPersonStamp
