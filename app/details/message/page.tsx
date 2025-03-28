import { CareerGuidance } from "@/components/CareerGuidance";
import RichTextEditor from "@/components/textArea";
export default function MessagePage() {
    return (
      <div>
         <CareerGuidance/>
          <div className="w-full mx-7">
                   <RichTextEditor/>
            </div>
      </div>
    );
  }
  