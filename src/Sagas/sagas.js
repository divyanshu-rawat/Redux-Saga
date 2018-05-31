

import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function* IncrementAsync(){
	yield delay(1000);
	yield put({type : 'INCREMENT'});
}

function* helloSaga() {
  console.log('Hello Sagas!')
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', IncrementAsync)
}

// We import delay, a utility function that returns a Promise that will resolve after a specified number of milliseconds.
// We'll use this function to block the Generator.

/*
 When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes.
 In the above example, the incrementAsync Saga is suspended until the Promise returned by delay resolves, which will happen after 1 second.
*/

/*
	Now we have 2 Sagas, and we need to start them both at once. To do that, we'll add a rootSaga that is responsible for starting our other Sagas.
	In the same file sagas.js, refactor the file as follows:
*/

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}