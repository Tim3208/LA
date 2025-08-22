import { Link } from "react-router-dom";
import { useState } from "react";
// import { useInput } from "../../hooks/useInput";
import axios from "axios";
import MainLayOut from "@/layout/MainLayOut";

import SimpleAccordionCP from "@/components/FaqPageCP/FaqPageAccordionCP";
// import SelectInputCP from "@/components/_common/SelectInputCP";
// import TextAreaInputCP from "@/components/_common/TextAreaInputCP";
// import ButtonCP from "@/components/_common/ButtonCP";
// import OutLineButtonCP from "@/components/_common/OutLineButtonCP";

import { ContactSection, FaqPageMainStyle, FaqsList } from "./style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComment } from "@fortawesome/free-regular-svg-icons";
// import {
//   faPhone,
//   faEnvelope,
//   faComments,
// } from "@fortawesome/free-solid-svg-icons";
import {
  Phone,
  HelpCircle,
  MessageCircle,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/** FAQ question - answer 데이터
 * 각 섹션은 title과 items로 구성됨
 * title은 섹션의 제목
 * items는 질문과 답변의 배열로, 각 객체는 id, question, answer 속성을 가짐
 * @property {Object} faqData.general - 일반 관련 질문 섹션
 * @property {Object} faqData.user - 고객 관련 질문 섹션
 * @property {Object} faqData.owner - 푸드트럭 사장님 관련 질문 섹션
 * @property {string} faqData.general.title - 일반 관련 질문 섹션 제목
 * @property {Array} faqData.general.items - 일반 관련 질문과 답변 목록
 */
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

const FaqPage = () => {
  // 문의 유형 입력값 상태 관리
  // const [askCategory, onChangeAskCategory, setAskCategory] = useInput("");
  // // 문의 제목 입력값 상태 관리
  // const [askTitle, onChangeAskTitle, setAskTitle] = useInput("");
  // // 문의 내용 입력값 상태 관리
  // const [askContent, onChangeAskContent, setAskContent] = useInput("");
  // // 연락처 입력값 상태 관리
  // const [askContact, onChangeAskContact, setAskContact] = useInput("");
  const [searchQuery, setSearchQuery] = useState("");

  // 각 입력값별 에러 상태 관리
  const [askCategoryError, setAskCategoryError] = useState(false);
  const [askTitleError, setAskTitleError] = useState(false);
  const [askContentError, setAskContentError] = useState(false);
  const [askContactError, setAskContactError] = useState(false);

  // 문의 유형 리스트
  const askCategoryList = [
    { value: "general", data: "일반 문의" },
    { value: "technical", data: "기술 지원" },
    { value: "account", data: "계정 관련" },
    { value: "other", data: "기타 문의" },
  ];

  // 문의하기 폼 유효성 검사 함수
  // const validateInquiryForm = async () => {
  //   let valid = true;
  //   // 문의 유형: 필수
  //   if (!askCategory) {
  //     setAskCategoryError(true);
  //     valid = false;
  //   } else {
  //     setAskCategoryError(false);
  //   }
  //   // 문의 제목: 2~20자
  //   if (askTitle.length < 2 || askTitle.length > 20) {
  //     setAskTitleError(true);
  //     valid = false;
  //   } else {
  //     setAskTitleError(false);
  //   }
  //   // 문의 내용: 필수
  //   if (!askContent) {
  //     setAskContentError(true);
  //     valid = false;
  //   } else {
  //     setAskContentError(false);
  //   }
  //   // 연락처: 전화번호-숫자만, 9~11자 / 이메일 - 간단한 정규식
  //   function isValidContact(value) {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     const phoneRegex = /^\d{9,11}$/;
  //     return emailRegex.test(value) || phoneRegex.test(value);
  //   }
  //   if (!isValidContact(askContact)) {
  //     setAskContactError(true);
  //     valid = false;
  //   } else {
  //     setAskContactError(false);
  //   }

  //   // 모든 유효성 검사 통과 시 문의 접수
  //   if (valid) {
  //     try {
  //       const res = await axios.post(`${import.meta.env.VITE_API_URL}/faq`, {
  //         askCategory,
  //         askTitle,
  //         askContent,
  //         askContact,
  //       });

  //       if (res.data.success) {
  //         alert("문의가 성공적으로 접수되었습니다!");
  //         setAskCategory("");
  //         setAskTitle("");
  //         setAskContent("");
  //         setAskContact("");
  //       } else {
  //         alert("문의 접수에 실패했습니다. 다시 시도해주세요.");
  //       }
  //     } catch (error) {
  //       console.error("문의 전송 오류: ", error);
  //       alert("서버 오류가 발생했습니다.");
  //     }
  //   }
  // };

  return (
    <MainLayOut>
      <FaqPageMainStyle>
        <Tabs defaultValue="faq" className="max-w-1440 mx-auto w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              자주 묻는 질문
            </TabsTrigger>
            <TabsTrigger value="qna" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              1:1 문의
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="mt-8">
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
            <div>
              {faqData.map((section) => (
                <FaqsList key={section.id}>
                  <div>
                    <div className="flex">
                      <span>{section.category}</span>
                    </div>
                    <SimpleAccordionCP items={[section]} />
                  </div>
                </FaqsList>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        {/* 
            <div className="space-y-4">
              {faqData.map((faq) => (
                <Card key={faq.id} className="overflow-hidden">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                            {faq.category}
                          </span>
                        </div>
                        <CardTitle className="text-lg text-left">
                          {faq.question}
                        </CardTitle>
                      </div>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFAQ === faq.id && (
                    <CardContent className="pt-0">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
        <ContactSection>
          <section>
            <div>
              <div>
                <h2>1:1 문의하기</h2>
              </div>
              <p>궁금한 점이 있으신가요? 고객센터로 문의해주세요.</p>
            </div>

            <div className="col">
              <SelectInputCP
                title="문의 유형"
                essential="true"
                listData={askCategoryList}
                onChangeHandler={onChangeAskCategory}
              />
              {askCategoryError && (
                <span className="error askCategoryError">
                  문의 유형을 선택하세요.
                </span>
              )}
            </div>
            <div className="col">
              <TextAreaInputCP
                title="제목"
                essential="true"
                ex="문의 제목을 입력해주세요"
                onChangeHandler={onChangeAskTitle}
                value={askTitle}
                maxRows={2}
                minRows={1}
              />
              {askTitleError && (
                <span className="error askTitleError">
                  제목은 2자 이상 20자 이하로 입력해야 합니다.
                </span>
              )}
            </div>
            <div className="col">
              <TextAreaInputCP
                title="내용"
                essential="true"
                ex="문의 내용을 자세히 작성해주세요"
                onChangeHandler={onChangeAskContent}
                value={askContent}
                maxRows={15}
                minRows={5}
              />
              {askContentError && (
                <span className="error askContentError">
                  문의 내용을 작성해주세요.
                </span>
              )}
            </div>
            <div className="col">
              <TextAreaInputCP
                title="연락처"
                essential="true"
                ex="회신받을 이메일 또는 전화번호를 입력해주세요"
                onChangeHandler={onChangeAskContact}
                value={askContact}
                maxRows={2}
                minRows={1}
              />
              {askContactError && (
                <span className="error askContactError">
                  이메일 형식 또는 전화번호 형식이 올바르지 않습니다.
                </span>
              )}
            </div>
            <ButtonCP onClick={validateInquiryForm}>문의하기</ButtonCP>
          </section>

          <section>
            <div>
              <h2>고객지원 센터</h2>
              <p>다양한 방법으로 문의하실 수 있습니다.</p>
            </div>
            <div>
              <Phone className="icon" />
              <div>
                <h3>전화 문의</h3>
                <p>1234-5678</p>
                <p>평일 9:00-18:00</p>
              </div>
            </div>
            <div>
              <div>
                <h3>이메일 문의</h3>
                <p>support@gilmatroad.com</p>
                <p>24시간 접수 가능</p>
              </div>
            </div>
            <div>
              <div>
                <h3>카카오톡 문의</h3>
                <p>@길맛로드</p>
                <p>평일 9:00-18:00</p>
              </div>
            </div>
            <section>
              <h2>자주 이용하는 기능</h2>
              <OutLineButtonCP color="black">
                <Link to="/map">지도에서 푸드트럭 찾기</Link>
              </OutLineButtonCP>
              <OutLineButtonCP color="black">
                <Link to="/register">푸드트럭 등록하기</Link>
              </OutLineButtonCP>
              <OutLineButtonCP color="black">
                <Link to="/my-page">마이페이지</Link>
              </OutLineButtonCP>
            </section>
          </section>
        </ContactSection> */}
      </FaqPageMainStyle>
    </MainLayOut>
  );
};

export default FaqPage;
