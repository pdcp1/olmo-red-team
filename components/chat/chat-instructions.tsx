import { FC } from "react"

interface ChatInstructionsProps { }

export const ChatInstructions: FC<ChatInstructionsProps> = ({ }) => {
  return (
    <div className="text-sm">
      These are notes or instructions that are always visible, 
      reminding the participant that the model is a system under test,
      can produce incorrect, unepxected, or harmful outputs,
      and that the participant may decline to continue or respond at any time.
      They may also contact DSRI staff in some manner.
      This text can also be on the left-hand side bar,
      but an abbreviated version of it should be available on mobile.
    </div>
  )
}
