export default function PersonalDetailsPreview({ formData }) {
  return (
    <div className="rounded-lg border border-gray-300 p-5">
      <h3 className="font-bold">Preview</h3>
      <p>
        <strong>Full Name:</strong> {formData.fullName || "N/A"}
      </p>
      <p>
        <strong>Email:</strong> {formData.email || "N/A"}
      </p>
      <p>
        <strong>Phone Number:</strong> {formData.phoneNumber || "N/A"}
      </p>
      <p>
        <strong>Address:</strong> {formData.address || "N/A"}
      </p>
    </div>
  );
}
