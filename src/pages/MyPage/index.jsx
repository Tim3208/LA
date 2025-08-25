import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Settings,
  Heart,
  MessageSquare,
  Calendar,
  Bell,
  ArrowLeft,
  Edit,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLocationContext } from "@/contexts/LocationContext";
import { ProfileEditModal } from "@/components/MyPageCP/profileEditModal";
import { set } from "zod";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

const BASE_URL = import.meta.env.VITE_BASE_URL;

dayjs.extend(relativeTime);

export default function MyPage() {
  const { selectedLocation, setSelectedLocation } = useLocationContext();
  const [userData, setUserData] = useState({
    profile: {
      id: 0,
      nickname: "",
      bio: "",
      avatar: "",
      avatar_url: "",
      name: "",
      email: "",
      location: "",
      joinDate: "",
      birth: "",
      gender: "",
      phone: "",
    },
    posts: [
      {
        id: 0,
        title: "",
        content: "",
        created_at: "",
        category: "",
        comments: 0,
        likes: 0,
      },
    ],
    comments: [
      {
        id: 0,
        post_id: 0,
        content: "",
        created_at: "",
      },
    ],
    likedPosts: [
      {
        id: 0,
        title: "",
        category: "",
        author: "",
        created_at: "",
      },
    ],
    interested_events: [
      {
        id: 0,
        event_name: "",
        event_date: "",
        location: "",
      },
    ],
    statistics: {
      posts: 0,
      comments: 0,
      likesRecived: 0,
      interests: 0,
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`${BASE_URL}/mypage`);
    async function fetchUserDatas() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${BASE_URL}/mypage`);
        setUserData(res.data);
      } catch (err) {
        // FIXME: 현재 서버가 없어 에러가 나므로 강제로 UserDataData 불러와서 쓰는중.
        // setError("서버에서 유저 데이터를 불러오는 중 오류가 발생했습니다.");
        setUserData(dummyData);
        console.log(userData);
      } finally {
        setLoading(false);
      }
    }
    fetchUserDatas();
  }, []);

  const dummyData = {
    profile: {
      id: 1,
      nickname: "사용자",
      bio: "설명",
      avatar: "/placeholder.svg?height=80&width=80",
      avatar_url: "사용자 프로필 사진 URL",
      name: "오금서",
      email: "example@gmail.com",
      location: "강남구",
      joinDate: "2025-08-11T11:00:00.000Z",
      birth: "2003-09-27T11:00:00.000Z",
      gender: "femaile",
      phone: "010-1234-5678",
    },
    posts: [
      {
        id: 1,
        title: "첫 글",
        content: "테스트용 첫 글입니다",
        created_at: "2025-08-23T11:00:00.000Z",
        category: "자유게시판",
        comments: 12,
        likes: 34,
      },
    ],
    comments: [
      {
        id: 1,
        post_id: 1,
        content: "첫 댓글",
        created_at: "2025-08-23T11:10:00.000Z",
      },
      {
        id: 2,
        post_id: 2,
        content: "두 번째 댓글",
        created_at: "2025-08-23T12:10:00.000Z",
      },
    ],
    likedPosts: [
      {
        id: 1,
        title: "멋쟁이 사자처럼 13기 해커톤",
        category: "자유게시판",
        author: "멋쟁이 사자처럼",
        created_at: "2025-08-11T11:00:00.000Z",
      },
    ],
    interested_events: [
      {
        id: 1,
        event_name: "축제 A",
        event_date: "2025-08-25",
        location: "양재 aT센터",
      },
    ],
    statistics: {
      likes_received: 56,
    },
  };

  dummyData.statistics = {
    posts: dummyData.posts.length,
    comments: dummyData.comments.length,
    interested_events: dummyData.interested_events.length,
  };

  const handleLocationChange = (newLocation) => {
    setSelectedLocation(newLocation);
    saveUserLocation(newLocation);
  };

  function saveUserLocation(location) {
    // FIXME: 서버 API 호출
    // await fetch('/api/user/location', {method: 'POST', body: JSON.stringify({location}) });

    // 테스트용 로컬 스토리지 저장
    localStorage.setItem("userLocation", location);
  }

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // FIXME: 데이터 모두 백엔드와 연결
  /* const [user, setUser] = useState({
    name: "오금서",
    nickname: "금이 다섯개",
    email: "user@example.com",
    location: selectedLocation,
    joinDate: "2024.01.11",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "방가방가루 🍽️✨",
    birthYear: "2003",
    gender: "female",
    phone: "010-1234-5678",
  });

  const myPosts = [
    {
      id: 1,
      title: "나 옷 새로 샀는데 평가해조",
      category: "자유게시판",
      time: "2시간 전",
      comments: 23,
      likes: 45,
    },
    {
      id: 2,
      title: "새로 나온거 마셔봤는데 마덥서 ㅠㅠ",
      category: "자유게시판",
      time: "2일 전",
      comments: 18,
      likes: 32,
    },
  ];

  const userData.statistics = {
    posts: myPosts.length,
    comments: 123,
    likesRecived: 45,
    interests: 67,
  };

  const likedPosts = [
    {
      id: 1,
      title: "멋쟁이 사자처럼 13기 해커톤",
      category: "홍보게시판",
      author: "멋쟁이 사자처럼",
      time: "2주 전",
    },
    {
      id: 2,
      title: "지역 청년 창업 박람회",
      category: "홍보게시판",
      author: "강남구청",
      time: "6시간 전",
    },
  ];

  const likedEvents = [
    {
      id: 1,
      title: "멋쟁이 사자처럼 13기 해커톤",
      date: "2025.08.25",
      location: "서초구 aT센터",
    },
    {
      id: 2,
      title: "지역 청년 창업 박람회",
      date: "2024.12.22",
      location: "강남구청",
    },
  ]; */

  const handleProfileSave = (updatedProfile) => {
    setUser((prev) => ({ ...prev, ...updatedProfile }));
    // FIXME: 실제 API 호출을 통해 서버에 저장
    console.log("프로필 업데이트:", updatedProfile);
  };

  return (
    <div className="min-h-screen bg-mainPageBg">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-1440 mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  홈으로
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-blue-100">마이페이지</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-1440 mx-auto px-4 lg:px-0 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage
                    src={userData.profile.avatar || "/placeholder.svg"}
                    alt={userData.profile.name}
                  />
                  <AvatarFallback>
                    <User className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-black mb-2">
                  {userData.profile.name}
                </h2>
                <p className="text-blue-100 text-base font-medium mb-2">
                  @{userData.profile.nickname}
                </p>
                <p className="text-gray-100 text-sm mb-4">
                  {userData.profile.email}
                </p>

                {/* 자기소개 */}
                {userData.profile.bio && (
                  <div className="bg-gray-30 p-2 rounded-lg mb-4">
                    <p className="text-sm text-black leading-relaxed">
                      {userData.profile.bio}
                    </p>
                  </div>
                )}
                <div className="space-y-2 text-sm text-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{userData.profile.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>가입일: {userData.profile.joinDate}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-transparent bg-blue-100 text-white hover:bg-blue-110"
                  onClick={() => setIsEditModalOpen(true)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  프로필 수정
                </Button>
              </CardContent>
            </Card>

            {/* Activity Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">활동 통계</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-100">작성한 글</span>
                  <span className="font-semibold text-blue-100">
                    {userData.statistics.posts}개
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-100">작성한 댓글</span>
                  <span className="font-semibold text-blue-100">
                    {userData.statistics.comments}개
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-100">받은 좋아요</span>
                  <span className="font-semibold text-blue-100">
                    {userData.statistics.likesRecived}개
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-100">관심 이벤트</span>
                  <span className="font-semibold text-blue-100">
                    {userData.statistics.interests}개
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="posts" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />내 게시글
                </TabsTrigger>
                <TabsTrigger
                  value="liked-posts"
                  className="flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  좋아요한 글
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  관심 이벤트
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  알림 설정
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>내가 작성한 게시글</CardTitle>
                    <CardDescription>
                      총 {userData.posts.length}개의 게시글을 작성했습니다
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userData.posts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 bg-gray-30 rounded-lg hover:bg-gray-40 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          <span className="text-sm text-gray-90">
                            {dayjs(post.created_at).locale("ko").fromNow()}
                          </span>
                        </div>
                        <h3 className="font-semibold text-black mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-90">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {post.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="liked-posts" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>좋아요한 게시글</CardTitle>
                    <CardDescription>
                      관심 있게 본 게시글들을 모아봤어요
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {likedPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 bg-gray-30 rounded-lg hover:bg-gray-40 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          <span className="text-sm text-gray-90">
                            {post.time}
                          </span>
                        </div>
                        <h3 className="font-semibold text-black mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-80">
                          작성자: {post.author}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>관심 있는 이벤트</CardTitle>
                    <CardDescription>
                      참여하고 싶은 이벤트들을 저장해두었어요
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {likedEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-4 bg-gray-30 rounded-lg hover:bg-gray-40 transition-colors cursor-pointer"
                      >
                        <h3 className="font-semibold text-black mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-80">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>알림 설정</CardTitle>
                    <CardDescription>
                      받고 싶은 알림을 설정해보세요
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">
                          새 이벤트 알림
                        </h4>
                        <p className="text-sm text-gray-80">
                          새로운 지역 이벤트가 등록되면 알려드려요
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        설정
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">댓글 알림</h4>
                        <p className="text-sm text-gray-80">
                          내 게시글에 댓글이 달리면 알려드려요
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        설정
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">좋아요 알림</h4>
                        <p className="text-sm text-gray-80">
                          내 게시글에 좋아요가 눌리면 알려드려요
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        설정
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">AI 추천 알림</h4>
                        <p className="text-sm text-gray-80">
                          맞춤형 추천 정보를 알려드려요
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        설정
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* 프로필 수정 모달 */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentProfile={user}
        onSave={handleProfileSave}
      />
    </div>
  );
}
