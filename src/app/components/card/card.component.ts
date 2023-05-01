import { Component,  Input,  } from '@angular/core'
import { QuestionDTO } from '../../models/question.dto'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() question: QuestionDTO | undefined

  onImageError(event: any) {
    let htmlElement: HTMLImageElement = event.target
    htmlElement.src = './assets/img/not-found.png'
    htmlElement.style.width = '100px'
    htmlElement.style.height = '100px'
    htmlElement.style.margin = 'auto'
    htmlElement.style.marginTop = '4rem'
    htmlElement.style.marginBottom = '4rem'
  }
}
