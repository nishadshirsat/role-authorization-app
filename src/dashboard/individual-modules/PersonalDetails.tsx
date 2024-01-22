import * as Yup from 'yup';
import CustomForm from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addPersonalDetails } from '../../store/actions';
import { IPersonalDetails } from './interfaces';
import { useEffect, useState } from 'react';
import { PAN_NO_REGIX, VEHICLE_NO_REGIX } from '../../utils/constants';

interface AddressDetailsProps {
  onSaveEvent: (values: string) => void;
}

const PersonalDetails = ({ onSaveEvent }: AddressDetailsProps) => {

  const state = useSelector((state: any) => state);
  const personalDetails: IPersonalDetails = state.personalDetails;
  const [isSubmit, setSubmit] = useState(false);

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const submitStatus = GetIndividualSubmitStatus();
    setSubmit(submitStatus);
  }, [])

  const initialValues: IPersonalDetails = {
    panNumber: '',
    vehicleNumber: ''
  };

  const validationSchema = Yup.object({
    panNumber: Yup.string()
      .matches(PAN_NO_REGIX, 'Invalid PAN Number')
      .required('PAN Number is required'),
    vehicleNumber: Yup.string()
      .matches(VEHICLE_NO_REGIX, 'Invalid Vehicle Number')
      .required('Vehicle Number is required')
  });

  const handleSubmit = async (values: any) => {
    // Dispatch Action to store Personal Details
    await dispatch(addPersonalDetails(values));

    const submitStatus = GetIndividualSubmitStatus();
    setSubmit(submitStatus);

  };

  // Get Submit Form Status 
  const GetIndividualSubmitStatus = (): boolean => {

    const addressDetails = state.addressDetails;
    const basicDetails = state.basicDetails;

    if (basicDetails.isStored === false) {
      return false;
    } else if (addressDetails.isStored === false) {
      return false;
    } else if (personalDetails.isStored === false) {
      return false;
    }

    return true;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Personal Details</h1>
        <CustomForm
          initialValues={personalDetails ? personalDetails : initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Input label="Pan Number" name="panNumber" type="text" />
          <Input label="Vehicle Number" name="vehicleNumber" type="text" />

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

export default PersonalDetails;
