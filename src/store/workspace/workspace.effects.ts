import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/store';
import { WorkspaceActionTypes } from './workspace.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class WorkspaceEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<fromRoot.State>,
  ) {}

  @Effect({dispatch: false})
  works$ = this.actions$.pipe(
      ofType(WorkspaceActionTypes.TOGGLE_WORKS),
      map((action) => {
          console.log(action);
      })
  );
}
