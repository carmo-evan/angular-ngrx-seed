import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/store';

@Injectable()
export class WorkspaceEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<fromRoot.State>,
  ) {}
}
