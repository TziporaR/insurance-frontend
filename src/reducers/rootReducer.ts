import { combineReducers } from 'redux';
import { PolicyReducer } from './policiesReducer';


const rootReducer = combineReducers({
    policies: PolicyReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;