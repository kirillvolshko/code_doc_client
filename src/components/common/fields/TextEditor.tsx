"use client";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  Control,
  useController,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { FormLabel, FormMessage } from "@/components/ui/form";

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
    const tempElement = document.createElement("div");

    tempElement.innerHTML = value;

    const images = tempElement.getElementsByTagName("img");

    while (images.length > 0) {
      images[0].parentNode?.removeChild(images[0]);
    }

    field.onChange(tempElement.innerHTML);
  };

  return (
    <div className="grid gap-2 w-full ">
      {label && (
        <div className="flex  md:flex-row gap-4 w-full justify-between items-center">
          <FormLabel className="text-white">{label}</FormLabel>
          <FormMessage className="text-sm font-medium leading-none" />
        </div>
      )}
      <ReactQuill
        placeholder={placeholder}
        className="border-none "
        value={field.value || ""}
        onChange={handleChange}
      />
    </div>
  );
};
