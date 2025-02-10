import React from "react";
import FormWrapper from "./_components/FormWrapper";
import Input from "./_components/Input";
import UploadInput from "./_components/UploadInput";

const ApplicationForm = async ({ params }: { params: { jobID: string } }) => {
  const jobId = await params.jobID;
  console.log(jobId);

  return (
    <div>
      <FormWrapper jobID={jobId}>
        <Input inputLabel="First Name" inputType="text" inputName="firstName" />
        <Input inputLabel="Last Name" inputType="text" inputName="lastName" />
        <Input inputLabel="Email" inputType="email" inputName="userEmail" />
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
};

export default ApplicationForm;
