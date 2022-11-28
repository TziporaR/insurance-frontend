import { all } from 'redux-saga/effects';
import policiesSaga from './policiesSaga';

export function* rootSaga() {
    yield all([policiesSaga]);
}