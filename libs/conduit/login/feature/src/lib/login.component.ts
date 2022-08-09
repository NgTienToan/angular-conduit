import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'ng-conduit-login',
  templateUrl: './login.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent { }
