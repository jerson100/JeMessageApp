"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();
  const idConversation = useMemo(() => {
    if (!params?.idConversation) return "";
    return params.idConversation;
  }, [params.idConversation]);
  return useMemo(() => {
    return { idConversation, isOpen: !!idConversation };
  }, [idConversation]);
};

export default useConversation;
