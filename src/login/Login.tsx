import { useDispatch } from "react-redux";
import CustomForm from "../components/form-components/Form";
import Input from "../components/form-components/Input";
import { addRoleDetails } from "../store/actions";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import * as Yup from 'yup';
import { getLoginApiResponse } from "../services/LoginService";

interface ILoginValues {
    email: string;
    password: string;
}

const Login = () => {

    const dispatch: Dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const initialValues: ILoginValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
      });

    const handleSubmit = async (values: any) => {

        //Fetch the login API details
        const loginRoleDetails = await getLoginApiResponse(values.email, values.password);

        if(loginRoleDetails){
            dispatch(addRoleDetails(loginRoleDetails))
            navigate('/dashboard');
        }
    };


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <ul className="pb-4">
                <li><strong>Corporate login: </strong>  Use `example@corporate.com` like email for login</li>
                <li><strong>Individual login: </strong>  Use any mail id like `example@gmail.com`</li>
            </ul>
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-6">Login</h1>
                <CustomForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    <Input label="Email" name="email" type="email" />
                    <Input label="Password" name="password" type="password" />
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        type="submit">
                        Submit
                    </button>
                </CustomForm>
            </div>
        </div>        
    );
}

export default Login;
