import React from 'react'
import { List, AutoSizer } from 'react-virtualized'
import PropTypes from 'prop-types'

function Virtualized ({ rowRenderer, list }) {
  return (
      <AutoSizer>
        {({ height, width }) => (
            <List
                height={height}
                rowCount={list.length}
                rowHeight={height / 6}
                rowRenderer={rowRenderer}
                width={width}
            />
        )}
      </AutoSizer>
  )
}

Virtualized.propTypes = {
  rowRenderer: PropTypes.any,
  list: PropTypes.array
}

export default Virtualized
