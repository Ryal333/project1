import {useState, useEffect} from "preact/hooks"
import { Applicant } from "./components/Applicant";
import { Loan } from "./components/Loan";
import { SourceDetails } from "./components/Source-details";
import { Property } from "./components/Property";
import { BuilderDetails } from "./components/Builder-details";
import { PropertyDetails } from "./components/Property_details";
import { PropertyOtherDetails } from "./components/Property-other-details";
import { GeneralInfo } from "./components/General-info";
import { Guarantor } from "./components/Guarantor";
export const HousingLoanApplication = () => {
    
  const sections : string[] = ["Applicant","Loan","Source Details","Property","Builder Dlts","Property Dlts","Property Other Dlts","General Info.","Gurantor"];
  const [currentSection, setCurrentSection] = useState<string>("");


  useEffect(()=>{
    setCurrentSection(sections[0])
  }, [])
  
 return (
  <>
  {
    currentSection === "Applicant" ? <Applicant/> : 
    currentSection === "Loan" ? <Loan/> :
    currentSection === "Source Details" ? <SourceDetails/> :
    currentSection === "Property" ? <Property/> : 
    currentSection === "Builder Dlts" ? <BuilderDetails/> : 
    currentSection === "Property Dlts" ? <PropertyDetails/> : 
    currentSection === "Property Other Dlts" ? <PropertyOtherDetails/> :
    currentSection === "General Info." ? <GeneralInfo/> :
    currentSection === "Gurantor" ? <Guarantor/> : "" 
  }
  {
   sections.map((section) =>{
    return <button onClick={()=>{setCurrentSection(section)}}>{section}</button>
   }) 
  }
  </>
 )

}
