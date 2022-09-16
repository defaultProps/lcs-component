import { v4 as uuidv4 } from 'uuid';

interface SingleLabel {
  title: string;
  icon: string;
  iconPos: 'left' | 'right';
  iconColor: string;
  tooltipInfo: string;
  width: number;
  tailwindicss: string[];
}

interface SingleInput {
  maxlength: number | '-';
  minlength: number | '-';
  prefixIcon?: string;
  suffixIcon?: string;
  size: LCS.Size;
  placeholder: string;
  disabledCopy: boolean;
  disabledPaste: boolean;
  disabledCut: boolean;
  tailwindicss: string[];
}

export interface SingleInputComponent extends LCS.LCSComponent {
  label: SingleLabel;
  input: SingleInput;
}

export function initSingleInput({
  label,
  input,
}: {
  label: Partial<SingleLabel>;
  input: Partial<SingleInput>;
}): SingleInputComponent {
  const _label = Object.assign(
    {
      title: '标题',
      icon: 'el-icon-info',
      iconPos: 'right',
      iconColor: '',
      tooltipInfo: '标题备注信息',
      width: 120,
      tailwindicss: [],
    },
    label
  );
  const _input = Object.assign(
    {
      maxlength: '-',
      minlength: '-',
      prefixIcon: '',
      suffixIcon: '',
      size: 'small',
      placeholder: '',
      disabledCopy: false,
      disabledPaste: false,
      disabledCut: false,
      tailwindicss: [],
    },
    input
  );

  return {
    _group: '输入框组件',
    _title: '基础输入框',
    version: '1.0.0',
    tag: 'lcs-element__singleInput',
    id: uuidv4(),
    label: _label,
    input: _input,
  };
}
