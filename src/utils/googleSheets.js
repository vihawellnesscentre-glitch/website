/**
 * Google Sheets & Email Integration Utility
 * Submits form data to Google Apps Script which writes to Google Sheets and sends an email.
 *
 * Setup Instructions:
 * 1. Go to script.google.com and create a new project.
 * 2. Paste the Apps Script code provided at the bottom of this file.
 * 3. Click "Deploy" -> "New deployment".
 * 4. Select type "Web app".
 * 5. Execute as: "Me", Access: "Anyone".
 * 6. Click Deploy, authorize the permissions, and copy the Web App URL.
 * 7. Paste the URL into your .env file as VITE_GOOGLE_SCRIPT_URL.
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
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // text/plain avoids CORS preflight issues
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
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // text/plain avoids CORS preflight issues
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
 * =========================================================================
 * EXACT GOOGLE APPS SCRIPT CODE TO DEPLOY
 * =========================================================================
 * Copy and paste this entirely into your script.google.com project:
 *
 
const EMAIL_RECIPIENTS = "harinisanthiya01@gmail.com,vanitharani97@gmail.com";

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    const sheetType = data.sheetType || 'appointment';
    
    // 1. Write to Google Sheets
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = sheetType === 'appointment' ? 'Appointments' : 'Contacts';
    let sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // 2. Ensure all fields get their own column, even if new fields are added later
    let headers = [];
    if (sheet.getLastRow() === 0) {
      // First time setup - grab all keys as headers
      headers = Object.keys(data);
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight("bold");
    } else {
      // Get existing headers
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      
      // Check for any new fields that don't have a column yet and add them
      for (const key in data) {
        if (!headers.includes(key)) {
          headers.push(key);
          sheet.getRange(1, headers.length).setValue(key).setFontWeight("bold");
        }
      }
    }
    
    // 3. Map the submitted data to the correct column order
    const rowData = headers.map(header => {
      return data[header] !== undefined ? data[header] : "";
    });
    
    // Append the row!
    sheet.appendRow(rowData);
    
    // 4. Send Email Reminder
    let emailBody = `New ${sheetType} form submission received on the website!\n\n`;
    emailBody += `Details:\n`;
    emailBody += `---------------------------------------\n`;
    
    // Print all filled details in the email
    for (const [key, value] of Object.entries(data)) {
      if (key !== 'sheetType' && key !== 'timestamp' && value !== "") {
        emailBody += `${key}: ${value}\n`;
      }
    }
    emailBody += `---------------------------------------\n\n`;
    emailBody += `Submitted at: ${data.timestamp}\n`;
    
    MailApp.sendEmail({
      to: EMAIL_RECIPIENTS,
      subject: `New Submission: ${sheetType.toUpperCase()} - ViHa Wellness`,
      body: emailBody
    });
    
    // 5. Return Success Response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

 */
