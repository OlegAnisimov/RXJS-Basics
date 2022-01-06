import {from} from "rxjs";

/*
* Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.
* */

const observable = from([1, 2, 3 ]);
const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

observable.subscribe(observer);
