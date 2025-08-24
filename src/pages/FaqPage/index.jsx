import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MainLayOut from "@/layout/MainLayOut";
import { FaqPageMainStyle } from "./style";

import SimpleAccordionCP from "@/components/FaqPageCP/FaqPageAccordionCP";
import FaqListCP from "@/components/FaqPageCP/FaqListCP";
import QnaSectionCP from "@/components/FaqPageCP/QnaSectionCP";

import { HelpCircle, MessageCircle } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FaqPage = () => {
  // FAQ 추가용 상태 (관리자용)
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  return (
    <MainLayOut>
      <FaqPageMainStyle>
        <Tabs
          defaultValue="faq"
          className="max-w-1440 mx-auto w-full px-4 lg:px-0"
        >
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
            <FaqListCP />
          </TabsContent>

          <TabsContent
            value="qna"
            className="mt-8 w-full flex justify-center flex-col gap-8 lg:flex-row"
          >
            <QnaSectionCP />
          </TabsContent>
        </Tabs>
      </FaqPageMainStyle>
    </MainLayOut>
  );
};

export default FaqPage;
