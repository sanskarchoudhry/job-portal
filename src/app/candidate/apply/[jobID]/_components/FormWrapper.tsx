"use client";
import { useParams } from "next/navigation";
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
  const params = useParams();
  console.log(params["jobID"]);

  const handleFormSubmit = formMethods.handleSubmit((data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("userEmail", data.userEmail);
    formData.append("fileUpload", data.fileUpload[0]);

    // Log form data or send it via fetch
    console.log("Form Data:", data);
    // fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((response) => console.log("Success:", response))
    //   .catch((error) => console.error("Error:", error));
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        {children}
      </form>
    </FormProvider>
  );
}
