import { CareerGuidance } from "@/components/CareerGuidance";
 import TextEditor from "@/components/textArea";
export default function MessagePage() {
    return (
      <div>
         <CareerGuidance/>
          <div className="mx-10  ">
                  <TextEditor/>
                  <button className="mt-2 float-right border-1 rounded-md py-2 px-10 border-[#CBD5E1] bg-[#F1F5F9]">Next</button>
            </div>
      </div>
    );
  }
  