import { all } from 'axios';
import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions';
import {
    getPoliciesById,
    saveCustomerPolicies,
} from '../actions/policiesActions';
import http from '../http-common';
import { Policy } from '../types';

export function* handleGetPoliciesById(action: ActionType<typeof getPoliciesById.request>) {
    try {
        const policies: Policy[] = yield call(() => http.get(`/policy/${action.payload}`));
        yield put(getPoliciesById.success(policies));
    } catch (e) {
        yield put(getPoliciesById.failure(e as string));
    }
}

export function* handleSavePolicies() {
    try {
        yield call(() => http.post('/policy'));
        yield put(saveCustomerPolicies.success());
    } catch (e) {
        yield put(saveCustomerPolicies.failure(e as string));
    }
}

function* policiesSaga() {
    yield all([takeLatest(getPoliciesById.request, handleGetPoliciesById)]);
    yield all([takeLatest(saveCustomerPolicies.request, handleSavePolicies)]);
}

export default policiesSaga;