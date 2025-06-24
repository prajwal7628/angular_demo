import { Component } from '@angular/core';
import { VendorBreakdownComponent } from "../vendor-breakdown/vendor-breakdown.component";
import { VendorMonitorComponent } from "../vendor-monitor/vendor-monitor.component";
import { TeamMembersComponent } from "../team-members/team-members.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [VendorBreakdownComponent, VendorMonitorComponent, TeamMembersComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
