import { WorkspaceActions, WorkspaceActionTypes } from './workspace.actions';

export interface WorkspaceState {
    works: boolean;
}

export const InitialState: WorkspaceState = {
    works: false
};

export function reducer(state = InitialState, action: WorkspaceActions): WorkspaceState {
    switch (action.type) {
        case WorkspaceActionTypes.TOGGLE_WORKS:
            return {
                ...state,
                works: !state.works
            };
        default:
            return state;
    }
}