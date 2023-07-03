import { useState } from "preact/hooks";

type applicantData = {
  loanCode : string;
  applicationDate : string;
  projectType : string;
  propertyType : string;
  locationOfProperty : string;
  repaymentFrequency : string;
  agentCode : string;
  applicationIndividualNumber : string;
  address : string;
  employerBusinessName : string;
  photographAttached : string;
  proofOfAgeAttached : string;
  proofOfResidenceAttached : string;
  noOfJointCoApplicant : string;
  applicantsSl : string;
  indivNo : string;
  JCApplicantAddress : string;
  JCEmployerBusinessName : string;
  relationshipWithApplicant : string;
  JCPhotographAttached : string;
  JCProofOfAgeAttached: string;
  JCProofOfResidenceAttached : string;
  includeInIncomeCalc : string;
}

export const Applicant = () => {
  const [formData, setFormData] = useState<applicantData>({
    loanCode : "",
    applicationDate : "",
    projectType : "",
    propertyType : "",
    locationOfProperty : "",
    repaymentFrequency : "",
    agentCode : "",
    applicationIndividualNumber : "",
    address : "",
    employerBusinessName : "",
    photographAttached : "",
    proofOfAgeAttached : "",
    proofOfResidenceAttached : "",
    noOfJointCoApplicant : "",
    applicantsSl : "",
    indivNo : "",
    JCApplicantAddress : "",
    JCEmployerBusinessName : "",
    relationshipWithApplicant : "",
    JCPhotographAttached : "",
    JCProofOfAgeAttached: "",
    JCProofOfResidenceAttached : "",
    includeInIncomeCalc : "",
  })


  const formValuesController = (inputVal : string, name : string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputVal
    }));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
   
  }

  return (
    <div>Applicant</div>
  )
}
