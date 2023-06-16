import { getIsQuizCompleted } from "@store/reducers/quiz/quiz.reducer";
import { AppState } from "@store/store.types";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable()

export class CanActivateResults{
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate() {
    this.store.select(getIsQuizCompleted()).subscribe(isCompleted =>{
        if (isCompleted) {
            return true
        } else {
            this.router.navigate(['/quiz']);
            return false;
        }
    });
  }
}