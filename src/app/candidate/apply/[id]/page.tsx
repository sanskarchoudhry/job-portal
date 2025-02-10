import React from "react";
import FormWrapper from "./_components/FormWrapper";
import Input from "./_components/Input";
import UploadInput from "./_components/UploadInput";

export default function ApplicationForm({
  searchParams,
}: {
  searchParams: { "job-id": string };
}) {
  return (
    <div>
      <FormWrapper jobID={searchParams["job-id"]}>
        <Input inputLabel="First Name" inputType="text" inputName="firstName" />
        <Input inputLabel="Last Name" inputType="text" inputName="lastName" />
        <Input inputLabel="Email" inputType="email" inputName="userEmail" />
        <Input inputLabel="Last Name" inputType="text" inputName="lastName" />
        <UploadInput
          inputLabel="Attach resume"
          inputType="file"
          inputName="fileUpload"
          inputID="input-id"
        />
        <button type="submit">Apply</button>
      </FormWrapper>
    </div>
  );
}
