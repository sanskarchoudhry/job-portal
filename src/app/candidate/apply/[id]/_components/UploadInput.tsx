"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function UploadInput({
  inputName,
  inputType,
  inputLabel,
  inputID,
}: {
  inputName: string;
  inputType: string;
  inputLabel: string;
  inputID: string;
}) {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={inputID}>{inputLabel}</label>
      <input type={inputType} id={inputID} {...register(inputName)} />
    </div>
  );
}
