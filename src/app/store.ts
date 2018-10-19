import {Injectable} from "@angular/core";
import {Commands, Fassade, TyduxStore} from '@w11k/tydux';


export class DemoState {
  entries: string[] = [];
}

export class DemoMutator extends Commands<DemoState> {
  addEntry(entry: string) {
    this.state.entries = [
      ...this.state.entries,
      entry
    ];
  }
}

@Injectable()
export class DemoFassade extends Fassade<DemoState, DemoMutator> {

  constructor(tydux: TyduxStore<any>) {
    super(tydux.createRootMountPoint('managedByFassade'));
  }

  addEntry(entry: string) {
    this.commands.addEntry(entry);
  }

  createCommands(): DemoMutator {
    return new DemoMutator();
  }

}
