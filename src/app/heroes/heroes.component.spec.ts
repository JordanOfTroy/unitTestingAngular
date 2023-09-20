import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroesComponent } from "./heroes.component"
import { HeroService } from "../hero.service";

describe('HerosComponent', () => {
    let component: HeroesComponent;
    let HEROS: Hero | any;
    let mockHeroService: HeroService | any

    beforeEach(() => {
        HEROS = [
            {id:1, name:'SpiderDude', strength: 8},
            {id:2, name: 'Wonderful Woman', strength: 24},
            {id:3, name: 'SuperDude', strength: 55}
        ]
    })
    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);

    describe('delete', () => {
        it('should remove the indicated hero from the heros list', () => {
            //arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROS;

            //act
            component.delete(HEROS[2]);

            //assert
            expect(component.heroes.length).toBe(2);
        })

        it('should remove the indicated hero from the heros list, by name', () => {
            //arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROS;

            //act
            component.delete(HEROS[2]);
            length = component.heroes.length

            //assert
            expect(component.heroes[length-1].name).toBe('Wonderful Woman');
        })
    })

})