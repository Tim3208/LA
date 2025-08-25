import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayOut from "../../layout/MainLayOut";

import {
  Container,
  Title,
  Tag,
  PostWrapper,
  Header,
  Content,
  Img,
  IconWrapper,
  ContentWrapper,
  Modal,
  ModalContent,
  Overlay,
  CommentList,
  CommentInput,
  SubmitButton,
  SubmitWrapper,
  CloseButton
} from "./style";

import { Heart, MessageCircle,X  } from "lucide-react";

export default function CreatePost() {
  const [liked, setLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: "익명1", text: "첫 댓글입니다!" },
    { id: 2, author: "익명2", text: "두 번째 댓글입니다!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const toggleLike = () => setLiked(!liked);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: Date.now(), author: "익명", text: newComment }]);
    setNewComment("");
  };

  return (
    <MainLayOut>
      <Header>자유게시판</Header>
      <Container>
        <PostWrapper>
          <Title>게시글 제목 예시</Title>
          <Tag>#공식</Tag>
          <ContentWrapper>
            <Content>게시글 내용 예시입니다. 여러 줄도 가능합니다.</Content>
            <Img src="" alt="게시글 이미지" />
          </ContentWrapper>
          
        </PostWrapper>

        <IconWrapper>
          <Heart
            size={30}
            strokeWidth={1}
            color={liked ? "red" : "black"}
            onClick={toggleLike}
            style={{ cursor: "pointer" }}
          />
          <MessageCircle
            size={30}
            strokeWidth={1}
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          />
        </IconWrapper>

        {/* 댓글 모달 */}
        {isModalOpen && (
          <>
            <Overlay onClick={toggleModal} />
            <Modal>
              <CloseButton><X size={24} onClick={toggleModal}/></CloseButton>
              <ModalContent>
                <CommentList>
                  {comments.map((comment) => (
                    <p key={comment.id}>
                      <strong>{comment.author}:</strong> {comment.text}
                    </p>
                  ))}
                </CommentList>
                <SubmitWrapper>
                <CommentInput
                  type="text"
                  placeholder="댓글을 입력하세요"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddComment();
                  }}
                />
                
                <SubmitButton onClick={handleAddComment}>작성</SubmitButton>
                </SubmitWrapper>
              </ModalContent>

            </Modal>
          </>
        )}
      </Container>
    </MainLayOut>
  );
}