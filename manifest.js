// Central Curriculum Manifest for school-portal
// Modules are sorted alphabetically by subject, then by module number:
// 1. Bahasa Indonesia & Pancasila (T2 Bahasa Indonesia & Pancasila)
// 2. Mathematics (T2 Math I, T2 Math II)
// 3. Science (T2 Science I, T2 Science II)
// 4. Social Science (T2 Social Science)

const PORTAL_DATA = {
  p4: {
    title: "Primary 4 (P4)",
    curriculumScope: "Term 2 / Semester 1",
    modules: [
      {
        id: "bahasa-pancasila-t2-1",
        title: "T2 Bahasa Indonesia & Pancasila: Tokoh, Kalimat & Hak Siswa",
        subtitle: "Narasi Tokoh Pendidikan, Kosakata Baru, Kalimat Langsung/Tidak Langsung & Hak Siswa",
        subject: "bahasa-pancasila",
        subjectLabel: "Bahasa Indonesia & Pancasila",
        status: "active",
        folderUrl: "./bahasa-pancasila-t2-1/",
        description: "Latihan terpadu memahami teks biografi R.A. Kartini & Ki Hajar Dewantara, 15 kosakata kontekstual, transformasi kalimat langsung dan tidak langsung sesuai PUEBI, serta klasifikasi hak dan kewajiban siswa di sekolah.",
        questionCount: "36 Questions",
        maxScore: "36 / 30 Pts",
        formats: "Quiz & Paper"
      },
      {
        id: "math-t2-1",
        title: "T2 Math I: Numbers & Operations",
        subtitle: "Multiplication, Division, Factors & Word Problems",
        subject: "math",
        subjectLabel: "Mathematics",
        status: "active", // Switched from "upcoming" to "active"
        folderUrl: "./math-t2-1/",
        description: "Practice foundational arithmetic skills, multi-digit division with remainders, factor pairs, multiples, and multi-step real-world problem solving.",
        questionCount: "15 Questions",
        maxScore: "53 Pts",
        formats: "Quiz & Paper"
      },
      {
        id: "math-t2-2",
        title: "T2 Math II: Shapes, Nets, Angles & Fractions",
        subtitle: "3D Shapes, Angle Measurements, and Fractions",
        subject: "math",
        subjectLabel: "Mathematics",
        status: "active",
        folderUrl: "./math-t2-2/",
        description: "3D solid properties, composite cubes, folding Cube Net N, protractor reading, intersecting & parallel line angles, 3:30 clock angles, and fractions.",
        questionCount: "15 Questions",
        maxScore: "100 Pts",
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
        title: "T2 Science II: Forces & Types of Force",
        subtitle: "Push/Pull, Friction, Gravity & Magnetism (Unit 16)",
        subject: "science",
        subjectLabel: "Science",
        status: "active", // Switched from "upcoming" to "active"
        folderUrl: "./science-t2-2/",
        description: "Master push vs. pull forces, temporary vs. permanent shape changes, contact vs. non-contact forces, friction, gravity, mass/shape/force factors, magnetic materials (Iron/Steel vs. Aluminium/Copper), pole interactions, and Earth's compass.",
        questionCount: "36 Questions",
        maxScore: "36 / 20 Pts",
        formats: "Quiz & Paper"
      },
      {
        id: "social-science-t2-1",
        title: "T2 Social Science: Light, Sound & Inventors",
        subtitle: "History of Light & Sound & Biographies of Scientists and Inventors",
        subject: "social-science",
        subjectLabel: "Social Science",
        status: "active",
        folderUrl: "./social-science-t2-1/",
        description: "Explore the historical timelines of light and sound, the 1879 electric bulb, 2014 blue LED, traditional Indonesian kentongan, biographies of Ibn al-Haytham, Edison, Bell, Marconi, Hertz, and Cooper, plus modern community applications.",
        questionCount: "36 Questions",
        maxScore: "36 / 20 Pts",
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
