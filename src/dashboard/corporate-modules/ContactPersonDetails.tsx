import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import CustomForm from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addContactPersonDetails } from '../../store/actions';
import { IContactPersonDetails } from './interfaces';
import { MOBILE_NO_REGIX } from '../../utils/constants';

interface ContactPersonProps {
  onSaveEvent: (values: string) => void;
}


const ContactPersonDetails = ({ onSaveEvent }: ContactPersonProps) => {

  const state = useSelector((state: any) => state);
  const contactPersonDetails: IContactPersonDetails = state.contactPersonDetails;
  const [isSubmit, setSubmit] = useState(false);

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const submitStatus = GetIndividualSubmitStatus();
    setSubmit(submitStatus);
  }, [])

  const initialValues: IContactPersonDetails = {
    contactPersonName: '',
    contactPersonMobile: '',
    contactPersonEmail: '',
    designation: ''
  };

  const validationSchema = Yup.object({
    contactPersonName: Yup.string().required('Name is required'),
    contactPersonMobile: Yup.string()
      .matches(MOBILE_NO_REGIX, 'Invalid Mobile Number')
      .required('Mobile Number is required'),
    contactPersonEmail: Yup.string()
      .email('Invalid Email Address')
      .required('Email is required'),
    designation: Yup.string().required('Designation is required')
  });

  const handleSubmit = async (values: any) => {

    // Dispatch Action to store ContactPersonDetails
    await dispatch(addContactPersonDetails(values));

    const submitStatus = GetIndividualSubmitStatus();
    if (submitStatus) {
      setSubmit(submitStatus);
    }

  };

  // Get Submit Form Status 
  const GetIndividualSubmitStatus = (): boolean => {

    const companyDetails = state.companyDetails;

    if (contactPersonDetails.isStored === false) {
      return false;
    } else if (companyDetails.isStored === false) {
      return false;
    }

    return true;
  }


  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Contact Person Details</h1>
        <CustomForm
          initialValues={contactPersonDetails ? contactPersonDetails : initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Input label="Contact Person Name" name="contactPersonName" type="text" />
          <Input label="Contact Person Mobile" name="contactPersonMobile" type="number" />
          <Input label="Contact Person Email" name="contactPersonEmail" type="text" />
          <Input label="Designation" name="designation" type="text" />

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

export default ContactPersonDetails;
