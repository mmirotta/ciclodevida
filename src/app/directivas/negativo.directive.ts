import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNegativo]'
})
export class NegativoDirective {
  private vista = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appNegativo(condicion: boolean) {
    if (!condicion && !this.vista) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.vista = true;
    } else if (condicion && this.vista) {
      this.viewContainer.clear();
      this.vista = false;
    }
  }

}
