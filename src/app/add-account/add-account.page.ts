import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private memory: HeroService, private router: Router) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSave() {
    let msg = `บันทึกข้อมูล\n\nชื่อผู้รับ: ${this.fg.get("name").value}\nเบอร์ผู้รับ: ${this.fg.get("phoneNumber").value}`
    alert(msg);

    this.memory.data = this.fg.value;
    
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      console.log(param);
      this.router.navigate(['/home'], param);
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

  // onLoad() {
  //   if (this.memory.data) {
  //     this.fg.setValue(this.memory.data);
  //   }
  //   else {
  //     alert("ไม่มีข้อมูลที่บันทึก")
  //   }
  // }

}