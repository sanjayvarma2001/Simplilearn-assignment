'use server';

import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
  process.env.AIRTABLE_BASE_ID || ''
);

export async function submitRsvp(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const formId = formData.get('formId') as string;

  if (!email) {
    return { error: "Email is required.", success: false };
  }

  try {
    await base(process.env.AIRTABLE_TABLE_NAME || 'RSVPs').create([
      {
        fields: {
          "Email": email,
          "FormId": formId,
          "Status": "Confirmed",
          "Date": new Date().toISOString()
        }
      }
    ]);

    return { success: true, error: null };
  } catch (error: any) {
    console.error("Airtable Error:", error);
    return { 
      error: "Something went wrong. Please try again.", 
      success: false 
    };
  }
}