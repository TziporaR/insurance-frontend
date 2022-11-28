import { createAsyncAction } from 'typesafe-actions';
import { Policy } from '../types';

export const getPoliciesById = createAsyncAction(
    'GET_POLICY_REQUEST',
    'GET_POLICY_SUCCESS',
    'GET_POLICY_FAILURE',
)<string, Policy[], string>();

export const saveCustomerPolicies = createAsyncAction(
    'SAVE_CUSTOMER_POLICY_REQUEST',
    'SAVE_CUSTOMER_POLICY_SUCCESS',
    'SAVE_CUSTOMER_POLICY_FAILURE',
)<Policy[], void, string>();