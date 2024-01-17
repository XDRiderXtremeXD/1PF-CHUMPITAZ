import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  @Input()
  set appRepetir(value: number) {
    console.log(value);
    for (let i = 0; i < value; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    //Template ref es una referencia al template del contenido
    private templateRef: TemplateRef<unknown>
    //viewContainer es una referencia al contenido donde esta el template
    , private viewContainerRef: ViewContainerRef
  ) {
    console.log(this.templateRef);
    console.log(this.viewContainerRef);
  }
}
