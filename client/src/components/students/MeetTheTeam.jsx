import { teamMembers } from "../../assets/assets";


const TeamSection = () => {
  return (
    <section className="py-10 bg-[#F9FAFB] text-black text-center shadow">
      <h2 className="text-xl text-black mb-6">Meet The Team</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden w-[260px] hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-3">
              <h3 className="text-md font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
