import mongoose, { Schema } from "mongoose";



const FormDataSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String ,  required: true },
    specialties: { type: [String], default: []  ,  required: true},
    npiNumber: { type: String  ,  required: true},
    yearsExperience: { type: String  ,  required: true},
    credentials: { type: [String], default: [] ,  required: true},
    insurance: { type: [String], default: []  ,  required: true},
    canSeePatientsInde: { type: String ,  required: true },
    malpractiveInsurance: { type: String ,  required: true},
    payPerAppointmentModel: { type: String ,  required: true },
    ehr_emr_system: { type: String  ,  required: true},
    practiceState: { type: [String], default: []  ,  required: true},
  },
  { timestamps: true }
);



export default mongoose.model('FormData' ,FormDataSchema)