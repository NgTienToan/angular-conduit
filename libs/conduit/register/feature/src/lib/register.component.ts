import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'ng-conduit-register',
  templateUrl: './register.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent { }
