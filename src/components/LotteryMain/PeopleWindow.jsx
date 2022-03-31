import React from 'react'
import PropTypes from 'prop-types'
import 'react-virtualized/styles.css'

import Person from './Person'
import NoPersonStamp from './NoPersonStamp'
import Virtualized from './Virtualized'

function PeopleWindow ({ people, type }) {
  const AllRows = ({ index, key, style }) => {
    AllRows.propTypes = {
      index: PropTypes.number,
      key: PropTypes.string,
      style: PropTypes.object
    }
    const renderClass = () => {
      return index % 2 === 0
        ? 'bg-indigo-200'
        : 'bg-indigo-100'
    }
    return (
        <Person key={key} style={style} user={people[index]} type={type} sort={index} className={renderClass()}/>
    )
  }

  return (
      <ul className={'border-2 w-full sm:w-5/12 h-48 sm:h-96 divide-y'}>
        {
          people?.length > 0
            ? <Virtualized rowRenderer={AllRows} list={people} />
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
