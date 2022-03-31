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
    return (
        <li key={key} style={style} className={'h-full w-full flex items-center justify-center text-lg even:bg-indigo-100 odd:bg-indigo-200 hover:bg-indigo-300 transition relative'}>
          {
            people[index] && <Person key={people[index].id} name={people[index].name} type={type} sort={index}/>
          }
        </li>
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
