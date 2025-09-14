import teamPhoto from "@/assets/team-photo.jpg";

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate innovators behind our AI voice technology, dedicated to 
            revolutionizing communication through cutting-edge solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={teamPhoto} 
              alt="Our dedicated team of AI voice technology experts" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team combines expertise in artificial intelligence, voice technology, 
              and customer experience to deliver innovative solutions that transform how 
              businesses communicate with their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;