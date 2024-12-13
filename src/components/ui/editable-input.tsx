"use client";

import * as React from "react";
import { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Pencil, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

const EditableInput = forwardRef<Element, Props>(
  ({ value, onChange, label }: Props, ref) => {
    const [isEdit, setIsEdit] = useState(false);
    const [inputValue, setInputValue] = useState<string>(value);

    const handleEdit = () => {
      setIsEdit(true);
    };

    const handleSave = () => {
      setIsEdit(false);
      onChange(inputValue);
    };

    const handleCancel = () => {
      setIsEdit(false);
    };

    const handleChangeValue = (val: string) => {
      setInputValue(val);
    };

    return (
      <div>
        {label && <span className={"text-sm font-medium"}>{label}</span>}
        <div className="flex w-[250px] items-center gap-2">
          {isEdit ? (
            <>
              <Input
                type="text"
                placeholder="Enter brew name..."
                value={inputValue}
                onChange={(e) => handleChangeValue(e.target.value)}
              />
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={handleSave}
                className="min-w-9 bg-green-300"
                disabled={!inputValue}
              >
                <Save />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={handleCancel}
                className="min-w-9 bg-red-300"
              >
                <X />
              </Button>
            </>
          ) : (
            <>
              <span className="display-inline-block w-[200px] px-2">{value}</span>
              <Button variant={"outline"} size={"icon"} onClick={handleEdit}>
                <Pencil />
              </Button>
            </>
          )}
        </div>
      </div>
    );
  },
);

EditableInput.displayName = "EditableInput";

export { EditableInput };
