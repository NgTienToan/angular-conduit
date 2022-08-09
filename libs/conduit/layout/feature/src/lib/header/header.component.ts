import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "@ng-conduit/conduit/login/feature";
import { RegisterComponent } from "@ng-conduit/conduit/register/feature";

@Component({
  selector: 'ng-conduit-header',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoginComponent, RegisterComponent, RouterModule]
})
export class HeaderComponent { }
