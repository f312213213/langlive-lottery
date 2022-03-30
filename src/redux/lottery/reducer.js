import ActionTypes from './ActionTypes'
import produce from 'immer'

import FAKE from '../../FAKE'

export const defaultState = {
  time: 0,
  candidate: FAKE,
  result: [],
  isCountDown: false
}

export default produce(
  (draft, action) => {
    switch (action.type) {
      case ActionTypes.TIME_SET: {
        draft.time = action.payload
        break
      }
      case ActionTypes.COUNT_DOWN: {
        draft.isCountDown = !draft.isCountDown
        break
      }
      case ActionTypes.GET_RESULT: {
        const { randomNum } = action.payload
        const result = draft.candidate[randomNum]
        draft.candidate.splice(randomNum, 1)
        draft.result.push(result)
        break
      }
      default: {
        break
      }
    }
  },
  defaultState
)
