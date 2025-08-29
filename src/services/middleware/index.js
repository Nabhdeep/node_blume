import { body } from "express-validator";
import { validationResult } from "express-validator";

export const validateForm = [
  body("first_name").isString().isLength({ max: 50 }).trim().escape(),
  body("last_name").isString().isLength({ max: 50 }).trim().escape(),
  body("email").isEmail().normalizeEmail(),
  body("phone").isMobilePhone("any"),
  body("specialties").isArray().notEmpty(),
  body("credentials").isArray(),
  body("insurance").isArray(),
  body("practiceState").isArray(),
  body("npiNumber").isLength({ min: 10, max: 10 }).isString(),
  body("yearsExperience").isInt({ min: 0, max: 80 }),
  body("malpractiveInsurance").isString(),
  body("canSeePatientsInde").isString(),
  body("payPerAppointmentModel").isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];