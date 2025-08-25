import { QnaSection } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Phone, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// 문의 유형 리스트
const askCategoryList = [
  { value: "general", data: "일반 문의" },
  { value: "technical", data: "기술 지원" },
  { value: "account", data: "계정 관련" },
  { value: "other", data: "기타 문의" },
];

export function QnaSectionCP() {
  const form = useForm();

  async function onSubmit(data) {
    try {
      const response = await fetch(`${BASE_URL}/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("문의가 정상적으로 제출되었습니다.");
      } else {
        toast.error("문의 제출 중 오류가 발생했습니다.");
      }
    } catch (error) {
      toast.error("서버와 통신 중 문제가 발생했습니다.(콘솔에 error 출력)");
      console.error(error);
    }

    toast("개발자용 제출된 내용 토스트", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      {/* 1:1 문의 섹션 카드 */}
      <QnaSection>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            {/* 문의 유형 SELECT */}
            <FormField
              control={form.control}
              name="category"
              render={() => (
                <FormItem>
                  <FormLabel>문의 유형</FormLabel>
                  <Controller
                    name="category"
                    control={form.control}
                    rules={{ required: "문의 유형을 선택하세요." }}
                    render={({ field, fieldState }) => (
                      <>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="문의 유형을 선택하세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {askCategoryList.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.data}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </>
                    )}
                  />
                </FormItem>
              )}
            />

            {/* 문의 제목 입력란 */}
            <FormField
              control={form.control}
              name="title"
              render={(field) => (
                <FormItem>
                  <FormLabel>문의 제목</FormLabel>
                  <FormControl>
                    <textarea
                      {...form.register("title", {
                        required: "제목을 입력하세요.",
                      })}
                      className="w-full p-2 border rounded"
                      rows={1}
                      placeholder="제목을 입력하세요"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 문의 내용 입력란 */}
            <FormField
              control={form.control}
              name="content"
              render={(field) => (
                <FormItem>
                  <FormLabel>문의 내용</FormLabel>
                  <FormControl>
                    <textarea
                      {...form.register("content", {
                        required: "내용을 입력하세요.",
                      })}
                      className="w-full p-2 border rounded"
                      rows={4}
                      placeholder="문의 내용을 입력하세요"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 연락처 또는 이메일 입력란 */}
            <FormField
              control={form.control}
              name="contact"
              render={(field) => (
                <FormItem>
                  <FormLabel>회신 받을 연락처/이메일</FormLabel>
                  <FormControl>
                    <textarea
                      {...form.register("contact", {
                        required: "회신 받을 연락처나 이메일을 입력하세요.",
                      })}
                      className="w-full p-2 border rounded"
                      rows={1}
                      placeholder="연락처 또는 이메일을 입력하세요"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 제출 버튼 */}
            <Button type="submit" className="bg-blue-100 hover:bg-blue-110">
              문의 제출
            </Button>
          </form>
        </Form>
      </QnaSection>

      {/* 고객지원 센터 섹션 카드 */}
      <QnaSection>
        <div>
          <h2 className="text-3xl text-blue-100 font-bold">고객지원 센터</h2>
          <p className="text-base text-gray-80">
            다양한 방법으로 문의하실 수 있습니다.
          </p>
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
          <Mail className="icon" />
          <div>
            <h3>이메일 문의</h3>
            <p>support@gmail.com</p>
            <p>24시간 접수 가능</p>
          </div>
        </div>
        <div>
          <MessageCircle className="icon" />
          <div>
            <h3>카카오톡 문의</h3>
            <p>@LA</p>
            <p>평일 9:00-18:00</p>
          </div>
        </div>
        <section className="flex flex-col gap-4">
          <h2>자주 이용하는 기능</h2>
          <Link to="/ai">
            <Button className="w-full bg-blue-80 text-white hover:bg-blue-100">
              AI 큐레이터 바로가기
            </Button>
          </Link>
          <Link to="/list">
            <Button className="w-full bg-blue-80 text-white hover:bg-blue-100">
              게시판 목록
            </Button>
          </Link>
          <Link to="/">
            <Button className="w-full bg-blue-80 text-white hover:bg-blue-100">
              인기 게시글 보러가기
            </Button>
          </Link>
        </section>
      </QnaSection>
    </>
  );
}
export default QnaSectionCP;
