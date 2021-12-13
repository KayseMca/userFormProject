import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'user-form';
  page:string|undefined
  constructor(private router:Router){
    router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) 
    ).subscribe((ev:NavigationEnd) => {
      this.page = ev.url
      // console.log(ev.url)

    });
  }
  ngOnInit(){
    console.log("Home page")
  }

  goBack(){
    this.router.navigate(['/'])
  }

  

  
}
