import {    Video ,MessageSquareText,Box,BriefcaseBusiness,Monitor } from "lucide-react";

// Mock services data
export const services = [
    {
      id: 1,
      title: "Career Guidance",
      description: "I'll give you advice to help with your career decisions.",
      serviceType: "1:1 call",
      duration: "30 min",
      amount: "300",
      icon: Video
    },
    {
      id: 2,
      title: "Resume Review",
      description: "I'll refine your resume to land better opportunities.",
      serviceType: "Priority DM",
      duration: "Replies in 1 day",
      amount: "100",
      icon:MessageSquareText
    },
    {
      id: 3,
      title: "1 month career guidance",
      description: "2 x 1:1 call + Resume review + Priority DM",
      serviceType: "Package",
      duration: "1 month",
      amount: "1,000",
      icon: Box
    },
    {
      id: 4,
      title: "Interview Tips Webinar",
      description: "Practical strategies to boost your confidence.",
      serviceType: "Webinar",
      duration: "28th Oct",
      amount: "1,000",
      icon: Monitor
    },
    {
      id: 5,
      title: "SQL Basics Cheat Sheet",
      description: "To strengthen your SQL and data skills.",
      serviceType: "Digital product",
      duration: "",
      amount: "500",
      icon: BriefcaseBusiness

    },
  ];
  
  // Service types
 export const serviceTypes = ["All", "1:1 call", "Priority DM", "Webinar", "Package", "Digital product"];
  