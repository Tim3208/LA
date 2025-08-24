import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LocationSelector } from "@/components/ui/locationSelector";
import { useLocationContext } from "@/contexts/LocationContext";

const MainLayOutHeader = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { selectedLocation, setSelectedLocation } = useLocationContext();

  return (
    <>
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
              <Link
                to="/calendar"
                className={`font-medium ${
                  isActive("/calendar") ? "!text-blue-100" : "!text-gray-90"
                }`}
              >
                캘린더
              </Link>
              <Link
                to="/list"
                className={`font-medium ${
                  isActive("/list") ? "!text-blue-100" : "!text-gray-90"
                }`}
              >
                게시판
              </Link>
              <Link
                to="/ai"
                className={`font-bold flex items-centeer gap-1 ${
                  isActive("/ai") ? "!text-blue-100" : "!text-gray-90"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                AI 큐레이터
              </Link>
              <Link
                to="/myPage"
                className={`font-medium ${
                  isActive("/myPage") ? "!text-blue-100" : "!text-gray-90"
                }`}
              >
                마이페이지
              </Link>
              <Link
                to="/faq"
                className={`font-medium ${
                  isActive("/faq") ? "!text-blue-100" : "!text-gray-90"
                }`}
              >
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-2">
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
    </>
  );
};
export default MainLayOutHeader;
