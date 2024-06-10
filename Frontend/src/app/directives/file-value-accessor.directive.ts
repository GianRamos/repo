// file-value-accessor.directive.ts
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type=file]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileValueAccessorDirective,
      multi: true
    }
  ]
})
export class FileValueAccessorDirective implements ControlValueAccessor {
  value: any;
  onChange = (_:any) => {};
  onTouched = () => {};

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  @HostListener('change', ['$event.target.files']) onChangeEvent(files: any) {
    this.onChange(files);
  }

  writeValue(value: any) {
    this.renderer.setProperty(this.host.nativeElement, 'value', value);
  }

  registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
