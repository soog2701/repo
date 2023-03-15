'use client';
import { useState } from 'react';

interface Option {
  value: string | number;
  text: string | number;
  id: string | number;
}

type Nullable<Option, RequiredType> = RequiredType extends true
  ? Option
  : Option | null;

interface Props<T, RequiredType> {
  options: T[];
  selected?: Nullable<T, RequiredType>;
  onSelect?: (id: Nullable<string, RequiredType>) => void;
  required?: RequiredType;
}

export default function Select<T extends Option, RequiredType extends boolean>(
  props: Props<T, RequiredType>
) {
  const [Selected, setSelected] = useState('');
  const { onSelect, options, required, selected } = props;
  const selectEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId =
      e.target?.value === 'NULL_SELECTION' ? null : e.target.value;
    if (props.onSelect) {
      props.onSelect(selectedId as Nullable<string, RequiredType>); //
    }
    setSelected(e.target.value);
  };
  // value={props.selected?.value ?? 'NULL_SELECTION'}
  return (
    <select required={required} onChange={selectEvent} value={Selected}>
      {!props.required && <option value='NULL_SELECTION'>None selected</option>}
      {options.map((opt) => (
        <option key={opt.id} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
}
