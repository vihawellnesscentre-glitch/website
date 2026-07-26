/**
 * Google Sheets Integration Utility
 * Submits form data to Google Apps Script which writes to Google Sheets
 *
 * Setup:
 * 1. Create a Google Apps Script (script.google.com)
 * 2. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 3. Copy the Web App URL to VITE_GOOGLE_SCRIPT_URL in .env
 */

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

/**
 * Submit appointment form data to Google Sheets
 * @param {Object} data - Appointment form fields
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const submitAppointment = async (data) => {
  try {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
      console.warn('Google Sheets URL not configured. Using mock success.');
      await new Promise(resolve => setTimeout(resolve, 1200));
      return { success: true, message: 'Appointment request received! We will contact you shortly.' };
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sheetType: 'appointment',
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });

    if (!response.ok) throw new Error('Network response was not ok');
    const result = await response.json();
    return { success: true, message: result.message || 'Appointment booked successfully!' };
  } catch (error) {
    console.error('Appointment submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or call us directly.',
    };
  }
};

/**
 * Submit contact form data to Google Sheets
 * @param {Object} data - Contact form fields
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const submitContact = async (data) => {
  try {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
      console.warn('Google Sheets URL not configured. Using mock success.');
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: 'Thank you! We will get back to you soon.' };
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sheetType: 'contact',
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });

    if (!response.ok) throw new Error('Network response was not ok');
    const result = await response.json();
    return { success: true, message: result.message || 'Message sent successfully!' };
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or email us directly.',
    };
  }
};

/**
 * Google Apps Script to deploy:
 * 
 * function doPost(e) {
 *   const data = JSON.parse(e.postData.contents);
 *   const ss = SpreadsheetApp.getActiveSpreadsheet();
 *   const sheetName = data.sheetType === 'appointment' ? 'Appointments' : 'Contacts';
 *   const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
 * 
 *   if (sheet.getLastRow() === 0) {
 *     sheet.appendRow(Object.keys(data));
 *   }
 *   sheet.appendRow(Object.values(data));
 * 
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ success: true, message: 'Data saved!' }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 */
