import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainLayOut from "../../layout/MainLayOut";

import {
  Container,
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  LastCard,
  CardTitle,
  SubTitle,
  InputWrapper,
  InputTitle,
  StyledInput,
  TagInput,
  Form,
  SelectWrapper,
  SelectTitle,
  Row,
  TextWrapper,
  TextTitle,
  Textarea,
  StyledSelect,
  Button,
  TagTitle,
  TagContainer,
  Tag,
  TagRow,
  FileUploadWrapper,
  UploadIcon,
  UploadButton,
  HiddenFileInput,
  FileName,
  OptionsContainer,
  OptionLabel,
  Checkbox,
  GuideList,
  SubmitButton,
  TagWrapper,
} from "./style";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [file, setFile] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [allowComments, setAllowComments] = useState(true);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, category, content, tags, file, isAnonymous });
  };

  return (
    <MainLayOut>
    <Container>
      {/* 게시글 작성 */}
      <FirstCard>
        <CardTitle>게시글 작성</CardTitle>
        <SubTitle>작성하려는 게시글의 내용을 적어주세요.</SubTitle>
        <Form onSubmit={handleSubmit}>
          <Row>
            <InputWrapper>
            <InputTitle>게시글 제목 *</InputTitle>
            <StyledInput
              type="text"
              placeholder="제목을 입력하세요. (5-100자)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </InputWrapper>
            <SelectWrapper>
            <SelectTitle>게시판 카테고리 *</SelectTitle>
            <StyledSelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">  게시할 카테고리를 선택해주세요.</option>
              <option value="free">자유게시판</option>
              <option value="promo">홍보게시판</option>
              <option value="local">지역홍보게시판</option>
              <option value="news">뉴스게시판</option>
              <option value="hot">핫게시판</option>
            </StyledSelect>
            </SelectWrapper>
          </Row>
          <TextWrapper>
          <TextTitle>게시글 내용 *</TextTitle>
          <Textarea
            placeholder="내용을 입력하세요 (10-5000자)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          </TextWrapper>
        </Form>
      </FirstCard>

      {/* 태그 */}
      <SecondCard>
        <CardTitle># 태그</CardTitle>
        
          <TagWrapper>
    <TagTitle>새 태그 추가</TagTitle>
    <TagRow>
      <TagInput
        type="text"
        placeholder="태그 입력 (최대 10개)"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
          }
        }}
      />
      <Button type="button" onClick={handleAddTag}>
        {'+'}
      </Button>
    </TagRow>
  </TagWrapper>

  <TagContainer>
    {tags.map((tag, index) => (
      <Tag key={index}>
        #{tag}{" "}
        <span
          style={{ cursor: "pointer", marginLeft: "6px" }}
          onClick={() => {
            setTags(tags.filter((_, i) => i !== index));
          }}
        >
          ✕
        </span>
      </Tag>
    ))}
  </TagContainer>
      </SecondCard>

      {/* 사진 첨부 */}
<ThirdCard>
  <CardTitle>사진 첨부</CardTitle>

  <FileUploadWrapper
    onClick={() => document.getElementById("fileUpload").click()}
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
      e.preventDefault();
      if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
    }}
  >
    <UploadIcon>⬆️</UploadIcon>
    <p>사진을 드래그하거나 클릭하여 업로드하세요.</p>
    <small>JPG, PNG 파일 (최대 10MB, 5장까지)</small>
    <UploadButton type="button">파일 선택</UploadButton>
  </FileUploadWrapper>

  <HiddenFileInput
    id="fileUpload"
    type="file"
    accept="image/png, image/jpeg"
    onChange={(e) => {
      if (e.target.files[0]) setFile(e.target.files[0]);
    }}
  />
  
  {file && <FileName>{file.name}<span
        style={{ cursor: "pointer", marginLeft: "8px", color: "#ef4444", fontWeight: "bold" }}
        onClick={() => setFile(null)}
      >
        ✕
      </span></FileName>}
</ThirdCard>


      {/* 게시 옵션 */}
      <FourthCard>
  <CardTitle>게시 옵션</CardTitle>
  <OptionsContainer>
    <OptionLabel>
      <Checkbox
        type="checkbox"
        checked={isAnonymous}
        onChange={() => setIsAnonymous(!isAnonymous)}
      />
      익명으로 게시하기
    </OptionLabel>

    <OptionLabel>
      <Checkbox
        type="checkbox"
        checked={allowComments}
        onChange={() => setAllowComments(!allowComments)}
      />
      댓글 허용
    </OptionLabel>
  </OptionsContainer>
</FourthCard>


      {/* 작성 가이드 */}
      <LastCard>
        <CardTitle>게시글 작성 가이드</CardTitle>
        <GuideList>
          <li>제목은 내용을 잘 요약할 수 있도록 구체적으로 작성해주세요.</li>
          <li>개인정보(전화번호, 주소 등)는 공개하지 마세요.</li>
          <li>상업적 홍보는 홍보게시판을 이용해주세요.</li>
          <li>태그를 활용하면 더 많은 사람들이 게시글을 찾을 수 있어요.</li>
        </GuideList>
      </LastCard>

      {/* 제출 버튼 */}
      <SubmitButton type="submit" onClick={handleSubmit}>
        등록하기
      </SubmitButton>
    </Container>
    </MainLayOut>
  );
};



