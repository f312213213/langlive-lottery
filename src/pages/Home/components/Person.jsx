import React from 'react'
import PropTypes from 'prop-types'

function Person ({ name, type, sort }) {
  return (
      <div className={'h-1/6 w-full flex items-center justify-center text-lg even:bg-indigo-100 odd:bg-indigo-200 relative'}>
        {
          type === 'result' &&
            <div className={'absolute left-4'}>
              {`${sort + 1}`}
            </div>
        }
        {name}
      </div>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  sort: PropTypes.number
}

export default Person
