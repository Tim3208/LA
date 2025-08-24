import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * 임시 AI 추천 데이터
 *
 * @param {number} id
 * @param {string} title 행사 이름
 * @param {date} date 날짜
 * @param {string} location 위치
 * @param {string[]} tags 태그(키워드) 배열
 * @param {string} summary 행사 요약설명
 * @param {string} matchReason 추천 이유
 * @param {number} confidence 매칭 신뢰도
 */
const aiRecommendations = [
  {
    id: 1,
    title: "멋쟁이 사자처럼 13기 해커톤",
    date: "2025.08.25",
    location: "서초구 aT센터",
    tags: ["힐링", "감성"],
    summary:
      "멋쟁이 사자처럼 13기, 아이디어에 열정을 더해 현실로 만들어가는 우리들의 첫 해커톤!",
    matchReason:
      "추천 이유: 멋쟁이 사자처럼 13기에 소속되어 계시고, 개발관련 행사에 자주 참여하시는 것 같아요",
    confidence: 92,
  },
  {
    id: 2,
    title: "가족 친화 겨울축제",
    date: "2025.12.22",
    location: "강남역 광장",
    tags: ["가족", "체험", "활기찬"],
    summary:
      "아이들과 함께 즐길 수 있는 다양한 체험 부스와 공연이 준비되어 있어요 👨‍👩‍👧‍👦",
    matchReason: "가족 단위 활동을 자주 검색하시는 패턴이 보여요",
    confidence: 88,
  },
  {
    id: 3,
    title: "지역 청년 창업 박람회",
    date: "2025.09.20",
    location: "강남구청",
    tags: ["네트워킹", "교육", "미래지향"],
    summary:
      "새로운 아이디어와 사람들을 만날 수 있는 기회, 미래를 준비하는 시간 💡",
    matchReason: "커리어 관련 게시글에 관심을 보이셨어요",
    confidence: 85,
  },
];

/** AI 맞춤 추천 탭 CP */
const AiPageRecommendationCP = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">
          당신을 위한 맞춤 추천 ✨
        </h2>
        <p className="text-gray-100">
          활동 패턴과 관심사를 분석해 개인화된 행사를 추천해드려요
        </p>
      </div>

      <div className="grid gap-6">
        {aiRecommendations.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100">
                      {event.confidence}% 매치
                    </Badge>
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-90 mb-3">{event.summary}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-90 mb-3">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-110">
                      <strong>추천 이유:</strong> {event.matchReason}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-100 hover:bg-blue-120">
                  관심 등록
                </Button>
                <Button size="sm" variant="outline">
                  자세히 보기
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AiPageRecommendationCP;
