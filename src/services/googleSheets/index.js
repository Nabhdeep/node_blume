import { google } from "googleapis";
import fs from "fs";
import {public_sheet_id} from "../../config"

export async function appendToSheet(data) {
    const credentials = JSON.parse(fs.readFileSync("service-account.json", "utf-8"));
    const auth = new google.auth.GoogleAuth({credentials,scopes: ["https://www.googleapis.com/auth/spreadsheets"],});
    const sheets = google.sheets({ version: "v4", auth });
    const RANGE = "Sheet1!A1"; 
    const date  = new Date()
  try {
    const formattedRow = {
        
        "name":data.first_name+" "+data.last_name,
        "email":data.email,
        "phone":data.phone,
        "date":date.toISOString(),
        "specialties":data.specialties.join(", "),
        "npiNumber":data.npiNumber,
        "years Exp":data.yearsExperience,
        "credentials":data.credentials.join(", "),
        "canSeePatientsIndependently":data.canSeePatientsInde,
        "practiceState":data.practiceState.join(", "),
    }

    const headers = Object.keys(formattedRow);
    const rowValues = Object.values(formattedRow);
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: public_sheet_id,
      range: RANGE, 
    });

    if(!existing.data.values || existing.data.values.length === 0){
        await sheets.spreadsheets.values.update({
            spreadsheetId:public_sheet_id,
            range: RANGE,
            valueInputOption: "RAW",
            requestBody: { values: [headers] },
        })
        console.log("Headers generated");
    }
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: public_sheet_id,
      range: RANGE,
      valueInputOption: "RAW",
      requestBody: {
        values: [rowValues],
      },
    });
    console.log("✅ Row appended:", response.data.updates.updatedRange);
  } catch (err) {
    console.error("❌ Error appending to sheet:", err);
  }
}