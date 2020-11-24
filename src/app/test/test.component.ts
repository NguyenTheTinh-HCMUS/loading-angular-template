import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _service: TestService) { }

  ngOnInit(): void {
    this._service.getData().subscribe(
      console.log
    )
  }

}
