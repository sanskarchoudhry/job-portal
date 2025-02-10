"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Input({
  inputType,
  inputLabel,
  inputName,
}: {
  inputType: string;
  inputLabel: string;
  inputName: string;
}) {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={inputName}>{inputLabel}</label>
      <input type={inputType} {...register(inputName)} />
    </div>
  );
}
