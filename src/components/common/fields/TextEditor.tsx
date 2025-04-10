"use client";
import dynamic from "next/dynamic";
import {
  Control,
  useController,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { FormLabel, FormMessage } from "@/components/ui/form";

// Динамический импорт для ReactQuill с отключением SSR
const ReactQuillNoSSR = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

interface TextEditorProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  defaultValue?: PathValue<T, Path<T>>;
}

export const TextEditor = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  defaultValue = "" as PathValue<T, Path<T>>,
}: TextEditorProps<T>) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  const handleChange = (value: string) => {
    // Directly pass the value from the editor to the form
    field.onChange(value);
  };

  return (
    <div className="grid gap-2 w-full">
      {label && (
        <div className="flex md:flex-row gap-4 w-full justify-between items-center">
          <FormLabel className="text-white">{label}</FormLabel>
          <FormMessage className="text-sm font-medium leading-none" />
        </div>
      )}
      <ReactQuillNoSSR
        placeholder={placeholder}
        className="border-none"
        value={field.value || ""}
        onChange={handleChange}
      />
    </div>
  );
};
