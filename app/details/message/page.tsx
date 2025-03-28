import { CareerGuidance } from "@/components/CareerGuidance";
 import TextEditor from "@/components/textArea";
export default function MessagePage() {
    return (
      <div>
         <CareerGuidance/>
          <div className="w-full mx-7">
                  <TextEditor/>
            </div>
      </div>
    );
  }
  