import {Component, OnDestroy} from '@angular/core';
import {DemoFassade} from "./store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {

  entries = this.demoFassade
    .select(s => s.entries)
    .unbounded();

  constructor(private readonly demoFassade: DemoFassade) {
  }

  addEntry() {
    this.demoFassade.addEntry(Date.now().toString());
  }

  ngOnDestroy() {
  }

}
