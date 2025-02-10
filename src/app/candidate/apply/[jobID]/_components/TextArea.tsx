"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function TextArea({ inputName }: { inputName: string }) {
  const { register } = useFormContext();

  return (
    <div>
      <textarea {...register(inputName)} />
    </div>
  );
}
