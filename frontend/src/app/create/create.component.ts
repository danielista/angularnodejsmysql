import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: any;
  successmsg: any;
  getparamid: any;

  ngOnInit(): void {
    //console.log(this.router.snapshot.paramMap.get('id'), 'getid');
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.service.getSingleData(this.getparamid).subscribe((res) => {
        console.log(res, 'res==>');
        this.habitsForm.patchValue({
          habit_name: res.data[0].habit_name,
          habit_description: res.data[0].habit_description,
          start_time: res.data[0].start_time,
          end_time: res.data[0].start_time
        });
      });
    }
  }

  habitsForm = new FormGroup({
    'habit_name': new FormControl('', Validators.required),
    'habit_description': new FormControl('', Validators.required),
    'start_time': new FormControl('', Validators.required),
    'end_time': new FormControl('', Validators.required)
  });




  // create new habit
  habitSubmit() {
    if (this.habitsForm.valid) {
      console.log(this.habitsForm.value);
      this.service.createData(this.habitsForm.value).subscribe((res) => {
        console.log(res, 'res===>');
        this.habitsForm.reset();
        this.successmsg = res.message;
      })

    } else {
      this.errormsg = 'all field is required !';
    }

  }

  //updatedata
  habitUpdate() {
    console.log(this.habitsForm.value, 'updatedform');


    if (this.habitsForm.valid) {
      this.service.updateData(this.habitsForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated');
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'all field are required ';
    }
  }


}
