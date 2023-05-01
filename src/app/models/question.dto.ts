import { OwnerDTO } from "./owner.dto"

export interface QuestionDTO {
  tags: string[]
  owner: OwnerDTO,
  is_answered: boolean
  view_count: number
  answer_count: number
  community_owned_date: Date
  score: number
  last_activity_date: Date
  creation_date: Date
  last_edit_date: Date
  question_id: number
  content_license: string
  link: string
  title: string
}
