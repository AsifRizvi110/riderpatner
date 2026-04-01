import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { useState } from "react";

interface CompanyFormProps {
  onClose: () => void;
}

interface CompanyFormData {
  name: string;
  surname: string;
  email: string;
  mobile: string;
  whatsapp: string;
  nif: string;
  address: string;
  postalCode: string;
  city: string;
  fleet: string[]; // checkboxes
  hasId: "Yes" | "No";
  applyId: "Yes" | "No";
  platforms: string[]; // conditional checkboxes
  principalCae?: string; // optional
  secondaryCae?: string; // optional
}

export function CompanyForm({ onClose }: CompanyFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CompanyFormData>({
    defaultValues: {
      fleet: [],
      platforms: [],
    },
  });
  const [hasId, setHasId] = useState<string | null>(null);
  const [applyId, setApplyId] = useState<string | null>(null);

  const onSubmit = async (data: CompanyFormData) => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert("Error");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 p-6 bg-white rounded-2xl shadow-lg"
    >
      {/* ================= Name & Surname ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/, // sirf letters aur spaces
                message: "Only letters allowed",
              },
            })}
            className="input"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label className="label">Surname</label>

          <input
            placeholder="Last Name"
            {...register("surname", {
              required: "Required", // agar blank submit hua
              pattern: {
                value: /^[A-Za-z\s]+$/, // sirf letters aur spaces allow
                message: "Only letters allowed", // error message
              },
            })}
            className="input"
          />
          {errors.surname && (
            <span className="text-red-500 text-xs mt-1">
              {errors.surname.message}
            </span>
          )}
        </div>
      </div>

      {/* ================= Email & Mobile ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
            className="input"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">Required</span>
          )}
        </div>
        <div>
          <label className="label">Mobile Number</label>
          <input
            placeholder="Mobile Number"
            type="tel"
            {...register("mobile", {
              required: "Required",
              pattern: {
                value: /^[0-9]+$/, // sirf digits allow
                message: "Only numbers allowed",
              },
              minLength: {
                value: 9, // optional: minimum 9 digits
                message: "Too short",
              },
              maxLength: {
                value: 15, // optional: maximum 15 digits
                message: "Too long",
              },
            })}
            className="input"
          />
          {errors.mobile && (
            <span className="text-red-500 text-xs mt-1">
              {errors.mobile.message}
            </span>
          )}
        </div>
      </div>

      {/* ================= WhatsApp & NIF ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">WhatsApp Number</label>
          <input
            placeholder="WhatsApp Number"
            type="tel"
            {...register("whatsapp", {
              required: "Required",
              pattern: {
                value: /^[0-9]+$/, // sirf digits allow
                message: "Only numbers allowed",
              },
              minLength: {
                value: 9, // optional: minimum 9 digits
                message: "Too short",
              },
              maxLength: {
                value: 15, // optional: maximum 15 digits
                message: "Too long",
              },
            })}
            className="input"
          />
          {errors.whatsapp && (
            <span className="text-red-500 text-xs mt-1">
              {errors.whatsapp.message}
            </span>
          )}
        </div>
        <div>
          <label className="label">NIF Number</label>
          <input
            placeholder="NIF Number"
            type="text"
            {...register("nif", {
              required: "Required",
              pattern: {
                value: /^[0-9]{9}$/, // sirf 9 digits allow
                message: "Must be exactly 9 numbers",
              },
              minLength: {
                value: 9,
                message: "Must be exactly 9 numbers",
              },
              maxLength: {
                value: 9,
                message: "Must be exactly 9 numbers",
              },
            })}
            className="input"
          />
          {errors.nif && (
            <span className="text-red-500 text-xs mt-1">
              {errors.nif.message}
            </span>
          )}
        </div>
      </div>

      {/* ================= Address → Postal Code → City ================= */}
      <div>
        <label className="label">Address</label>
        <input
          placeholder="Address"
          {...register("address", { required: true })}
          className="input"
        />
        {errors.address && (
          <span className="text-red-500 text-xs mt-1">Required</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Postal Code</label>
          <input
            placeholder="Postal Code"
            {...register("postalCode", { required: true })}
            className="input"
          />
          {errors.postalCode && (
            <span className="text-red-500 text-xs mt-1">Required</span>
          )}
        </div>
        <div>
          <label className="label">City</label>
          <input
            placeholder="City"
            {...register("city", { required: true })}
            className="input"
          />
          {errors.city && (
            <span className="text-red-500 text-xs mt-1">Required</span>
          )}
        </div>
      </div>

      {/* ================= Fleet Selection ================= */}
      <div>
        <label className="label">Fleet Selection</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {["Uber Eats", "Uber Drive", "Bolt Drive", "Bolt Food"].map(
            (item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={item}
                  {...register("fleet", {
                    required: "Please select at least one fleet",
                  })}
                  className="w-4 h-4 text-blue-600"
                />
                {item}
              </label>
            ),
          )}
        </div>
        {/* Error message */}
        {errors.fleet && (
          <p className="text-red-500 mt-1 text-sm">{errors.fleet.message}</p>
        )}
      </div>
      {/* ================= Uber/Bolt ID & Apply ID Side by Side ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Do you have Uber/Bolt ID */}
        <div>
          <label className="label">Do you have Uber/Bolt ID?</label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Yes"
                {...register("hasId", { required: "Please select Yes or No" })}
                onClick={() => setHasId("Yes")}
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="No"
                {...register("hasId", { required: "Please select Yes or No" })}
                onClick={() => setHasId("No")}
              />
              No
            </label>
          </div>
          {errors.hasId && (
            <p className="text-red-500 text-sm mt-1">{errors.hasId.message}</p>
          )}
        </div>

        {/* Do you want to apply Uber/Bolt ID */}
        {hasId !== "Yes" && (
  <div>
    <label className="label">Do you want to apply Uber/Bolt ID?</label>
    <div className="grid grid-cols-2 gap-4 mt-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="Yes"
          {...register("applyId", {
            required: "Please select Yes or No",
            validate: (value) =>
              value === "Yes" || hasId === "Yes" || "Select at least one Yes",
          })}
        />
        Yes
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="No"
          {...register("applyId", {
            required: "Please select Yes or No",
            validate: (value) =>
              value === "Yes" || hasId === "Yes" || "Select at least one Yes",
          })}
        />
        No
      </label>
    </div>
    {errors.applyId && (
      <p className="text-red-500 text-sm mt-1">{errors.applyId.message}</p>
    )}
  </div>
)}
      </div>

      {/* ================= Conditional Platforms ================= */}
      {(hasId === "Yes" || watch("applyId") === "Yes") && (
        <div className="mt-4">
          <label className="label">Select Platform</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["Uber Eats", "Uber Drive", "Bolt Drive", "Bolt Food"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={item}
                    {...register("platforms")}
                    className="w-4 h-4 text-blue-600"
                  />
                  {item}
                </label>
              ),
            )}
          </div>
        </div>
      )}

      {/* ================= Self-Employed & CAE Side by Side ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="label">Principal CAE / CIRS</label>
          <input
            {...register("principalCae")}
            className="input"
            placeholder="Optional"
          />
        </div>
        <div>
          <label className="label">Secondary CAE / CIRS</label>
          <input
            {...register("secondaryCae")}
            className="input"
            placeholder="Optional"
          />
        </div>
      </div>

      {/* ================= Submit ================= */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        type="submit"
        className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg mt-4"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </motion.button>
    </form>
  );
}
