"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitRsvp } from "@/app/actions";

interface RsvpProps {
  formId: string;
}

export default function RsvpForm({ formId }: RsvpProps) {
  const [state, formAction] = useActionState(submitRsvp, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col md:flex-row gap-4 items-center"
      >
        <input type="hidden" name="formId" value={formId} />

        <div className="relative flex-1 w-full">
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your work email to confirm"
            className="w-full h-[50px] md:h-[70px] px-6 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <SubmitButton />
      </form>

      <div className="min-h-[24px] px-2">
        {state?.success && (
          <p className="text-green-600 font-semibold animate-fade-in">
            ✓ Your RSVP has been received!
          </p>
        )}
        {state?.error && (
          <p className="text-red-500 font-medium">× {state.error}</p>
        )}
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full md:w-[200px] h-[50px] md:h-[70px] bg-[#F5AB40] hover:bg-[#e49a30] transition-colors text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-out"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          Sending...
        </span>
      ) : (
        "RSVP NOW"
      )}
    </button>
  );
}
