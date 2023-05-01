import { Injectable } from '@angular/core'
import { catchError, delay, from, interval, map, Observable, of, retry, Subscriber } from 'rxjs'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { QuestionDTO } from '../../models/question.dto'
import { ItemsDTO } from '../../models/items.dto'

@Injectable({
  providedIn: 'root',
})
export class StackQuestionService {
  constructor(private httpService: HttpClient) {}

  getStackOverFlowQuestions(): Observable<ItemsDTO> {
    let headers: HttpHeaders = new HttpHeaders()
    return this.httpService
      .get<ItemsDTO>('https://api.stackexchange.com/2.3/questions?order=desc&sort=votes&site=stackoverflow&pagesize=10')
      .pipe(
        map((res: ItemsDTO) => {
          res.items.map((question:QuestionDTO)=>{
            question.creation_date =  new Date(question.creation_date)
          })
          return res
        })
      )
  }
}
