"use client";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function FormWrapper({
  children,
  jobID,
}: {
  children: ReactNode;
  jobID: string;
}) {
  const formMethods = useForm();

  const handleFormSubmit = formMethods.handleSubmit((data) => {
    console.log(data, jobID);
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleFormSubmit}>{children}</form>
    </FormProvider>
  );
}
