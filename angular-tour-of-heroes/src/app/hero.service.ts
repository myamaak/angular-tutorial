import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

// 이 클래스가 의존성 주입 시스템에 포함되는 클래스라고 선언하는 구문이다.
// 서비스를 정의하는 메타데이터 객체를 인자로 받는다.
@Injectable({
  providedIn: 'root' // 서비스 프로바이더를 최상위 injector에 등록 
}) 
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // observable은 함수가 비동기 동작을 하도록 한다(observable 타입이 getHeroes()의 반환값이다.)
    const heroes = of(HEROES); // HEROES 데이터를 Observable<Hero[]> 타입으로 한번에 반환
    this.messageService.add('HeroService:fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // 지금은 히어로의 `id` 프로퍼티가 항상 존재한다고 간주합니다.
    // 에러를 처리하는 방법은 다음 튜토리얼에 대해 알아봅니다.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService:MessageService) { } 
  // heroService 가 생성될 때 MessageService의 싱글턴 인스턴스를 의존성으로 주입
}
