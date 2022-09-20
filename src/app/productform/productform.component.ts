import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, FormArray} from "@angular/forms";

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  // formValid: Boolean = false;
  saveValid:Boolean = false;

  title = 'Product Form';
  ProductsForm!: FormGroup;
  constructor(private fb:FormBuilder) {
    // this.saveValid= false;
  }

  ngOnInit(): void {
    this.ProductsForm = this.fb.group({
      name: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      orderNo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      Products: this.fb.array([]) ,
    });
  }

  get Products() : FormArray {
    return this.ProductsForm.get("Products") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      ProductName: ["", [Validators.required]],
      ProductPrice:[0,Validators.min(1)],
      ProductQuantity: [0,Validators.min(1)],
    })
  }

  addProducts() {
    this.Products.push(this.newSkill());
  }
  removeSkill(i:number) {
    this.Products.removeAt(i);
  }

  onSubmit() {
    if (this.ProductsForm.valid) {
      console.log(this.ProductsForm.value);
    }
    else {
     this.saveValid=true;
     console.log("Form is not valid");
    }
    // console.log(this.ProductsForm.value);
    // console.log(this.ProductsForm.value.Products);

  }
  getProducts (): any {
    return this.ProductsForm.value.Products;
  }
  getControls() {
    return this.ProductsForm.controls;
  }
  FormValid(value :Boolean){
     this.saveValid = value;
  }
}

