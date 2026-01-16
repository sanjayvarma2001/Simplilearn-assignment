'use server';

import { revalidatePath } from 'next/cache';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT })
  .base(process.env.AIRTABLE_BASE_ID!);

export async function submitRsvp(formData: FormData) {
  const email = formData.get('email') as string;
  const formId = formData.get('formId') as string || 'unknown';

  if (!email || !email.includes('@')) {
    return { error: 'Invalid email' };
  }

  try {
    await base(process.env.AIRTABLE_TABLE_NAME!).create([{
      fields: {
        Email: email,
        FormId: formId,
        Timestamp: new Date().toISOString(),
        Status: 'Submitted',
      },
    }]);

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Airtable error:', error);
    return { error: 'Failed to submit' };
  }
}
