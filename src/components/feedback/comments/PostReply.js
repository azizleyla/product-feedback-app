import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FeedbackApi } from "../../../api/feedbackApi";
import { ApiQueryKeys } from "../../../constants/api.constants";

const PostReply = ({ commentId ,replyId,commentID}) => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: selectedFeedback } = useQuery({
    queryKey: [ApiQueryKeys.feedbacks, id],
    queryFn: () => FeedbackApi.getById(id),
  });


  const updateCommentMutation = useMutation(FeedbackApi.updateComments, {
    onSuccess: (data) => {
      queryClient.resetQueries([ApiQueryKeys.feedbacks]);
      setContent("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const replyObj = {
      id: crypto.randomUUID(),
      user: {
        name: "Ali Aziz",
        username: "@ali",
        img: "",
      },
      content: content,
    };
    if(commentId){
        const selectedObj = selectedFeedback?.comments?.find(
            (item) => item.id === Number(commentId)
          );
          selectedObj['replies']?.push(replyObj);

    }else if(replyId){
        const selectedReply = selectedFeedback?.comments?.find(item => item.id ===commentID);
        const a = selectedReply?.replies?.find(item => item.id === replyId)
         console.log(a)
        
         a['replies']= replyObj;
         console.log(selectedReply)


    }

  
  
    const data = {
      ...selectedFeedback,
      comments: selectedFeedback.comments,
    };
    console.log(data)
  
    updateCommentMutation.mutate(data);
  };

  return (
    <div className="flex justify-between w-full items-start my-6 ">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="bg-[##F7F8FD]  min-w-[400px]  rounded-md border-2 bg-[#f7f8fd] focus:border-2 focus:border-[#4661e6] resize-none outline-none w-[80%] h-20 p-4 "
        ></textarea>
        <button
          type="submit"
          className="bg-[#AD1FEA] text-white rounded-lg py-3 px-6"
        >
          Post Reply
        </button>
      </form>
    </div>
  );
};

export default PostReply;
