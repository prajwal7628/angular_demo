export interface ITeamMember {
    id: string;
    email: string;
    license_used: number;
    name: {
        first_name: string;
        last_name: string;
        handle: string;
    };
    role: string;
    status: 'Customer' | 'Churned';
    teams: ITeam[];
    selected?: boolean;
}
export interface ITeam {
    background_color: string;
    text_color: string;
    value: string;
}