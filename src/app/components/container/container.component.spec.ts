import { AppModule } from './../../app.module'
import { ComponentFixture } from '@angular/core/testing'

import { ContainerComponent } from './container.component'
import { BehaviorSubject, Observable, of, Subscriber } from 'rxjs'
import { MockBuilder, MockRender } from 'ng-mocks'

import { subscribeSpyTo } from '@hirez_io/observer-spy'
import { StackQuestionService } from '../../services/stack-question/stack-question.service'
import { ITEMS_DTO_INSTANCE } from '../../models/items.dto'

describe('ContainerComponent', () => {
  data: describe('On success data from TraficService', () => {
    let component: ContainerComponent
    let fixture: ComponentFixture<ContainerComponent>
    beforeEach(() =>
      MockBuilder(ContainerComponent, AppModule).mock(StackQuestionService, {
        getStackOverFlowQuestions: () => of(ITEMS_DTO_INSTANCE()),
      })
    )

    beforeEach(() => {
      fixture = MockRender(ContainerComponent)
    })

    it('should create', () => {
      component = fixture.componentInstance
      expect(component).toBeDefined()
    })
  })
})
