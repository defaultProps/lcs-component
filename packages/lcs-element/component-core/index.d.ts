declare namespace LCS {
  export interface LCSComponent {
    _group: string;
    _title: string;

    version: string;
    tag: string;
    id: string;
  }
  export type Size = 'small' | 'large';
}
