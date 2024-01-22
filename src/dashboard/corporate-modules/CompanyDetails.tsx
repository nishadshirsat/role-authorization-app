import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import CustomForm from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addCompanyDetails } from '../../store/actions';
import ModuleDetails from '../../config/ModuleDetails';
import { ICompanyDetails } from './interfaces';
import CustomSelect from '../../components/form-components/CustomSelect';
import { COMPANY_TIN_REGIX } from '../../utils/constants';

interface CompanyDetailsProps {
  onSaveEvent: (values: string) => void;
}

const CompanyDetails = ({ onSaveEvent }: CompanyDetailsProps) => {

  const state = useSelector((state: any) => state);
  const companyDetails: ICompanyDetails = state.companyDetails;
  const [isSubmit, setSubmit] = useState(false);

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const submitStatus = GetIndividualSubmitStatus();
    setSubmit(submitStatus);
  }, [])

  const initialValues: ICompanyDetails = {
    companyNumber: '',
    companyTIN: '',
    companyType: '',
  };

  const companyTypes = ['SME', 'MME', 'LLP', 'Startup', 'Private', 'Public'];

  const validationSchema = Yup.object({
    companyNumber: Yup.string().required('Company Number is required'),
    companyTIN: Yup.string()
      .matches(COMPANY_TIN_REGIX, 'Invalid Company TIN')
      .required('Company TIN is required'),
    companyType: Yup.string().required('Company Type is required')
  });

  const handleSubmit = async (values: any) => {

    // Dispatch Action to store Company Details
    await dispatch(addCompanyDetails(values));

    const submitStatus = GetIndividualSubmitStatus();
    if (submitStatus) {
      setSubmit(submitStatus);
    } else {
      onSaveEvent(ModuleDetails.CORPORATE.CONTACT_PERSON);
    }

  };

  // Get Submit Form Status 
  const GetIndividualSubmitStatus = (): boolean => {

    const contactPersonDetails = state.contactPersonDetails;

    if (companyDetails.isStored === false) {
      return false;
    } else if (contactPersonDetails.isStored === false) {
      return false;
    }

    return true;
  }


  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Company Details</h1>
        <CustomForm
          initialValues={companyDetails ? companyDetails : initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Input label="Company Number" name="companyNumber" type="text" />
          <Input label="Company TIN" name="companyTIN" type="text" />

          <CustomSelect list={companyTypes} label="Select Company Type" name="companyType" />

          {
            isSubmit ? <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit Form
            </button> : <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              type="submit">
              Save
            </button>
          }
        </CustomForm>
      </div>
    </div>
  );
};

export default CompanyDetails;
