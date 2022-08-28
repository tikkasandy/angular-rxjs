import { Component } from '@angular/core';
import {interval, map, filter, Subscription, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription
  stram$: Subject<number> = new Subject<number>()
  counter = 0

  constructor() {
   // const intervalStream$ = interval(1000)
   //
   //  this.sub = intervalStream$
   //    .pipe(
   //      filter(value => value % 2 === 0 ),
   //      map(value => `Mapped value ${value}`),
   //    )
   //    .subscribe(value => {
   //    console.log(value)
   //  })

    // const stream$ = new Observable(observer => {
    //   setTimeout(() =>
    //   observer.next(1), 500)
    //
    //   setTimeout(() =>
    //     observer.next(2), 1000)
    //
    //
    //   setTimeout(() =>
    //     observer.complete(), 1500)
    //
    //   setTimeout(() =>
    //     observer.error('Something went wrong'), 2000)
    // })
    //
    // this.sub = stream$
    //   .subscribe({
    //     next(value) {console.log('Next', value)},
    //     error(error) {console.log('Error', error)},
    //     complete() {console.log('Done')}
    //   })

    this.sub = this.stram$.subscribe(value => {
      console.log('Subscribe', value)
    })
  }

  next() {
    this.counter += 1
    this.stram$.next(this.counter)
  }

  stop() {
    this.sub.unsubscribe()
  }
}
