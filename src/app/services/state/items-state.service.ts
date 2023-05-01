import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { ITEMS_DTO_INSTANCE, ItemsDTO } from '../../models/items.dto'

@Injectable({
  providedIn: 'root',
})
export class ItemsStateService {
  private itemsList$: BehaviorSubject<ItemsDTO> = new BehaviorSubject<ItemsDTO>(ITEMS_DTO_INSTANCE())

  get itemsList(): BehaviorSubject<ItemsDTO> {
    return this.itemsList$
  }
}
