import { MainLayOutHeaderStyled } from "./style";
import {
  Calendar,
  MessageSquare,
  MapPin,
  Users,
  Sparkles,
  ChevronRight,
  Bell,
  Heart,
  Bot,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LocationSelector } from "@/components/location-selector";

const MainLayOutHeader = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [selectedLocation, setSelectedLocation] = useState("강남구");

  return (
    <MainLayOutHeaderStyled>
      {/* Header */}
      <header className="bg-white drop-shadow-md">
        <div className="max-w-1440 mx-auto px-4 md:px-0">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-100">LA</h1>
              <LocationSelector
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a className="text-gray-700 hover:text-blue-100 font-medium">
                캘린더
              </a>
              <a className="text-gray-700 hover:text-blue-100 font-medium">
                게시판
              </a>
              <a className="text-blue-100 hover:text-blue-700 font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                AI 큐레이터
              </a>
              <a className="text-gray-700 hover:text-blue-100 font-medium">
                마이페이지
              </a>
              <a className="text-gray-700 hover:text-blue-100 font-medium">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-2">
              {/* FIXME: ButtonCP 추가 */}
              <Button
                variant="outline"
                size="sm"
                // onClick={() => FIXME: 서비스 소개 모달 띄우기}
              >
                서비스 소개
              </Button>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm" className="bg-blue-100 hover:bg-blue-700">
                  회원가입
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </MainLayOutHeaderStyled>
  );
};
export default MainLayOutHeader;
