import { useState, useEffect } from 'preact/hooks';
import { Applicant } from './components/Applicant';
import { Loan } from './components/Loan';
import { SourceDetails } from './components/SourceDetails';
import { Property } from './components/Property';
import { BuilderDetails } from './components/BuilderDetails';
import { PropertyDetails } from './components/PropertyDetails';
import { PropertyOtherDetails } from './components/PropertyOtherDetails';
import { GeneralInfo } from './components/GeneralInfo';
import { Guarantor } from './components/Guarantor';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
export const HousingLoanApplication = () => {
    const sections: string[] = [
        'Applicant',
        'Loan',
        'Source Details',
        'Property',
        'Builder Dlts',
        'Property Dlts',
        'Property Other Dlts',
        'General Info.',
        'Gurantor',
    ];
    const [currentSection, setCurrentSection] = useState<string>('');
    const [option, setOption] = useState<string>('Add');
    const [loanAppNo, setLoanAppNo] = useState<string>('');
    console.log(setOption);

    useEffect(() => {
        setCurrentSection(sections[0]);
    }, []);

    return (
        <>
            <PageHeader heading={'Housing Loan Application'}>
                <div className="dg col4">
                    <OptionSelector value={option} setStateFunc={setOption} />
                    <InputComp
                        setStateFunc={setLoanAppNo}
                        name="loanAppNo"
                        value={loanAppNo}
                        label="Loan Application No."
                    />
                </div>
            </PageHeader>
            {currentSection === 'Applicant' ? (
                <Applicant />
            ) : currentSection === 'Loan' ? (
                <Loan />
            ) : currentSection === 'Source Details' ? (
                <SourceDetails />
            ) : currentSection === 'Property' ? (
                <Property />
            ) : currentSection === 'Builder Dlts' ? (
                <BuilderDetails />
            ) : currentSection === 'Property Dlts' ? (
                <PropertyDetails />
            ) : currentSection === 'Property Other Dlts' ? (
                <PropertyOtherDetails />
            ) : currentSection === 'General Info.' ? (
                <GeneralInfo />
            ) : currentSection === 'Gurantor' ? (
                <Guarantor />
            ) : (
                ''
            )}
            <Tabs
                tabsArray={sections}
                onTabSelect={setCurrentSection}
                currentTab={currentSection}
            />
        </>
    );
};
