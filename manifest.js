// Central Curriculum Manifest for school-portal
// Modules are sorted alphabetically by subject, then by module number:
// 1. Mathematics (T2 Math I, T2 Math II)
// 2. Science (T2 Science I, T2 Science II)

const PORTAL_DATA = {
  p4: {
    title: "Primary 4 (P4)",
    curriculumScope: "Term 2 / Semester 1",
    modules: [
      {
        id: "math-t2-1",
        title: "T2 Math I: Numbers & Operations",
        subtitle: "Multiplication, Division, Factors & Word Problems",
        subject: "math",
        subjectLabel: "Mathematics",
        status: "upcoming", // "active" or "upcoming"
        folderUrl: "./math-t2-1/",
        description: "Practice foundational arithmetic skills, multi-digit division with remainders, factor pairs, multiples, and multi-step real-world problem solving.",
        questionCount: "TBD",
        maxScore: "TBD",
        formats: "Quiz & Paper"
      },
      {
        id: "math-t2-2",
        title: "T2 Math II: Fractions, Decimals & Geometry",
        subtitle: "Equivalent Fractions, Angles, Area & Perimeter",
        subject: "math",
        subjectLabel: "Mathematics",
        status: "upcoming",
        folderUrl: "./math-t2-2/",
        description: "Master mixed numbers, decimal place values, measuring angles with protractors, 2D shape properties, and calculating perimeter and area.",
        questionCount: "TBD",
        maxScore: "TBD",
        formats: "Quiz & Paper"
      },
      {
        id: "science-t2-1",
        title: "T2 Science I: Light and Sound",
        subtitle: "Properties of Light (Unit 18) & Sound (Unit 21)",
        subject: "science",
        subjectLabel: "Science",
        status: "active", // Active ready-to-use worksheet
        folderUrl: "./science-t2-1/",
        description: "Master light rays, periscopes, transparent/translucent/opaque materials, shadow formation, pitch vs. vibration speed, decibel dB scale, and ear protection rules.",
        questionCount: "36 Questions",
        maxScore: "36 / 20 Pts",
        formats: "Quiz & Paper"
      },
      {
        id: "science-t2-2",
        title: "T2 Science II: Forces & Energy Transfer",
        subtitle: "Friction, Gravity, Magnetic Forces & Simple Circuits",
        subject: "science",
        subjectLabel: "Science",
        status: "upcoming",
        folderUrl: "./science-t2-2/",
        description: "Explore balanced and unbalanced forces, how friction affects moving surfaces, magnetic poles, and investigating complete electrical circuits.",
        questionCount: "TBD",
        maxScore: "TBD",
        formats: "Quiz & Paper"
      }
    ]
  },
  p5: {
    title: "Primary 5 (P5)",
    curriculumScope: "Academic Year 2027–2028",
    modules: []
  },
  p6: {
    title: "Primary 6 (P6)",
    curriculumScope: "Academic Year 2028–2029",
    modules: []
  }
};