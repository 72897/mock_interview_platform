import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, FieldValues, Path, Control } from "react-hook-form";

interface FormFileProps<T> extends FieldValues {
  control: Control<T>;
  name: Path<T>;
  // name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "file";
  // type?: "text" | "email" | "password" | "file";
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFileProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            placeholder={placeholder}
            {...field}
            //hide password in the console log
            type={type}
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
