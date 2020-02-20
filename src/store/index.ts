import {
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromWorkspace from './workspace';

export interface State {
    workspace: fromWorkspace.WorkspaceState;
  }

export const reducers: ActionReducerMap<State> = {
    workspace: fromWorkspace.reducer,
  };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];