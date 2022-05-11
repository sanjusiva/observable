import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  orderStatus:any;
  data: Observable<any> | undefined;
  // data1: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.data=new Observable(observer=>{
      setTimeout(()=>{
        observer.next("Order placed")
      },2000);
      setTimeout(()=>{
        observer.next("Shipping")
      },4000);
      setTimeout(()=>{
        observer.next("Delivered")
      },6000);
      setTimeout(()=>{
        observer.complete();
      },7000);
      setTimeout(()=>{
        observer.next("Review")
      },8000);
      setTimeout(()=>{
        observer.error()
      },9000);
    });
    this.data.subscribe(val=>{
      this.orderStatus=val;
    });
    // this.data.subscribe(val1=>{
    //   console.log("2nd subscription");
    // });
  }

}
