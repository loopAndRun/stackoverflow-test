import { QuestionDTO } from './question.dto'

export interface ItemsDTO {
  items: QuestionDTO[]
}

export const ITEMS_DTO_INSTANCE = (): ItemsDTO => ({
  items: [],
})
