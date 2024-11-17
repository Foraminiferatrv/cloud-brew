"use client";

import * as React from "react";
import { forwardRef, useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

const EditableInput = forwardRef<Element, Props>(
  ({ value, onChange, label }: Props, ref) => {
    const [isEdit, setIsEdit] = useState(false);

    return (
      <div>
        <span>{value}</span>
      </div>
    );
  },
);

EditableInput.displayName = "EditableInput";

export { EditableInput };
