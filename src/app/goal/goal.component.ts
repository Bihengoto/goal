import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import {Goals} from '../goals'
import {GoalService} from '../goals/goal.service';
import {AlertsService} from '../alert-service/alerts.service'
import {HttpClient} from '@angular/common/http'
import {Quote} from '../quote-class/quote'
import {QuoteRequestService} from '../quote-http/quote-request.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers:[GoalService,QuoteRequestService], //add the providers to the component
})
export class GoalComponent implements OnInit {

  quote:Quote;
  goals:Goal[];
  alertService:AlertsService;

addNewGoal(goal){
  let goalLength = this.goals.length;
  goal.id=goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)

}

goToUrl(id){
    this.router.navigate(['/goals',id])
}

  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
}


// deleteGoal(isComplete,index){
//   if (isComplete){
//       let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
//
//       if(toDelete){
//           this.goals.splice(index,1)
//           this.alertService.alertMe("Goal has been deleted")
//       }
//   }
// }

deleteGoal(index){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if(toDelete){
                this.goals.splice(index,1)
                this.alertService.alertMe("Goal has been deleted")
        }
    }

constructor(goalService:GoalService,alertService:AlertsService,private quoteService:QuoteRequestService,private router:Router) {
this.goals = goalService.getGoals();
this.alertService = alertService;//make the service available to the class
}
          ngOnInit(){
            //   interface ApiResponse{
            //   quote:string;
            //   author:string
            // }
              // this.http.get<ApiResponse>("https://talaikis.com/api/quotes/random/").subscribe(data=>{
              // this.quote= new Quote(data.quote,data.author)
              this.quoteService.quoteRequest()
              this.quote=this.quoteService.quote

            // },err=>{
            //   this.quote= new Quote("Never, never, never give up.","winston churchill")
            //   console.log("Error occured ")
            // })
          }

          // ngOnInit() {
          //   this.quoteService.quoteRequest()
          //   this.quote=this.quoteService.quote
          // }

}
