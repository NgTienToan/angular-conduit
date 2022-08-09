import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'ng-conduit-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
