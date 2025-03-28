// "use client";

// import { useState } from "react";
// import { useEditor, EditorContent, Editor } from "@tiptap/react";
// import { Bold, Italic, Underline, Strikethrough, List, ListOrdered, Heading1, Heading2, Heading3, Link, Upload, FileText, Trash } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import StarterKit from "@tiptap/starter-kit";
// import BoldExtension from "@tiptap/extension-bold";
// import ItalicExtension from "@tiptap/extension-italic";
// import UnderlineExtension from "@tiptap/extension-underline";
// import StrikeExtension from "@tiptap/extension-strike";
// import BulletList from "@tiptap/extension-bullet-list";
// import OrderedList from "@tiptap/extension-ordered-list";
// import LinkExtension from "@tiptap/extension-link";
// import Heading from "@tiptap/extension-heading";
// import Placeholder from "@tiptap/extension-placeholder";
// import Image from "@tiptap/extension-image"; 
 
// interface FileData {
//   file: File;
//   preview: string;
// }

// export default function TextEditor() {
//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({ heading: false }), 
//       BoldExtension,
//       ItalicExtension,
//       UnderlineExtension,
//       StrikeExtension,
//       BulletList,
//       OrderedList,
//       LinkExtension,
//       Heading.configure({ levels: [1, 2, 3] }), 
//       Placeholder.configure({ placeholder: "Type your question here..." }),
//       Image, 
//     ],
//     editorProps: {
//       attributes: { class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3" },
//     },
//     content: "",
//   });

//   const [files, setFiles] = useState<FileData[]>([]);
 
//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const uploadedFiles = Array.from(event.target.files || []);
    
//     const fileData: FileData[] = uploadedFiles.map((file) => ({
//       file,
//       preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : "", 
//     }));

//     setFiles((prevFiles) => [...prevFiles, ...fileData]);

//     uploadedFiles.forEach((file) => {
//       if (file.type.startsWith("image/")) {
//         const reader = new FileReader();
//         reader.onload = () => {
//           if (editor) {
//             editor.chain().focus().setImage({ src: reader.result as string }).run();
//           }
//         };
//         reader.readAsDataURL(file);
//       }
//     });
//   };

//   const removeFile = (index: number) => {
//     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-4 w-270   border rounded-lg shadow-sm">
//       <div className="border-b   pb-2 flex items-center gap-3 flex-wrap">
//         <button 
//           onClick={() => editor?.chain().focus().toggleBold().run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("bold") ? "bg-gray-300" : ""}`}
//         >
//           <Bold size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleItalic().run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("italic") ? "bg-gray-300" : ""}`}
//         >
//           <Italic size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleUnderline().run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("underline") ? "bg-gray-300" : ""}`}
//         >
//           <Underline size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleStrike().run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("strike") ? "bg-gray-300" : ""}`}
//         >
//           <Strikethrough size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("heading", { level: 1 }) ? "bg-gray-300" : ""}`}
//         >
//           <Heading1 size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}
//         >
//           <Heading2 size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} 
//           className={`p-1 hover:bg-gray-200 rounded ${editor?.isActive("heading", { level: 3 }) ? "bg-gray-300" : ""}`}
//         >
//           <Heading3 size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleBulletList().run()} 
//           className="p-1 hover:bg-gray-200 rounded"
//         >
//           <List size={18} />
//         </button>
//         <button 
//           onClick={() => editor?.chain().focus().toggleOrderedList().run()} 
//           className="p-1 hover:bg-gray-200 rounded"
//         >
//           <ListOrdered size={18} />
//         </button>
//         <button 
//           onClick={() => {
//             const url = prompt("Enter the URL");
//             if (url) {
//               editor?.chain().focus().setLink({ href: url }).run();
//             }
//           }} 
//           className="p-1 hover:bg-gray-200 rounded"
//         >
//           <Link size={18} />
//         </button>

//         {/* File Upload */}
//         <label htmlFor="file-upload" className="cursor-pointer p-1 hover:bg-gray-200 rounded">
//           <Upload size={18} />
//         </label>
//         <input 
//           type="file" 
//           id="file-upload" 
//           className="hidden" 
//           accept="image/*,application/pdf" 
//           multiple 
//           onChange={handleFileUpload} 
//         />
//       </div>

//       {/* Text Editor */}
//       <EditorContent editor={editor} className="mt-3 border p-2 rounded-md min-h-[250px]" />

//       {/* Uploaded File Previews */}
//       <div className="mt-3 w-fit flex gap-4">
//         {files.map((fileData, index) => (
//           <div key={index} className="border rounded-md p-2 flex flex-col items-center gap-3 bg-gray-100">
//             {fileData.preview ? (
//               <img src={fileData.preview} alt="Uploaded file" className="w-25 h-25 object-cover rounded-md" />
//             ) : (
//               <FileText size={45} className="text-gray-600" />
//             )}
//             <p className="text-sm font-medium">{fileData.file.name}</p>
//             <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
//               <Trash size={18} />
//             </button>
//           </div>
//         ))}
//       </div>

//       <Button className="mt-4" onClick={() => console.log(editor?.getHTML(), files)}>
//         Next
//       </Button>
//     </div>
//   );
// }





const TextEditor = () => {
  return (
  <> 
  <h1 className="bg-red-300">message box</h1>
  </>
  );
}

export default TextEditor;