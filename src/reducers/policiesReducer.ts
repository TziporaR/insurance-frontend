import { Reducer } from 'react';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import * as actions from '../actions/policiesActions';
import { PoliciesState } from '../types';

type Actions = ActionType<typeof actions | typeof actions>;
const initialState: PoliciesState = {
    loading: false,
    policies: [],
    selectedId: '',
}

export const PolicyReducer: Reducer<PoliciesState, Actions> =
    (state = initialState, action) => {
        switch (action.type) {
            case getType(actions.getPoliciesById.request):
                return { ...state, loading: true };
            case getType(actions.getPoliciesById.success):
                return { ...state, loading: false, policies: action.payload };
            case getType(actions.getPoliciesById.failure):
                return { ...state, loading: false };
            default:
                return state;
        }
    }