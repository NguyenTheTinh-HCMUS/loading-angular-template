import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner = false;

  constructor(private _spinnerService: SpinnerService,private _cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init();
  }
  init() {
    this._spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this._cdRef.detectChanges();
    });
  }

}
