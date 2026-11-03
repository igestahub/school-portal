// School Portal Central Curriculum Manifest
// Edit this file whenever you add or unlock a new worksheet!
const PORTAL_DATA = {
  p4: {
    title: "Primary 4 (P4)",
    curriculumScope: "Term 2 / Semester 1",
    modules: [
      {
        id: "science-t2-1",
        title: "T2 Science I: Light and Sound",
        subtitle: "Properties of Light (Unit 18) & Sound (Unit 21)",
        subject: "science",
        subjectLabel: "Science",
        status: "active", // "active" (ready to practice) or "upcoming" (draft/placeholder)
        folderUrl: "./science-t2-1/",
        description: "Complete practice across 12 question variation slots (shadows, periscopes, transparent/translucent/opaque, pitch & vibrations, decibel dB scale, and ear protection) + official school pre-test mode.",
        questionCount: "36 Questions",
        maxScore: "36 / 20 Pts",
        formats: "Quiz & Paper"
      },
      {
        id: "science-t2-2",
        title: "T2 Science II: Unit Module 2",
        subtitle: "Follow-up Module from Google Drive Folder T2 Science II",
        subject: "science",
        subjectLabel: "Science",
        status: "upcoming",
        folderUrl: "./science-t2-2/",
        description: "This practice module is reserved for upcoming learning materials from the T2 Science II folder once photos are ready.",
        questionCount: "TBD",
        maxScore: "TBD",
        formats: "Quiz & Paper"
      },
      {
        id: "math-t2-1",
        title: "T2 Math I: Primary 4 Mathematics",
        subtitle: "Operations, Factors & Multiples / Word Problems",
        subject: "math",
        subjectLabel: "Mathematics",
        status: "upcoming",
        folderUrl: "./math-t2-1/",
        description: "Interactive mathematics practice module with isomorphic number generators and step-by-step working breakdowns.",
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
