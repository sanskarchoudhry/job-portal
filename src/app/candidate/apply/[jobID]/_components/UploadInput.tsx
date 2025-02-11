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
      <input
        type={inputType}
        id={inputID}
        {...register(inputName, {
          required: "File is required",
          validate: {
            fileType: (fileList) =>
              fileList[0]?.type === "application/pdf" ||
              fileList[0]?.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
              "Only PDF or DOCX files are allowed",
          },
        })}
        accept=".pdf,.docx"
      />
    </div>
  );
}
