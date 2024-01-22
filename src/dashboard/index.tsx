// Dashboard.tsx

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BasicDetails from './individual-modules/BasicDetails';
import AddressDetails from './individual-modules/AddressDetails';
import PersonalDetails from './individual-modules/PersonalDetails';
import { useSelector } from 'react-redux';
import { IModuleDetails, IRoleDetails } from '../store/actions/interface';
import ModuleDetails from '../config/ModuleDetails';
import CompanyDetails from './corporate-modules/CompanyDetails';
import ContactPersonDetails from './corporate-modules/ContactPersonDetails';
import CorporateDetails from './corporate-modules/CorporateDetails';

const Dashboard: React.FC = () => {
  const roleDetails: IRoleDetails = useSelector((state: any) => state.roleDetails);

  const [menuItems, setMenuItems] = useState<string[]>([]);

  // Set Sidebar menu items dynamically
  const configureMenuItems = () => {

    const data = roleDetails.modules.map((item: IModuleDetails) => {
      return item.module_name;
    })
    setMenuItems(data);

    // Default set first item of sidebar
    if(data.length > 0){
      setActiveItem(data[0]);
    }

  }

  useEffect(() => {
   configureMenuItems();
  },[])

  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Set active menu item when clicks on sidebar menu
  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  const onSaveDetails = (redirectItem: string) => {
    setActiveItem(redirectItem);
  };

  // Render page dynamically on the active sidebar menu item
  const renderContent = () => {
    switch (activeItem) {
      case ModuleDetails.INDIVIDUAL.BASIC:
        return <BasicDetails 
        onSaveEvent={(redirectItem: string) => onSaveDetails(redirectItem)}
        />;
      case ModuleDetails.INDIVIDUAL.ADDRESS:
        return <AddressDetails 
        onSaveEvent={(redirectItem: string) => onSaveDetails(redirectItem)}
        />;
      case ModuleDetails.INDIVIDUAL.PERSONAL:
        return <PersonalDetails 
        onSaveEvent={(redirectItem: string) => onSaveDetails(redirectItem)}
        />;
      case ModuleDetails.CORPORATE.COMPANY:
        return <CompanyDetails 
        onSaveEvent={(redirectItem: string) => onSaveDetails(redirectItem)}
        />;
      case ModuleDetails.CORPORATE.CONTACT_PERSON:
        return <ContactPersonDetails 
        onSaveEvent={(redirectItem: string) => onSaveDetails(redirectItem)}
        />;
      case ModuleDetails.CORPORATE.CORPORATE:
        return <CorporateDetails />;
      default:
        return <div>Select a menu item to display content.</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header title="Dashboard" />
      <div className="flex flex-1">
        <Sidebar menuItems={menuItems} activeItem={activeItem} onMenuItemClick={handleMenuItemClick} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
