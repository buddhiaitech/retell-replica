import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const fadeDistance = 200; // px to fully fade out
      const next = Math.max(0, 1 - window.scrollY / fadeDistance);
      setOpacity(next);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 transition-opacity duration-300" style={{ opacity }}>
            Buddhi Voice <span className="text-blue-600">AI</span>
          </div>
          <Button
            className="px-6 font-medium border border-blue-300 text-blue-600 bg-transparent hover:bg-transparent hover:text-blue-600 hover:shadow-none transition-opacity duration-300"
            style={{ opacity }}
            onClick={() => navigate('/login')}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;