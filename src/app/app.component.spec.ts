import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { MockBuilder, MockRender } from 'ng-mocks'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>

  beforeEach(waitForAsync(() => {
    MockBuilder(AppComponent, AppModule)
  }))

  beforeEach(() => {
    fixture = MockRender(AppComponent)
  })

  it('should create the app', () => {
    expect(fixture).toBeTruthy()
  })
})
