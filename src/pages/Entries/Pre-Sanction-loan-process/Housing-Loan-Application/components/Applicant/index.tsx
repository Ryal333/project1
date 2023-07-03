import { useState } from "preact/hooks";
import PageBody from "../../../../../../shared/components/PageBody/PageBody";
import PageHeader from "../../../../../../shared/components/PageHeader/PageHeader";
import Tabs from "../../../../../../shared/components/Tabs/Tabs";
import Input from "../../../../../../shared/components/Input/Input";

class applicantData  {
  loanCode : string = '';
  applicationDate : string = '';
  projectType : string = '';
  propertyType : string = '';
  locationOfProperty : string = '';
  repaymentFrequency : string = '';
  agentCode : string = '';
  applicationIndividualNumber : string = '';
  address : string = '';
  employerBusinessName : string = '';
  photographAttached : string = '';
  proofOfAgeAttached : string = '';
  proofOfResidenceAttached : string = '';
  noOfJointCoApplicant : string = '';
  applicantsSl : string = '';
  indivNo : string = '';
  JCApplicantAddress : string = '';
  JCEmployerBusinessName : string = '';
  relationshipWithApplicant : string = '';
  JCPhotographAttached : string = '';
  JCProofOfAgeAttached: string = '';
  JCProofOfResidenceAttached : string = '';
  includeInIncomeCalc : string = '';
}

export const Applicant = () => {
  const [formError, setFormError] = useState<boolean>(false)
  const [formData, setFormData] = useState(new applicantData())


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
