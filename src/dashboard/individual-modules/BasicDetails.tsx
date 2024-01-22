import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import CustomForm from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import { IBasicDetails } from './interfaces';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addBasicDetails } from '../../store/actions';
import ModuleDetails from '../../config/ModuleDetails';
import InputDatePicker from '../../components/form-components/InputDatePicker';
import { MOBILE_NO_REGIX } from '../../utils/constants';

interface BasicDetailsProps {
    onSaveEvent: (values: string) => void;
}


const BasicDetails = ({ onSaveEvent }: BasicDetailsProps) => {

    const state = useSelector((state: any) => state);
    const basicDetails: IBasicDetails = state.basicDetails;
    const [isSubmit, setSubmit] = useState(false);

    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        const submitStatus = GetIndividualSubmitStatus();
        setSubmit(submitStatus);
    }, [])

    const initialValues: IBasicDetails = {
        name: '',
        mobileNumber: '',
        email: '',
        birthDate: new Date(),
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        mobileNumber: Yup.string().matches(MOBILE_NO_REGIX, 'Invalid mobile number').required('Mobile number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        birthDate: Yup.date()
            .max(new Date(), 'Selected date must be in the past')
            .required('Birth date is required')
            .test('is-adult', 'Must be at least 18 years old', function (value) {
                const today = new Date();
                const minBirthDate = new Date();
                minBirthDate.setFullYear(today.getFullYear() - 18);
                return value <= minBirthDate;
            }),
    });

    const handleSubmit = async (values: any) => {

        // Dispatch Action to store Basic Details
        await dispatch(addBasicDetails(values));

        const submitStatus = GetIndividualSubmitStatus();
        if (submitStatus) {
            setSubmit(submitStatus);
        } else {
            onSaveEvent(ModuleDetails.INDIVIDUAL.ADDRESS);
        }

    };

    // Get Submit Form Status 
    const GetIndividualSubmitStatus = (): boolean => {

        const addressDetails = state.addressDetails;
        const personalDetails = state.personalDetails;

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
                <h1 className="text-2xl font-semibold mb-6">Basic Details</h1>
                <CustomForm
                    initialValues={basicDetails ? basicDetails : initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    <Input label="Name" name="name" type="text" />
                    <Input label="Mobile Number" name="mobileNumber" type="text" />                
                    <InputDatePicker label="Select Birth Date" name="birthDate" type="text" />
                    <Input label="Email" name="email" type="email" />

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

export default BasicDetails;
