import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideTydux} from "@w11k/tydux";
import {provideTyduxWithStoreFactory} from "@w11k/tydux";
import {createStore} from "redux";

import {AppComponent} from './app.component';
import {DemoFassade, DemoState} from './store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...provideTyduxWithStoreFactory(bridge => {
      return createStore(bridge.createTyduxReducer({managedByFassade: new DemoState()}));
    }),
    // provideTydux({managedByFassade: new DemoState()}),

    DemoFassade

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
