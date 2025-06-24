import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  private _http = inject(HttpService);

  constructor() { }

  getTeamMembers(): any {
    return this._http.get();
  }
}
