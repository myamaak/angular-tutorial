import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { } 
  //컴포넌트가 생성될 때 의존성 주입 시스템이 HeroService의 인스턴스를 찾아서 heroService라는 인자로 전달한다

  ngOnInit(): void { //ngOnInit 함수는 컴포넌트의 인스턴스를 생성한 직후에 실행된다.
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    //옵저버블 타입의 응답은 언제 도착할지 모른다. 도착한 시점에 subscribe가 서버에서 받은 응답을 콜백 함수로 전달한다. 
  }
  

}
