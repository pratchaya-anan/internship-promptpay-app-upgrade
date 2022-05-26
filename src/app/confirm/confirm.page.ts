import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  public data: any;
  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private memory: HeroService, private route: ActivatedRoute, private router: Router) {
    this.fg = this.fb.group({
      'name': null,
      'phoneNumber': null,
      'amount': null,
    });

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          console.log(value);
          // this.fg.patchValue(value);
          this.data = JSON.parse(value);
          this.fg.patchValue(this.data);
        }
      });
    }
  }

  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      console.log(param);
      this.router.navigate(['/receipt'], param);
    }
  }

}
