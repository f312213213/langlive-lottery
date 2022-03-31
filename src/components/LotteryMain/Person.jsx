import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'

function Person ({ user, type, sort, style, className }) {
  const dispatch = useDispatch()

  const openPersonDialog = () => {
    return dispatch(actions.app.showPersonDialog(user))
  }

  return (
      <li style={style} onClick={openPersonDialog} className={`${className} h-full w-full flex items-center justify-center text-lg hover:bg-indigo-300 transition relative`}>
        {
          type === 'result' &&
            <div className={'absolute left-4'}>
              {`${sort + 1}`}
            </div>
        }
        {user.name}
      </li>
  )
}

Person.propTypes = {
  user: PropTypes.object,
  type: PropTypes.string,
  sort: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string
}

export default Person
