import { TestBed } from '@angular/core/testing'

import { StackQuestionService } from './stack-question.service'
import { MockService } from 'ng-mocks'
import { BehaviorSubject, of } from 'rxjs'
import { subscribeSpyTo } from '@hirez_io/observer-spy'
import { ItemsDTO, ITEMS_DTO_INSTANCE } from '../../models/items.dto'

describe('StackQuestionService', () => {
  let service: StackQuestionService

  beforeEach(() => {
    service = MockService(StackQuestionService, {
      getStackOverFlowQuestions: () => of(ITEMS_DTO_INSTANCE()),
    })
  })

  it('should be created', () => {
    const observerSpy = subscribeSpyTo(service.getStackOverFlowQuestions())
    const data: ItemsDTO = observerSpy.getLastValue() as any
    expect(data.items.length).toBe(0)
  })
})
