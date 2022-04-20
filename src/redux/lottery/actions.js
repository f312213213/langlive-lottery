import { faker } from '@faker-js/faker'

import ActionTypes from './ActionTypes'
import actions from '../actions'

export const setTime = (time) => {
  return {
    type: ActionTypes.TIME_SET,
    payload: time
  }
}

export const toggleCountDown = () => {
  return {
    type: ActionTypes.COUNT_DOWN
  }
}

export const gameStart = () => (dispatch, getState) => {
  const lottery = getState().lottery
  if (lottery.candidate.length === 0) {
    return dispatch(actions.app.showSnackbar('error', '沒有人可以抽了！'))
  }
  let time = lottery.time
  const settingTime = time
  if (time === 0) {
    return dispatch(actions.lottery.drawLottery())
  }
  dispatch(actions.lottery.toggleCountDown())

  const countDown = setInterval(() => {
    dispatch(actions.lottery.setTime(time - 1))
    time = time - 1
    if (time === 0) {
      clearInterval(countDown)
      dispatch(actions.lottery.toggleCountDown())
      dispatch(actions.lottery.drawLottery())
      dispatch(actions.lottery.setTime(settingTime))
    }
  }, 1000)
}

export const drawLottery = () => (dispatch, getState) => {
  const candidate = getState().lottery.candidate
  const randomNum = Math.floor(Math.random() * candidate.length)
  dispatch(actions.app.showSnackbar('success', `${candidate[randomNum].name} 幸運的被抽出`))
  dispatch({
    type: ActionTypes.GET_RESULT,
    payload: { randomNum }
  })
}

export const setFakeUser = (userNum) => (dispatch, getState) => {
  const generateFakeUser = () => {
    return {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      id: faker.git.commitSha(),
      email: faker.internet.email(),
      photoURL: faker.image.people(300, 300, true),
      introduction: faker.lorem.sentence()
    }
  }
  const fakeUser = Array.from({ length: userNum }, generateFakeUser)
  dispatch({
    type: ActionTypes.USER_SET,
    payload: { fakeUser }
  })
  return dispatch(actions.app.showSnackbar('success', '設定成功！'))
}
