"use client";

import { useFormStatus } from "react-dom";
import { submitRsvp } from "@/app/actions";

interface Props {
  formId: string;
  variant?: "light" | "dark";
  over_inputClasses?: String;
}

export default function RsvpForm({
  formId,
  variant = "light",
  over_inputClasses = "",
}: Props) {
  const inputClasses = `w-full h-full font-satoshi text-[13px] md:text-[20px] ${
    variant === "light" ? "text-[#000000B2]" : "text-[#000000B2]"
  } font-normal pl-[40px] md:pl-[70px] md:pt-[3px] rounded-[8px] placeholder:text-[#B0B0B0] placeholder:opacity-100 ${
    variant === "light"
      ? "placeholder-[#A0A0A0] bg-[#E7E7E7E5] border border-[#0000004A]"
      : "bg-[#E7E7E733] border border-[#0000004A]"
  } ${over_inputClasses}`;
  return (
    <div className="flex gap-6 items-center px-4">
      <form
        action={submitRsvp}
        className="flex flex-col md:flex-row gap-6 md:items-center items-start"
      >
        <input type="hidden" name="formId" value={formId} />

        <div className="relative w-[389px] h-[45px] md:w-[606px] md:h-[81px]">
          <input
            type="email"
            placeholder="Enter your work email to confirm your attendance"
            className={inputClasses}
            required
          />
          <img
            src="/images/email-vector.png"
            alt="email"
            className="absolute inset-3 md:top-[28px] md:left-[24px] w-[23px] h-[19px] md:w-[33px] md:h-[26px] z-10 pointer-events-none"
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-[139px] h-[45px] md:w-[251px] md:h-[81px] flex items-center justify-center bg-[#F5AB40] rounded-[8px] cursor-pointer disabled:opacity-50 hover:bg-[#F5AB40E5] transition-all"
    >
      <span className="text-[14px] md:text-[29px] px-[22px] py[16px] font-bold leading-none tracking-tight text-white">
        {pending ? "Sending..." : "RSVP NOW"}
      </span>
    </button>
  );
}
