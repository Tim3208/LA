import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Camera,
  Save,
  X,
  AlertCircle,
  Phone,
  VenusAndMars,
} from "lucide-react";

export function ProfileEditModal({ isOpen, onClose, currentProfile, onSave }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: currentProfile.name || "",
    nickname: currentProfile.nickname || "",
    email: currentProfile.email || "",
    location: currentProfile.location || "강남구",
    bio: currentProfile.bio || "",
    birthYear: currentProfile.birthYear || "",
    gender: currentProfile.gender || "",
    phone: currentProfile.phone || "",
    avatar: currentProfile.avatar || "",
  });

  const locations = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  const currentYear = new Date().getFullYear();
  const birthYears = Array.from({ length: 80 }, (_, i) => currentYear - i - 14);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    } else if (formData.name.length < 2) {
      newErrors.name = "이름은 2자 이상이어야 합니다";
    }

    if (!formData.nickname.trim()) {
      newErrors.nickname = "닉네임을 입력해주세요";
    } else if (formData.nickname.length < 2) {
      newErrors.nickname = "닉네임은 2자 이상이어야 합니다";
    }

    /**
     * 아이디@도메인.최상위도메인 구조 확인하는 이메일 정규식
     * /^와 $/ : 문자열의 시작과 끝
     * [^\s@]+ : 공백문자(\s)나 '@'문자가 아닌 문자들로 이루어진 하나 이상의 글자
     * @ : 문자 '@'가 반드시 있어야 함을 나타냄
     * \. : 마침표(.)를 의미함 (정규식에서'.'은 모든 문자를 뜻함 -> 앞에 \를 붙여서 문자 그대로 마침표임을 표시)
     */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "이메일 형식은 example@gmail.com 과 같은 형식으로 입력되어야 합니다";
    }

    if (formData.phone && !/^[0-9-+\s()]+$/.test(formData.phone)) {
      newErrors.phone = "올바른 전화번호 형식을 입력해주세요";
    }

    if (formData.bio && formData.bio.length > 200) {
      newErrors.bio = "자기소개는 200자 이하로 입력해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          avatar: "이미지 크기는 5MB 이하여야 합니다",
        }));
        return;
      }

      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          avatar: "이미지 파일만 업로드 가능합니다",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        setPreviewImage(result);
        setFormData((prev) => ({ ...prev, avatar: result }));
        setErrors((prev) => ({ ...prev, avatar: "" }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // API 시뮬레이션
      onSave(formData); // 저장 콜백
      onClose();
    } catch (error) {
      setErrors({
        submit: "프로필 수정 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setFormData({
        name: currentProfile.name || "",
        nickname: currentProfile.nickname || "",
        email: currentProfile.email || "",
        location: currentProfile.location || "강남구",
        bio: currentProfile.bio || "",
        birthYear: currentProfile.birthYear || "",
        gender: currentProfile.gender || "",
        phone: currentProfile.phone || "",
        avatar: currentProfile.avatar || "",
      });
      setPreviewImage(null);
      setErrors({});
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-100 flex items-center gap-2">
            <User className="w-6 h-6" />
            프로필 수정
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* 프로필 이미지 영역 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={previewImage || formData.avatar || "/placeholder.svg"}
                  alt="프로필 이미지"
                />
                <AvatarFallback>
                  <User className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-blue-100 text-white p-2 rounded-full cursor-pointer hover:bg-blue-110 transition-colors"
              >
                <Camera className="w-4 h-4" />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            {errors.avatar && (
              <p className="text-sm text-red-500">{errors.avatar}</p>
            )}
            <p className="text-xs text-gray-90 text-center">
              JPG, PNG 파일만 가능 (최대 5MB)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 기본 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black border-b pb-2">
                기본 정보
              </h3>

              {/* 이름 */}
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4" />
                  이름 *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-red-500" : ""}
                  placeholder="실명을 입력해주세요"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* 닉네임 */}
              <div>
                <Label
                  htmlFor="nickname"
                  className="flex items-center gap-2 mb-1"
                >
                  <User className="w-4 h-4" />
                  닉네임 *
                </Label>
                <Input
                  id="nickname"
                  value={formData.nickname}
                  onChange={(e) =>
                    handleInputChange("nickname", e.target.value)
                  }
                  className={errors.nickname ? "border-red-500" : ""}
                  placeholder="커뮤니티에서 사용할 닉네임"
                />
                {errors.nickname && (
                  <p className="text-sm text-red-500 mt-1">{errors.nickname}</p>
                )}
              </div>

              {/* 이메일 */}
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4" />
                  이메일 *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* 전화번호 */}
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 mb-1">
                  <Phone className="w-4 h-4" />
                  전화번호
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                  placeholder="010-1234-5678 (선택사항)"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* 추가 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black border-b pb-2">
                추가 정보
              </h3>

              {/* 거주 지역 */}
              <div>
                <Label className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  거주 지역
                </Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) =>
                    handleInputChange("location", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="거주하시는 구를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 출생년도와 성별 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    출생년도
                  </Label>
                  <Select
                    value={formData.birthYear}
                    onValueChange={(value) =>
                      handleInputChange("birthYear", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="년도" />
                    </SelectTrigger>
                    <SelectContent>
                      {birthYears.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}년
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-1">
                    <VenusAndMars className="w-4 h-4" />
                    성별
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleInputChange("gender", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="성별" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">남성</SelectItem>
                      <SelectItem value="female">여성</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* 자기소개 */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="bio">자기소개</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  className={`min-h-[100px] ${
                    errors.bio ? "border-red-500" : ""
                  }`}
                  placeholder="간단한 자기소개를 작성해주세요 (선택사항)"
                  maxLength={200}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.bio && (
                    <p className="text-sm text-red-500">{errors.bio}</p>
                  )}
                  <p className="text-sm text-gray-90 ml-auto">
                    {formData.bio.length}/200
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 에러 메시지 */}
          {errors.submit && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.submit}</AlertDescription>
            </Alert>
          )}

          {/* 버튼 */}
          <div className="flex justify-end gap-3 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              <X className="w-4 h-4 mr-2" />
              취소
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-100 hover:bg-blue-110"
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "저장 중..." : "저장하기"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
