import { FC } from "react"

interface ChatInstructionsProps { }

export const ChatInstructions: FC<ChatInstructionsProps> = ({ }) => {
  return (
    <div className="text-sm">
      Any conversations you engage in are with an AI model, not a human and not any representative of ULRI.
      This AI model may produce incorrect, unexpected, or harmful outputs. Everything is being recorded. 
      You may decline the activity or end the conversation at any time. If you are experiencing difficulties, you may contact DSRI staff at [].
    </div>
  )
}
