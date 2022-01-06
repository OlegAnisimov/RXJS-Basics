import {from, Observable} from "rxjs";

const observable = new Observable(function subscribe(subscriber) {
    try {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.complete();
    } catch (err) {
        subscriber.error(err); // delivers an error if it caught one
    }
});

// const subscription = observable.subscribe( (value) => console.log(`I am Observer with next value - ${value}`));

const observableFrom = from([1, 2, 3 ]);
const subscription = observableFrom.subscribe(x => console.log(x));
subscription.unsubscribe();
