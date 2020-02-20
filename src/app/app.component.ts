import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/store';
import * as fromWorkspace from 'src/store/workspace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  workspace$: Observable<{works: boolean}>;

  constructor(private store: Store<fromRoot.State>) {
    this.workspace$ = this.store.select('workspace');
  }

  toggleWorks = () => {
    this.store.dispatch(new fromWorkspace.ToggleWorks());
  }
}
