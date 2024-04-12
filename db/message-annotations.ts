import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert } from "@/supabase/types"

export const createMessageAnnotation = async (messageAnnotation: TablesInsert<"message_annotations">) => {
  const { data: createdMessageAnnotation, error } = await supabase
    .from("message_annotations")
    .insert([messageAnnotation])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdMessageAnnotation
}
