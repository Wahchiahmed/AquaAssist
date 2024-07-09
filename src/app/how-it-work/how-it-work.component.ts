import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HowItWorkComponent {
  userType: string = 'boatOwner';
  steps_boatOwner = [
    {
      icon: 'fas fa-search fa-2xl',
      title: 'Sign Up and Create Your Boat Profile',
      description: 'Register on AquaAssist and create a detailed profile for your boat.'
    },
    {
      icon: 'fas fa-calendar-check fa-2xl',
      title: 'Browse and Book Services',
      description: 'Explore our wide range of services and book the ones you need.'
    },
    {
      icon: 'fas fa-umbrella-beach fa-2xl',
      title: 'Enjoy Hassle-Free Boat Maintenance',
      description: 'Relax and enjoy your time on the water while we take care of the rest.'
    }
  ];
  steps_ServiceProvider =[
    {
      icon: 'fas fa-search fa-2xl',
      title: 'Sign Up and Create Your Boat Profile',
      description: 'Register on AquaAssist and create a detailed profile for your boat.'
    },
    {
      icon: 'fas fa-list fa-2xl',
      title: 'List Your Services',
      description: 'List all the services you provide along with pricing and availability.'
    },
    {
      icon: 'fas fa-comments fa-2xl',
      title: 'Connect with Boat Owners',
      description: 'Get notified when a boat owner books your service and provide the best service possible.'
    }
  ]
  steps =this.steps_boatOwner;
  setUserType(type: string) {
    this.userType = type;
    if (type == 'boatOwner'){
      this.steps = this.steps_boatOwner;
    }else[
      this.steps = this.steps_ServiceProvider
    ]
  }
}
