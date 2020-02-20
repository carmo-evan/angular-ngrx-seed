import { Action } from '@ngrx/store';

export const WorkspaceActionTypes = {
    TOGGLE_WORKS: '[WORKSPACE] Set Config',
};

export class ToggleWorks implements Action {
    readonly type = WorkspaceActionTypes.TOGGLE_WORKS;
}

export type WorkspaceActions = ToggleWorks;
