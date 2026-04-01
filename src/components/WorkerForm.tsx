import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface WorkerFormProps {
  onClose: () => void;
}

interface WorkerFormData {
  type: string; // Sheet2 ke liye
  name: string;
  surname: string;
  email: string;
  mobile: string;
  whatsapp: string;
  nif: string;
  address: string;
  postalCode: string;
  city: string;
  fleet: string[];
  hasId?: "Yes" | "No";
  applyId?: "Yes" | "No";
  platforms?: string[];
  principalCae?: string;
  secondaryCae?: string;
}

export function WorkerForm({ onClose }: WorkerFormProps) {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<WorkerFormData>({
    defaultValues: { fleet: [], platforms: [], type: "worker" }
  });

  const [hasId, setHasId] = useState<string | null>(null);

  const onSubmit = async (data: WorkerFormData) => {
    try {
      // Sheet2 Google Apps Script URL
     await fetch("https://script.google.com/macros/s/AKfycbyliGnXOJqHS_SB8iXw554fgVXKoe1dqFnaRJuH_3xnkvtupcJLQzONZobftjNNYI_6nQ/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});

      alert("Worker form submitted successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6 bg-white rounded-2xl shadow-lg">

      {/* Name & Surname */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Name</label>
          <input
            {...register("name", { required: "Required", pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters allowed" } })}
            className="input"
            placeholder="Enter name"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
        <div>
          <label className="label">Surname</label>
          <input
            {...register("surname", { required: "Required", pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters allowed" } })}
            className="input"
            placeholder="Enter surname"
          />
          {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
        </div>
      </div>

      {/* Email & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Email</label>
          <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
          {errors.email && <span className="text-red-500 text-xs">Required</span>}
        </div>
        <div>
          <label className="label">Mobile</label>
          <input {...register("mobile", { required: true })} type="tel" className="input" placeholder="Mobile" />
          {errors.mobile && <span className="text-red-500 text-xs">Required</span>}
        </div>
      </div>

      {/* WhatsApp & NIF */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">WhatsApp</label>
          <input {...register("whatsapp", { required: true })} type="tel" className="input" placeholder="WhatsApp" />
        </div>
        <div>
          <label className="label">NIF</label>
          <input {...register("nif", { required: true })} type="text" className="input" placeholder="NIF" />
        </div>
      </div>

      {/* Address, Postal, City */}
      <div>
        <label className="label">Address</label>
        <input {...register("address", { required: true })} className="input" placeholder="Address" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Postal Code</label>
          <input {...register("postalCode", { required: true })} className="input" placeholder="Postal Code" />
        </div>
        <div>
          <label className="label">City</label>
          <input {...register("city", { required: true })} className="input" placeholder="City" />
        </div>
      </div>

      {/* Fleet */}
      <div>
        <label className="label">Fleet</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {["Uber Eats", "Uber Drive", "Bolt Drive", "Bolt Food"].map(item => (
            <label key={item} className="flex items-center gap-2">
              <input type="checkbox" value={item} {...register("fleet")} className="w-4 h-4 text-blue-600" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Uber/Bolt ID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">Do you have Uber/Bolt ID?</label>
          <div className="flex gap-4 mt-2">
            <label><input type="radio" value="Yes" {...register("hasId")} onClick={() => setHasId("Yes")} /> Yes</label>
            <label><input type="radio" value="No" {...register("hasId")} onClick={() => setHasId("No")} /> No</label>
          </div>
        </div>
        <div>
          <label className="label">Do you want to apply Uber/Bolt ID?</label>
          <div className="flex gap-4 mt-2">
            <label><input type="radio" value="Yes" {...register("applyId")} /> Yes</label>
            <label><input type="radio" value="No" {...register("applyId")} /> No</label>
          </div>
        </div>
      </div>

      {/* Platforms (Conditional) */}
      {(hasId === "Yes" || watch("applyId") === "Yes") && (
        <div>
          <label className="label">Select Platforms</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["Uber Eats", "Uber Drive", "Bolt Drive", "Bolt Food"].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" value={item} {...register("platforms")} />
                {item}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* CAE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="label">Principal CAE / CIRS</label>
          <input {...register("principalCae")} className="input" placeholder="Optional" />
        </div>
        <div>
          <label className="label">Secondary CAE / CIRS</label>
          <input {...register("secondaryCae")} className="input" placeholder="Optional" />
        </div>
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg mt-4"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </motion.button>
    </form>
  );
}