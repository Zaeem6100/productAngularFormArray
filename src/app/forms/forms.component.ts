import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormArray, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  productfrom!: FormGroup;
  items!: FormArray;
  public  customerform :any= FormGroup ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productfrom = new FormGroup({
      items: new FormArray([])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      pName: '',
      pQuantity: '',
      pPrice: '',
      total: ''
    });
  }

  onSubmit(product:any) {
  }
  addProduct(){
    this.items = this.productfrom.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  getControls() {
    return (this.productfrom.get('items') as FormArray).controls;
  }

}
