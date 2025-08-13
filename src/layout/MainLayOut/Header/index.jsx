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

const MainLayOutHeader = () => {
  return (
    <MainLayOutHeaderStyled>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">LA</h1>
              {/* FIXME: 지역 선택 드랍다운 메뉴 추가
              <LocationSelector
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
              /> */}
            </div>
            <nav className="hidden md:flex space-x-8">
              <a className="text-gray-700 hover:text-blue-600 font-medium">
                캘린더
              </a>
              <a className="text-gray-700 hover:text-blue-600 font-medium">
                게시판
              </a>
              <a className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                AI 큐레이터
              </a>
              <a className="text-gray-700 hover:text-blue-600 font-medium">
                마이페이지
              </a>
              <a className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-2">
              {/* FIXME: ButtonCP 추가
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowIntro(true)}
              >
                서비스 소개
              </Button> 
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  회원가입
                </Button>
              </Link>
              */}
            </div>
          </div>
        </div>
      </header>
    </MainLayOutHeaderStyled>
  );
};
export default MainLayOutHeader;
