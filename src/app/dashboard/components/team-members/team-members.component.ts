import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TeamMemberService } from '../../services/team-member.service';
import { ITableColumns } from '../../interfaces/tableColumn.interface';
import { ITeamMember } from '../../interfaces/teamMember.interface';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent implements OnInit {
  isLoading = false;
  members: ITeamMember[] = [];
  page = 1;
  pageSize = 5;
  columns: ITableColumns[] = [];
  editedMember: ITeamMember | null = null;
  deletedMember: ITeamMember | null = null;
  allSelected = false;
  private _teamMemberService = inject(TeamMemberService);
  private _modalService = inject(NgbModal);

  ngOnInit(): void {
    this.getTeamMembers();
  }

  getTeamMembers() {
    try {
      this.isLoading = true;
      this._teamMemberService.getTeamMembers().subscribe((res: any) => {
        this.columns = res?.grid_columns;
        this.members = res?.grid_data;
        this.isLoading = false;
      })
    } catch (error) {
      console.error(error, 'error');
      this.isLoading = false;
    }
  }

  // pagination logic 
  get totalPages(): number {
    return Math.ceil(this.members.length / this.pageSize);
  }

  get pagedMembers(): ITeamMember[] {
    const start = (this.page - 1) * this.pageSize;
    return this.members.slice(start, start + this.pageSize);
  }

  setPage(n: number) {
    if (n >= 1 && n <= this.totalPages) {
      this.page = n;
    }
  }

  // checkbox logic
  toggleAllSelection() {
    this.allSelected = !this.allSelected;
    this.pagedMembers.forEach(m => (m.selected = this.allSelected));
  }

  updateMasterCheckbox() {
    this.allSelected = this.pagedMembers.every(m => m.selected);
  }

  // edit icon method
  onEditHandle(content: TemplateRef<any>, member: ITeamMember) {
    if (!member) return;
    this.editedMember = member;
    this._modalService.open(content, { centered: true });
  }

  // delete icon method
  onDeleteHandle(content: TemplateRef<any>, member: ITeamMember) {
    if (!member) return;
    this.deletedMember = member;
    this._modalService.open(content, { centered: true });
  }

  //delete logic
  deleteMember() {
    if (!this.deletedMember) return;
    this.members = this.members.filter(m => m !== this.deletedMember);
    this._modalService.dismissAll();
  }
}
