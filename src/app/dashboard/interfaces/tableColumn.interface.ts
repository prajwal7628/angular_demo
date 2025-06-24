export interface ITableColumns {
    align: 'left' | 'center' | 'right';
    column_key: string;
    column_name: string;
    type: 'name' | 'status' | 'text' | 'progress' | 'tags' | 'checkbox';
    sortable?: boolean;
}
