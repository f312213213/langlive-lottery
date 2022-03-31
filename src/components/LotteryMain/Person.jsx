import React from 'react'
import PropTypes from 'prop-types'

function Person ({ name, type, sort }) {
  return (
      <>
        {
            type === 'result' &&
            <div className={'absolute left-4'}>
              {`${sort + 1}`}
            </div>
        }
        {name}
      </>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  sort: PropTypes.number
}

export default Person
