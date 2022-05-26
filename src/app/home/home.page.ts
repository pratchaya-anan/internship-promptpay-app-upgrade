import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // public fg: FormGroup;
  public isFirstTime: boolean = true;
  public data: any[] = [];

  constructor(private fb: FormBuilder, private memory: HeroService, private route: ActivatedRoute , private router: Router) {


    
    // this.fg = this.fb.group({
    //   'name': [null],
    //   'phoneNumber': [null]
    // });

    // if (this.route.queryParams) {
    //   this.route.queryParams.subscribe(params => {
    //     let value = params["data"];
    //     if (value) {
    //       console.log(value);
    //       // this.fg.patchValue(value);
    //       this.data = JSON.parse(value);
    //       this.fg.setValue(this.data);
    //     }
    //   });
    // }
  }

  ngOnInit() {
  }

  ionViewDidEnter () {
    if (this.memory.data) {
      this.data.push(this.memory.data)
      this.memory.data = null
    }
  }

  onSelectItem(item) {
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(item) } };
      console.log(param);
      this.router.navigate(['/pay'], param);
    // Code navigate
}

  // onLoad() {
    // if (this.memory.data) {
    //   this.fg.setValue(this.memory.data);
    // }
  //   else {
  //     alert("ไม่มีข้อมูลที่บันทึก")
  //   }
  // }
}
