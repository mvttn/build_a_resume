import Input from "../Input";
import PropTypes from "prop-types";

PersonalDetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function PersonalDetailsForm({ formData, onChange }) {
  return (
    <>
      <Input
        id="fullName"
        placeholder="Enter First and Last Name"
        labelText="Full Name"
        value={formData.fullName}
        onChange={onChange}
      />
      <Input
        id="email"
        placeholder="Enter Email"
        inputType="email"
        labelText="Email"
        value={formData.email}
        onChange={onChange}
      />
      <Input
        id="phoneNumber"
        placeholder="Enter Phone Number"
        type="tel"
        labelText="Phone Number"
        value={formData.phoneNumber}
        onChange={onChange}
      />
      <Input
        id="address"
        placeholder="City, Country"
        labelText="Address"
        value={formData.address}
        onChange={onChange}
      />
    </>
  );
}
