import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from './iform-candeactivate';

export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            //throw new Error("Method not implemented.");
            console.log('Guarda de desativação');
            
            //return component.podeMudarRota();
            return component.podeDesativar();            
    }
}