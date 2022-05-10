import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricecard';
  priceCardList = [
    {
      id : '1',
      price: '10',
      name: 'Basic',
      features: [
        {
          title: '10 users included'
        },
        {
          title: '2 GB of storage'
        },
        {
          title: 'Email support'
        },
        {
          title: 'Help center access'
        }
      ]
    },
    {
      id : '2',
      price: '20',
      name: 'Pro',
      features: [
        {
          title: '20 users included'
        },
        {
          title: '10 GB of storage'
        },
        {
          title: 'Priority Email support'
        },
        {
          title: 'Help center access'
        }
      ]
    },
    {
      id : '3',
      price: '30',
      name: 'Enterprise',
      features: [
        {
          title: '30 users included'
        },
        {
          title: '15 GB of storage'
        },
        {
          title: 'Phone and email support'
        },
        {
          title: 'Help center access'
        }
      ]
    }
  ];
}
