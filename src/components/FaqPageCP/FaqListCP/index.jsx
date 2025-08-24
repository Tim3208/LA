import { useState, useEffect } from "react";
import SimpleAccordionCP from "../FaqPageAccordionCP";
import { FaqsList, CategoryButton } from "./style";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const BASE_URL = import.meta.env.VITE_BASE_URL;

//임시 데이터
const faqData = [
  {
    id: 1,
    question: "LA는 어떤 서비스인가요?",
    answer:
      "LA는 지역 주민들이 소통하고 정보를 공유할 수 있는 커뮤니티 플랫폼입니다. 지역 이벤트, 축제, 맛집 정보부터 일상적인 소통까지 다양한 기능을 제공합니다.",
    category: "서비스 소개",
  },
  {
    id: 2,
    question: "지역 설정은 어떻게 하나요?",
    answer:
      "현재는 서울시 구 단위로 지역을 설정할 수 있습니다. 상단의 지역 선택 버튼을 클릭하여 원하는 구를 선택해주세요. 추후 수도권 외부 지역까지 세분화할 예정입니다.",
    category: "사용법",
  },
  {
    id: 3,
    question: "게시글은 어떻게 작성하나요?",
    answer:
      '각 게시판 페이지에서 "글쓰기" 버튼을 클릭하면 게시글을 작성할 수 있습니다. 제목, 내용을 입력하고 적절한 카테고리를 선택해주세요.',
    category: "사용법",
  },
  {
    id: 4,
    question: "AI 추천 기능은 어떻게 작동하나요?",
    answer:
      "사용자의 관심사, 활동 패턴, 지역 정보를 분석하여 개인화된 이벤트와 게시글을 추천해드립니다. 더 많이 사용할수록 더 정확한 추천을 받을 수 있습니다.",
    category: "AI 기능",
  },
  {
    id: 5,
    question: "이벤트 알림은 어떻게 설정하나요?",
    answer:
      "마이페이지의 알림 설정에서 원하는 알림 유형을 선택할 수 있습니다. 새 이벤트, 댓글, 좋아요 등 다양한 알림을 설정할 수 있습니다.",
    category: "알림",
  },
  {
    id: 6,
    question: "부적절한 게시글은 어떻게 신고하나요?",
    answer:
      "각 게시글 하단의 신고 버튼을 클릭하여 신고할 수 있습니다. 관리자가 검토 후 적절한 조치를 취합니다.",
    category: "신고/문의",
  },
];

/** FAQ Page의 List를 출력하는 CP */
const FaqListCP = () => {
  const [faqList, setFaqList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 전체 FAQ 조회 API 호출
  useEffect(() => {
    async function fetchFaqs() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${BASE_URL}/faq`);
        setFaqList(res.data);
      } catch (err) {
        // FIXME: 현재 서버가 없어 에러가 나므로 강제로 faqData 불러와서 쓰는중.
        // setError("서버에서 FAQ를 불러오는 중 오류가 발생했습니다.");
        setFaqList(faqData);
      } finally {
        setLoading(false);
      }
    }
    fetchFaqs();
  }, []);

  const categories = [
    "전체",
    ...new Set(faqList.map((item) => item.category).filter(Boolean)),
  ];

  /** 카테고리와 검색어 필터링 */
  const filteredFaqs =
    selectedCategory === "전체"
      ? faqList.filter(
          (item) =>
            item.question.includes(searchQuery) ||
            item.answer.includes(searchQuery)
        )
      : faqList.filter(
          (item) =>
            item.category === selectedCategory &&
            (item.question.includes(searchQuery) ||
              item.answer.includes(searchQuery))
        );

  // FAQ 추가 함수 (관리자 권한 필요)
  const addFaq = async () => {
    if (!newQuestion.trim() || !newAnswer.trim()) {
      alert("질문과 답변 모두 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/faq`, {
        question: newQuestion,
        answer: newAnswer,
      });
      if (res.status === 201) {
        alert("FAQ가 성공적으로 추가되었습니다.");
        setFaqList([...faqList, res.data]);
        setNewQuestion("");
        setNewAnswer("");
      }
    } catch (err) {
      alert("FAQ 추가 중 오류가 발생했습니다.");
      console.error(err);
    }
  };

  return (
    <>
      {/* Search */}
      <div className="mb-8">
        <div className="max-w-7xl mx-auto flex items-center">
          <Search className="absolute ml-3 text-gray-70 w-4 h-4" />
          <Input
            placeholder="FAQ 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* FAQ List */}
      <FaqsList>
        {/* 카테고리 버튼 */}
        <div>
          {categories.map((cat) => (
            <CategoryButton
              key={cat}
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </CategoryButton>
          ))}
        </div>

        {/* FAQ 리스트 */}
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <SimpleAccordionCP items={filteredFaqs} />
        )}
      </FaqsList>
    </>
  );
};

export default FaqListCP;
