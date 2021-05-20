import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNegativo]'
})
export class NegativoDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appNegativo(condicion: boolean) {
    if (!condicion) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condicion) {
      this.viewContainer.clear();
    }
  }

}
