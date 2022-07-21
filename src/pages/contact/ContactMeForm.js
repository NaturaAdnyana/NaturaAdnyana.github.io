import React, { useState } from "react";
import axios from "axios";
import OutlineBtn from "../../shared/OutlineBtn";
import AirplaneIcon from "../../assets/icons/AirplaneIcon";
import SuccessIcon from "../../assets/icons/SuccessIcon";
import FailedIcon from "../../assets/icons/FailedIcon";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitBtnStatus, setSubmitBtnStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitBtnStatus({ loading: true, success: false, error: false });
    axios
      .post(process.env.REACT_APP_CONTACT_FORM_ENDPOINT, formData)
      .then((response) => {
        if (response.status === 200) {
          setSubmitBtnStatus({ loading: false, success: true, error: false });
          setLocalStorage(formData.name);
        } else {
          setSubmitBtnStatus({ loading: false, success: false, error: true });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setTimeout(() => handleReset(), 3000));
  };

  const setLocalStorage = (name) => {
    const CACHE_KEY = "USERNAME";
    localStorage.setItem(CACHE_KEY, name);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setSubmitBtnStatus({ loading: false, success: false, error: false });
  };

  return (
    <form
      className="flex flex-col w-full mt-6 lg:px-20 space-y-5"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 rounded-lg text-black"
        type="text"
        placeholder="Your name here..."
        required
        value={formData.name || ""}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="p-2 rounded-lg text-black"
        type="email"
        placeholder="Your email here..."
        required
        value={formData.email || ""}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        className="p-2 rounded-lg text-black"
        type="text"
        placeholder="Your thoughts here..."
        required
        value={formData.message || ""}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit">
        <OutlineBtn hint="Send">
          {!submitBtnStatus.loading &&
            !submitBtnStatus.success &&
            !submitBtnStatus.error && (
              <AirplaneIcon className="w-6 h-6 inline ml-2 -translate-y-1 rotate-45 transition-all group-hover:rotate-90  group-hover:translate-y-0 group-hover:translate-x-1" />
            )}
          {submitBtnStatus.loading && (
            <div className="ml-2 bg-blue-800 rounded-full relative inline-flex mr-3 opacity-50">
              <span className="animate-ping bg-indigo-900 p-3 rounded-full inline-flex"></span>
            </div>
          )}
          {submitBtnStatus.success && (
            <SuccessIcon className="w-6 h-6 inline ml-2 stroke-green-500" />
          )}
          {submitBtnStatus.error && (
            <FailedIcon className="w-6 h-6 inline ml-2 stroke-orange-500" />
          )}
        </OutlineBtn>
      </button>
    </form>
  );
};

export default ContactMeForm;
