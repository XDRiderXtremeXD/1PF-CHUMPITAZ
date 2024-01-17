import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoriesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoriesForm = this.fb.group({
      name: this.fb.control('',[Validators.required ,Validators.minLength(3)]),
      products: this.fb.array([]),
    })
  }

  onAddProduct(): void {
    const formArray=this.categoriesForm.get('products');
    if ( formArray instanceof FormArray) {
      formArray.push(
        this.fb.group({
          productName:this.fb.control(''),
        })
      )
    }
  }

  get productsControl(){
    return this.categoriesForm.get('products') as FormArray;
  }

  getControl(index:number){
    return this.productsControl.controls[index]?.get('productName') as FormControl;
  }

  deleteControl(index:number){
    this.productsControl.removeAt(index);
  }
}
