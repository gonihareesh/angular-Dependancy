import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {
  
  subService=inject(SubscribeService);
  onSubscribe(){
    
    this.subService.onSubscribe();
}
}
