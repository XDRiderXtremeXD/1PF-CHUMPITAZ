import { Directive, Input, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextSize]'
})
export class TextSizeDirective {

  @Input()
  sizeText = 20;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderSizeText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sizeText']) {
      this.renderSizeText();
    }
  }

  renderSizeText(): void {
    // Agrega 'px' al valor del tamaño del texto
    const fontSize = `${this.sizeText}px`;

    this.renderer.setStyle(
      this.elementRef.nativeElement, 'font-size', fontSize
    );
  }
}
