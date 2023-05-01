import { ItemsStateService } from '../../services/state/items-state.service'
import { StackQuestionService } from '../../services/stack-question/stack-question.service'
import { Component, OnInit } from '@angular/core'
import { Observable, combineLatest, map, retry, share, catchError, BehaviorSubject, of } from 'rxjs'
import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { OwnerDTO } from '../../models/owner.dto'
import { ITEMS_DTO_INSTANCE, ItemsDTO } from '../../models/items.dto'
import { QuestionDTO } from '../../models/question.dto'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(':enter', [style({ opacity: 0 }), stagger(100, [animate('0.3s', style({ opacity: 1 }))])], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class ContainerComponent implements OnInit {
  data$: Observable<ItemsDTO> | undefined

  constructor(private _stackQuestionService: StackQuestionService, private _state: ItemsStateService) {}

  ngOnInit(): void {
    this.data$ = this.initializeData()
  }

  tryToReconnect() {
    this.data$ = this.initializeData()
  }

  trackByOwner(index: number, owner: QuestionDTO): number {
    return owner.question_id
  }

  private initializeData(): Observable<ItemsDTO> {
    //TODO get stackoverflow questions
    return this._stackQuestionService.getStackOverFlowQuestions().pipe(
      share(),
      retry({ count: 3, delay: 1000 }),
      catchError((err) => of(ITEMS_DTO_INSTANCE()))
    )

    //TODO prepare filter options
    // const filterOptions$: Observable<IFilterOptions> = this.buildFilters(this._state.filterOptions, vehicleList$)

    //TODO display vehicles based on filters
    // const filteredVehicles$: Observable<IVehicle[]> = this.buildDisplayList(this._state.filterOptions, vehicleList$)

    //TODO combine into unique data source
    // return combineLatest([filterOptions$, filteredVehicles$]).pipe(
    //   map((data) => {
    //     return { filters: data[0], vehicles: data[1] }
    //   })
    // )
  }

  // private buildFilters(filters: BehaviorSubject<ISelectedOptions>, vehicleList: Observable<IVehicle[]>) {
  //   return combineLatest([filters, vehicleList]).pipe(
  //     //TODO prepare unique values
  //     map((data) => {
  //       return this.vehicleListFiltered(data[1], data[0]).reduce(
  //         (previous, current) => {
  //           previous.brand.add(current.brand)
  //           previous.type.add(current.type)
  //           current.colors.forEach((color) => previous.colors.add(color)) // previous.colors.
  //           return previous
  //         },
  //         {
  //           colors: new Set<string>(),
  //           brand: new Set<string>(),
  //           type: new Set<string>(),
  //         }
  //       )
  //     }),
  //     //TODO transform to simple array for easy management
  //     map((options) => {
  //       return {
  //         colors: [ALL, ...Array.from(options.colors)],
  //         brand: [ALL, ...Array.from(options.brand)],
  //         type: [ALL, ...Array.from(options.type)],
  //       }
  //     })
  //   )
  // }

  // private buildDisplayList(
  //   filters: BehaviorSubject<ISelectedOptions>,
  //   vehicleList: Observable<IVehicle[]>
  // ): Observable<IVehicle[]> {
  //   return combineLatest([filters, vehicleList]).pipe(
  //     map(([filterOptions, list]) => [...this.vehicleListFiltered(list, filterOptions)])
  //   )
  // }

  // /**
  //  *
  //  * @param vehicleList
  //  * @param selectedOptions
  //  * @returns vehicle list filtered based on selected filter options
  //  */
  // private vehicleListFiltered(vehicleList: IVehicle[], selectedOptions: ISelectedOptions): IVehicle[] {
  //   let vehicleFiltered: IVehicle[] = vehicleList.filter((x) =>
  //     selectedOptions.color === ALL ? true : x.colors.find((color) => color === selectedOptions.color)
  //   )
  //   vehicleFiltered = vehicleFiltered.filter((x) =>
  //     selectedOptions.type === ALL ? true : x.type === selectedOptions.type
  //   )
  //   vehicleFiltered = vehicleFiltered.filter((x) =>
  //     selectedOptions.brand === ALL ? true : x.brand === selectedOptions.brand
  //   )
  //   return vehicleFiltered
  // }
}
