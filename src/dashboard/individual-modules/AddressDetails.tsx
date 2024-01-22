import * as Yup from 'yup';
import CustomForm from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addAddressDetails } from '../../store/actions';
import ModuleDetails from '../../config/ModuleDetails';
import { IAddressDetails } from './interfaces';
import { useEffect, useState } from 'react';
import { PINCODE_REGIX } from '../../utils/constants';

interface AddressDetailsProps {
  onSaveEvent: (values: string) => void;
}

const AddressDetails = ({ onSaveEvent }: AddressDetailsProps) => {

  const state = useSelector((state: any) => state);
  const addressDetails: IAddressDetails = state.addressDetails;
  const [isSubmit, setSubmit] = useState(false);
  const dispatch: Dispatch = useDispatch();


  // Get Submit Form Status 
  const GetIndividualSubmitStatus = (): boolean => {

    const personalDetails = state.personalDetails;
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


  useEffect(() => {
    const submitStatus = GetIndividualSubmitStatus();
    setSubmit(submitStatus);
  }, [])


  const initialValues: IAddressDetails = {
    address: '',
    district: '',
    city: '',
    state: '',
    pincode: null
  };

  const validationSchema = Yup.object({
    address: Yup.string().required('Address is required'),
    district: Yup.string().required('District is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string()
      .matches(PINCODE_REGIX, 'Pin code must be a 6-digit number')
      .required('Pin code is required')
  });

  const handleSubmit = async (values: any) => {

    // Dispatch Action to store Address Details
    await dispatch(addAddressDetails(values));
    onSaveEvent(ModuleDetails.INDIVIDUAL.PERSONAL);

  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Address Details</h1>
        <CustomForm
          initialValues={addressDetails ? addressDetails : initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Input label="Address" name="address" type="text" />
          <Input label="District" name="district" type="text" />
          <Input label="City" name="city" type="text" />
          <Input label="State" name="state" type="text" />
          <Input label="Pincode" name="pincode" type="number" />


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

export default AddressDetails;
