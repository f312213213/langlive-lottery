import ActionTypes from './ActionTypes'
import produce from 'immer'

export const defaultState = {
  time: 0,
  candidate: [],
  result: [],
  isCountDown: false,
  isSettingUser: true
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
      case ActionTypes.USER_SET: {
        const { fakeUser } = action.payload
        draft.candidate = []
        draft.candidate.push(...fakeUser)
        draft.isSettingUser = false
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
