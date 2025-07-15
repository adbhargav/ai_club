import Footer from "../components/Footer";
import img1 from "../assets/23091A3342.jpg";
import img2 from "../assets/23091A3343.jpg";
import img3 from "../assets/23091A3317.jpg";
import img4 from "../assets/23091A3305.jpg";
import img5 from "../assets/23091A3349.jpg";
import img6 from "../assets/23091A3322.jpg";
import img7 from "../assets/24095A3305.jpg";

export default function Team() {
  const team = [
    {
      name: "SAI MANASWINI TOMALA",
      registerNo: "23091A3342",
      year: "III",
      branch: "CSE(AIML)",
      imageURL: img1
    },
    {
      name: "GADDAM SAI SWAROOPA REDDY",
      registerNo: "23091A3343",
      year: "III",
      branch: "CSE",
      imageURL: img2
    },
    {
      name: "GURU VISHNU",
      registerNo: "23091A3317",
      year: "III",
      branch: "CSE",
      imageURL: img3
    },
    {
      name: "ANDHE BHARGAV",
      registerNo: "23091A3305",
      year: "III",
      branch: "CSE",
      imageURL: img4
    },
    {
      name: "MUKKANDI SRIDHAR",
      registerNo: "23391A3305",
      year: "III",
      branch: "CSE",
      imageURL: img5
    },
    {
      name: "GURUMADHU KAKARLA",
      registerNo: "23091A3322",
      year: "III",
      branch: "CSE",
      imageURL: img6
    },
    {
      name: "PATHAPADU SAIMANJUNATH",
      registerNo: "24095A3305",
      year: "III",
      branch: "CSE",
      imageURL: img7
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Meet the AI Club Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <img
                src={member.imageURL}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-800"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-600">Reg No: {member.registerNo}</p>
              <p className="text-sm text-gray-600">Year: {member.year}</p>
              <p className="text-sm text-gray-600">Branch: {member.branch}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
