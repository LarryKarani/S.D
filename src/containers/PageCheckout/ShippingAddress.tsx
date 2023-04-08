import Label from "components/Label/Label";
import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import Radio from "shared/Radio/Radio";
import Select from "shared/Select/Select";

interface Props {
  isActive: boolean;
  Alert: boolean;
  onCloseActive: () => void;
  onOpenActive: () => void;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    app: string;
    cite: string;
  };
  setShippingAddress: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      address: string;
      app: string;
      cite: string;
    }>
  >;
}

const ShippingAddress: FC<Props> = ({
  isActive,
  onCloseActive,
  onOpenActive,
  shippingAddress,
  setShippingAddress,
  Alert,
}) => {
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress((prevState) => ({
      ...prevState,
      firstName: event.target.value,
    }));
  };

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress((prevState) => ({
      ...prevState,
      lastName: event.target.value,
    }));
  };

  const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress((prevState) => ({
      ...prevState,
      address: event.target.value,
    }));
  };

  const handleApp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress((prevState) => ({
      ...prevState,
      app: event.target.value,
    }));
  };
  const handleCite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress((prevState) => ({
      ...prevState,
      cite: event.target.value,
    }));
  };

  const renderShippingAddress = () => {
    return (
      <div className=" border border-slate-200 dark:border-slate-700 rounded-xl ">
        <div className=" p-6 flex flex-col sm:flex-row items-start">
          <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <div className="sm:ml-8">
            <h3 className=" text-slate-700 dark:text-slate-300 flex ">
              <span className="uppercase">כתובת למשלוח</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </h3>
          </div>
          <ButtonSecondary
            sizeClass="py-2 px-4 "
            fontSize="text-sm font-medium"
            className="bg-slate-50 dark:bg-slate-800 mt-5 sm:mt-0 sm:ml-auto !rounded-lg"
            onClick={onOpenActive}
          >
            ערוך
          </ButtonSecondary>
        </div>
        <div
          className={`border-t  hebrew-text border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 ${
            isActive ? "block" : "hidden"
          }`}
        >
          {/* ============ */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">שם פרטי</Label>
              <Input
                className="mt-1.5"
                defaultValue="xxx"
                value={shippingAddress.firstName}
                onChange={handleFirstName}
              />
            </div>
            <div>
              <Label className="text-sm">שם משפחה</Label>
              <Input
                className="mt-1.5"
                defaultValue="xxx"
                value={shippingAddress.lastName}
                onChange={handleLastName}
              />
            </div>
          </div>

          {/* ============ */}
          <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-3">
            <div className="flex-1">
              <Label className="text-sm">כתובת</Label>
              <Input
                className="mt-1.5"
                placeholder=""
                defaultValue={"תל אביב, רחוב אבן גבירול 8"}
                type={"text"}
                value={shippingAddress.address}
                onChange={handleAddress}
              />
            </div>
            <div className="sm:w-1/3">
              <Label className="text-sm">מספר דירה</Label>

              <Input
                className="mt-1.5"
                defaultValue="55U - DD5 "
                value={shippingAddress.app}
                onChange={handleApp}
              />
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">עיר</Label>
              <Input
                className="mt-1.5"
                defaultValue="Norris"
                value={shippingAddress.cite}
                onChange={handleCite}
              />
            </div>
            {/* <div>
              <Label className="text-sm">מדינה</Label>
              <Select className="mt-1.5" defaultValue="United States ">
                <option value="United States">United States</option>
                <option value="United States">Canada</option>
                <option value="United States">Mexico</option>
                <option value="United States">Israel</option>
                <option value="United States">France</option>
                <option value="United States">England</option>
                <option value="United States">Laos</option>
                <option value="United States">China</option>
              </Select>
            </div> */}
          </div>

          {/* ============ */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">State/Province</Label>
              <Input className="mt-1.5" defaultValue="Texas" />
            </div>
            <div>
              <Label className="text-sm">Postal code</Label>
              <Input className="mt-1.5" defaultValue="2500 " />
            </div>
          </div> */}

          {/* ============ */}
          <div>
            <Label className="text-sm">סוג משלוח</Label>
            <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <Radio
                label={`<span class="text-sm font-medium">שליח עד הבית <span class="font-light">(30 ש"ח)</span></span>`}
                id="Address-type-home"
                name="Address-type"
                defaultChecked
              />
              <Radio
                label={`<span class="text-sm font-medium">דואר ישראל<span class="font-light">(ללא עלות)</span></span>`}
                id="Address-type-office"
                name="Address-type"
              />
            </div>
          </div>

          {Alert ? (
            <p style={{ color: "red" }}>נא למלא את הפרטים הדרושים </p>
          ) : null}
          {/* ============ */}
          <div className="flex flex-col sm:flex-row pt-6">
            <ButtonPrimary
              className="sm:!px-7 shadow-none"
              onClick={onCloseActive}
            >
              שמור ועבור לתשלום
            </ButtonPrimary>
            {/* <ButtonSecondary
              className="mt-3 sm:mt-0 sm:ml-3"
              onClick={onCloseActive}
            >
              Cancel
            </ButtonSecondary> */}
          </div>
        </div>
      </div>
    );
  };
  return renderShippingAddress();
};

export default ShippingAddress;
