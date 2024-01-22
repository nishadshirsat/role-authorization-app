import { IRoleDetails } from "../store/actions/interface";


export const getLoginApiResponse = (email: string, password: string): IRoleDetails | null => {

    let roleDetails: IRoleDetails | null = null

    //Fetch the Login API and return the response
    // I have commented Corporate Details as Test doesn't contain any information

    if (email.toLowerCase().includes('corporate')) {

        roleDetails = {
            role: "Corporate",
            modules: [
                {
                    module_name: "Company Details"
                },                  
                {
                    module_name: "Contact Person Details"
                }
                // {
                //     module_name: "Corporate Details"
                // },
            ]
        }

    } else {
        roleDetails = {
            role: "Individual",
            modules: [
                {
                    module_name: "Basic Details"
                },
                {
                    module_name: "Address Details"
                },
                {
                    module_name: "Personal Details"
                }
            ]
        }
   
    }

    return roleDetails;

}