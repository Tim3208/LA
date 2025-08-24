import { useState } from "react";
import MainLayOut from "@/layout/MainLayOut";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Users,
  CalendarIcon,
} from "lucide-react";

/** 행사 더미 데이터 */
const events = [
  {
    id: "1",
    title: "정기 모임",
    description: "2월 정기 모임 및 프로젝트 진행 상황 공유",
    date: "2024-02-15",
    startTime: "19:00",
    endTime: "21:00",
    location: "공학관 201호",
    category: "회의",
    attendees: ["김민수", "이지은", "박준호", "최서연"],
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "React 스터디",
    description: "React 18 새로운 기능 학습",
    date: "2024-02-18",
    startTime: "14:00",
    endTime: "16:00",
    location: "도서관 스터디룸 A",
    category: "스터디",
    attendees: ["정우진", "한소영", "조민재"],
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "해커톤 대회",
    description: "24시간 해커톤 대회 참가",
    date: "2024-02-20",
    startTime: "09:00",
    endTime: "09:00",
    location: "IT융합관",
    category: "행사",
    attendees: ["김민수", "이지은", "박준호", "최서연", "정우진"],
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "프로젝트 발표 준비",
    description: "학회 웹사이트 프로젝트 발표 자료 준비",
    date: "2024-02-22",
    startTime: "16:00",
    endTime: "18:00",
    location: "온라인 (Zoom)",
    category: "프로젝트",
    attendees: ["김민수", "이지은", "박준호"],
    color: "bg-orange-500",
  },
  {
    id: "5",
    title: "AI 기술 세미나",
    description: "ChatGPT와 개발자의 미래",
    date: "2024-02-25",
    startTime: "15:00",
    endTime: "17:00",
    location: "공학관 대강당",
    category: "세미나",
    color: "bg-red-500",
  },
  {
    id: "6",
    title: "MT 계획 회의",
    description: "봄 MT 장소 및 일정 논의",
    date: "2024-02-28",
    startTime: "18:00",
    endTime: "19:30",
    location: "학생회관 회의실",
    category: "회의",
    attendees: ["김민수", "이지은", "한소영"],
    color: "bg-blue-500",
  },
];

const CalendarGrid = ({ currentDate, events }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  /** 달의 첫날 */
  const firstDay = new Date(year, month, 1);
  /** 마지막날 */
  const lastDay = new Date(year, month + 1, 0);
  /** 일수 */
  const daysInMonth = lastDay.getDate();
  /** 첫날의 요일 */
  const startingDayOfWeek = firstDay.getDay();

  /** 달력 그리드 */
  const calendarDays = [];

  // 시작일 전 갯수만큼 빈 셀 생성
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // 달의 일수 만큼 셀 push
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const getEventsForDate = () => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  /** 오늘이 맞는지 체크하고 맞으면 true 뱉음 */
  const isToday = () => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      {/* Week headers */}
      {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
        <div
          key={day}
          className="p-2 text-center text-sm font-medium text-muted-foreground"
        >
          {day}
        </div>
      ))}

      {/* calendarDays 값 불러와서 달력 본격 제작 */}
      {calendarDays.map((day, index) => (
        // FiXME: 빈셀 테두리 클래스 같이 먹음
        <div
          key={index}
          className={`min-h-[100px] p-1 border border-border ${
            day ? "bg-background hover:bg-muted/50" : "bg-muted/20"
          } ${isToday(day || 0) ? "bg-blue-60 border-blue-100" : ""}`}
        >
          {day && (
            <>
              <div
                className={`text-sm font-medium mb-1 ${
                  isToday(day) ? "text-primary" : ""
                }`}
              >
                {day}
              </div>
              <div className="space-y-1">
                {getEventsForDate(day)
                  .slice(0, 3)
                  .map((event) => (
                    <Dialog key={event.id}>
                      <DialogTrigger asChild>
                        <div
                          className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 text-white ${event.color}`}
                        >
                          <div className="truncate">{event.title}</div>
                          <div className="truncate opacity-75">
                            {event.startTime}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{event.title}</DialogTitle>
                        </DialogHeader>
                        <EventDetails event={event} />
                      </DialogContent>
                    </Dialog>
                  ))}
                {getEventsForDate(day).length > 3 && (
                  <div className="text-xs text-muted-foreground">
                    +{getEventsForDate(day).length - 3} 더보기
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

/** 달력에 일정 띄울 때 디테일 결정하는 함수 */
function EventDetails({ event }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case "회의":
        return "bg-blue-100 text-blue-800";
      case "행사":
        return "bg-purple-100 text-purple-800";
      case "스터디":
        return "bg-green-100 text-green-800";
      case "프로젝트":
        return "bg-orange-100 text-orange-800";
      case "세미나":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge className={getCategoryColor(event.category)} variant="outline">
          {event.category}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground">{event.description}</p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <CalendarIcon className="w-4 h-4 text-muted-foreground" />
          <span>{new Date(event.date).toLocaleDateString("ko-KR")}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span>
            {event.startTime} - {event.endTime}
          </span>
        </div>

        {event.location && (
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        )}

        {event.attendees && event.attendees.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{event.attendees.join(", ")}</span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Button size="sm" className="flex-1">
          수정
        </Button>
        <Button variant="outline" size="sm">
          삭제
        </Button>
      </div>
    </div>
  );
}

/** 일정 추가 모달 띄워주는 함수 */
function AddEventDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-100 hover:bg-blue-110">
          <Plus className="w-4 h-4 mr-2" />
          일정 추가
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>새 일정 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input id="title" placeholder="일정 제목을 입력하세요" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">설명</Label>
            <Textarea id="description" placeholder="일정 설명을 입력하세요" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">날짜</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">카테고리</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="회의">회의</SelectItem>
                  <SelectItem value="행사">행사</SelectItem>
                  <SelectItem value="스터디">스터디</SelectItem>
                  <SelectItem value="프로젝트">프로젝트</SelectItem>
                  <SelectItem value="세미나">세미나</SelectItem>
                  <SelectItem value="기타">기타</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">시작 시간</Label>
              <Input id="startTime" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime">종료 시간</Label>
              <Input id="endTime" type="time" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">장소</Label>
            <Input id="location" placeholder="장소를 입력하세요" />
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              className="flex-1 bg-blue-100 hover:bg-blue-110"
            >
              저장
            </Button>
            <Button variant="outline">취소</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  /** 캘린더 이동 */
  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  /** '오늘' 버튼 누르면 오늘이 속한 달로 가도록 */
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  /** 다가오는 일정 */
  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <MainLayOut>
      <div className="min-h-screen bg-mainPageBg">
        <main className="container mx-auto max-w-1440 py-16 px-4 lg:px-0">
          {/* Header */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                일정 관리
              </h1>
              <p className="text-lg text-muted-foreground">
                행사 일정을 체계적으로 관리하고 공유하세요.
              </p>
            </div>
            <AddEventDialog />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateMonth("prev")}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <h2 className="text-xl font-semibold">
                        {currentDate.getFullYear()}년{" "}
                        {currentDate.getMonth() + 1}월
                      </h2>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateMonth("next")}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" onClick={goToToday}>
                      오늘
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CalendarGrid currentDate={currentDate} events={events} />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">다가오는 일정</CardTitle>
                  <CardDescription>앞으로 예정된 일정들입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50"
                      >
                        <div
                          className={`w-3 h-3 rounded-full mt-1 ${event.color}`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {event.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(event.date).toLocaleDateString("ko-KR")}{" "}
                            {event.startTime}
                          </p>
                          {event.location && (
                            <p className="text-xs text-muted-foreground truncate">
                              {event.location}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar 카테고리 표기 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">카테고리</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">회의</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm">행사</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">스터디</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span className="text-sm">프로젝트</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">세미나</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 이번 달 통계 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">이번 달 통계</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>총 일정</span>
                      <span className="font-medium">{events.length}개</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>회의</span>
                      <span className="font-medium">
                        {events.filter((e) => e.category === "회의").length}개
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>행사</span>
                      <span className="font-medium">
                        {events.filter((e) => e.category === "행사").length}개
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>스터디</span>
                      <span className="font-medium">
                        {events.filter((e) => e.category === "스터디").length}개
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </MainLayOut>
  );
}
