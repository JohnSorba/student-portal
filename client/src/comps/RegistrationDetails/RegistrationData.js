const randomNumber = () => {
  const getRand = Math.floor(Math.random() * 10000);
  return getRand;
};

const randomPhotoNumber = randomNumber();

export const initialFormData = {
  // Shared user information
  // (Account Info)
  username: "",
  password: "",
  email: "",
  roleId: null, // Role_id is to determine if the user is a student or teacher or admin or finance or supervisor

  // Pupil Personal Info
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  placeOfBirth: "",
  currentAddress: "",
  // Misc
  profilePhoto: `https://i.pravatar.cc/300?u=${randomPhotoNumber}36`,
  // Assuming this is common for both students and teachers

  // Pupil admission detials
  pupilId: null,
  admissionId: null,
  admissionDate: new Date().toISOString().split("T")[0],
  admissionStatus: "Enrolled",
  className: "",
  classCode: 0,

  // School Information
  lastSchoolAttended: "",
  parentName: "",
  parentContact: "",

  // Health Issues
  mostCommonAilment: "",
  immunization: "",

  // Parent / Guardian Info
  // Father
  fatherName: "",
  fatherAddress: "",
  fatherPlaceOfWork: "",
  fatherEmail: "",
  fatherPhone: "",

  // Mother
  motherName: "",
  motherAddress: "",
  motherPlaceOfWork: "",
  motherEmail: "",
  motherPhone: "",

  // Emergency Contact
  emergencyName: "",
  emergencyAddress: "",
  emergencyPlaceOfWork: "",
  emergencyEmail: "",
  emergencyPhone: "",

  // Payment of school fees and charges
  // Person directly responsible for paying the child's school fees
  payerName: "",
  payerAddress: "",
  payerPlaceOfWork: "",
  payerEmail: "",
  payerPhone: "",

  // Registration Info
  registrationDoneBy: "",
  signed: "",
  phone: "",
  schoolAuthority: "",
  rgistrationDate: "",
};

export const classNameMap = {
  110: "Nursery 1",
  120: "Nursery 2",
  100: "Reception",
  101: "Prep 1",
  102: "Prep 2",
  103: "Prep 3",
  104: "Prep 4",
  105: "Prep 5",
  106: "Prep 6",
  107: "JSS 1",
  108: "JSS 2",
  109: "JSS 3",
};
