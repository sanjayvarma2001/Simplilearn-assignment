"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { submitRsvp } from "@/app/actions";

export default function RsvpForm({ formId }: { formId: string }) {
  const [state, formAction] = useActionState(submitRsvp, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-4">
      <form
        ref={formRef}
        action={formAction as any}
        className="flex flex-col md:flex-row gap-6 md:items-center items-start px-4"
      >
        <input type="hidden" name="formId" value={formId} />

        <input
          name="email"
          type="email"
          required
          placeholder="Enter your work email to confirm"
          className="rounded-md p-3 text-black border border-gray-300 w-full md:w-80"
        />

        <button
          type="submit"
          className="bg-[#F5AB40] hover:bg-[#e49a30] px-8 py-3 rounded-md font-bold text-white transition-colors"
        >
          RSVP NOW
        </button>
      </form>

      <div className="h-6 px-4">
        {state?.success && (
          <p className="text-green-600 font-bold">✓ RSVP Confirmed!</p>
        )}
        {state?.error && (
          <p className="text-red-500 font-bold">!! {state.error}</p>
        )}
      </div>
    </div>
  );
}
