import React from 'react'
import PropTypes from 'prop-types'

import Person from './Person'
import NoPersonStamp from './NoPersonStamp'

function PeopleWindow ({ people, type }) {
  return (
      <ul className={'border-2 w-full sm:w-5/12 h-48 sm:h-96 divide-y overflow-y-auto'}>
        {
          people?.length > 0
            ? people.map((user, index) => <Person key={user.id} name={user.name} type={type} sort={index}/>)
            : type === 'result'
              ? <NoPersonStamp text={'沒有抽獎結果'} />
              : <NoPersonStamp text={'都抽光光了'} />
        }
      </ul>
  )
}

PeopleWindow.propTypes = {
  people: PropTypes.array,
  type: PropTypes.string
}

export default PeopleWindow
