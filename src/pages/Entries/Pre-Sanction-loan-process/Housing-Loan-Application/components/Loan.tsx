import { useEffect, useState } from "preact/hooks";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import Tabs from "../../../../../shared/components/Tabs/Tabs";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import SelectComp from "../../../../../shared/components/SelectComp/SelectComp";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";

class applicantData {
  loanPurposeCode: string = "";
  loanAmtRequested: string = "";
  basisOfInterestRate: string = "";
  interestCatagory: string = "";
  tenor: string = "";
  interestRate: string = "";
  loanPurposeDescription: string = "";
}

export const Loan = () => {
  const [formError, setFormError] = useState<boolean>(false);
  const [formData, setFormData] = useState<applicantData>(new applicantData());
  const dummyoptionArray = [{ value: "" }, { value: "o1" }];
  const formValuesController = (inputVal: string, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputVal,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <PageBody>
        <form action="">
          <fieldset className="fieldWrapper dg col4">
            <InputComp
              formValuesController={formValuesController}
              name="loanPurposeCode"
              value={formData.loanPurposeCode}
              label="Loan Purpose Code"
            />
            <div class="cs2">
              <InputComp
                formValuesController={formValuesController}
                name="loanAmtRequested"
                value={formData.loanAmtRequested}
                label="Loan Amount Requested"
                format="amount"
              />
            </div>
            <SelectComp
              name="basisOfInterestRate"
              value={formData.basisOfInterestRate}
              label="Basis of Interest Rate"
              optionData={dummyoptionArray}
              formValuesController={formValuesController}
            />
            <InputComp
              formValuesController={formValuesController}
              name="interestCatagory"
              value={formData.interestCatagory}
              label="Interest Category"
            />
            <InputComp
              formValuesController={formValuesController}
              name="tenor"
              value={formData.tenor}
              label="Tenor (Loan Period in Months)"
            />

            <InputComp
              formValuesController={formValuesController}
              name="interestRate"
              value={formData.interestRate}
              label="Interest Rate"
              type="text"
              format="interest"
            />
            <div class="cs4">
              <TextAreaComp
                formValuesController={formValuesController}
                name="loanPurposeDescription"
                value={formData.loanPurposeDescription}
                label="Loan Purpose Description"
              />
            </div>
          </fieldset>
        </form>
      </PageBody>
    </>
  );
};
