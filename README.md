# ReactiveApproachForm

## Reactive Setup
Import ReactiveFormsModule in your module:

<code>
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  // other module configurations
})
export class AppModule { }
</code>

<code>
import { FormGroup, FormControl } from '@angular/forms';
  myForm: FormGroup;

</code>