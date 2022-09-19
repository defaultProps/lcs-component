interface SingleLabel {
  title: string;
  icon: string;
  iconPos: 'left' | 'right';
  iconColor: string;
  tooltipInfo: string;
  width: number;
}

interface SingleInput extends LCS.LCSComponent {
  text: string;
  placeholder: string;
  size: LCS.Size;
  label: SingleLabel;
  disabledCopy: boolean;
  disabledPaste: boolean;
  disabledCut: boolean;
}

export const elSingleInput: SingleInput = {};
