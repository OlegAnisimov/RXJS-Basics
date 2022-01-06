import {interval, of, take, takeUntil} from 'rxjs';
import { map } from 'rxjs/operators';

/*
* A Pipeable Operator is a function that takes an Observable as its input and returns another Observable.
* It is a pure operation: the previous Observable stays unmodified.
* */


// of(1, 2, 3)
//     .pipe(map((x) => x * x))
//     .subscribe((v) => console.log(`value: ${v}`));

/*
* What are creation operators? Distinct from pipeable operators,
* creation operators are functions that can be used to create an Observable
* with some common predefined behavior or by joining other Observables.
* */

const observable = interval(1000 /* number of milliseconds */)
    .pipe(take(5));

const subscription = observable.subscribe(x => console.log(x));

setTimeout(() => {
    subscription.unsubscribe()
}, 4000)

