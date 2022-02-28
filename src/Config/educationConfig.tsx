export interface EducationType {
  school: string;
  url?: string;
  location: string;
  degree?: string;
  course: string;
  grade: number;
  type: "CGPA" | "Percentage" | "GPA (out of 4.0)" | "GPA (out of 5.0)";
  rank?: number;
  startDate: string;
  logoUrl: string;
  endDate: string;
  description?: string;
  disabled?: boolean;
}

const education: EducationType[] = [
  {
    school: "International Institute of Information Technology",
    url: "https://www.iiitnr.ac.in/",
    location: "Naya Raipur, Chhattisgarh",
    degree: "Bachelor of Technology",
    course: "Computer Science Engineering",
    grade: 8.48,
    type: "CGPA",
    logoUrl: "/assets/iiitnr.webp",
    startDate: "2020",
    endDate: "2024",
  },
  {
    school: "Notre Dame School",
    url: "https://www.notredamedelhi.com/",
    location: "Badarpur, New Delhi",
    degree: "Intermediate/ +2",
    course: "Physics, Chemistry, Mathematics",
    grade: 94.2,
    type: "Percentage",
    startDate: "2018",
    endDate: "2020",
    logoUrl: "/assets/notredame.webp",
  },
];

export default education;
