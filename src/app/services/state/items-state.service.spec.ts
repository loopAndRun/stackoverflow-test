
import { ItemsStateService } from './items-state.service'
import { MockService } from 'ng-mocks'
import { ITEMS_DTO_INSTANCE, ItemsDTO } from '../../models/items.dto'
import { BehaviorSubject } from 'rxjs'

describe('ItemsStateService', () => {
  let fixture: ItemsStateService

  beforeEach(() => {
    fixture = MockService(ItemsStateService, {
      itemsList: new BehaviorSubject<ItemsDTO>(ITEMS_DTO_INSTANCE()),
    })
  })

  it('should be created', () => {
    const data = fixture.itemsList.getValue()
    expect(data.items.length).toBe(0)
  })
})
