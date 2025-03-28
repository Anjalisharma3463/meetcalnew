 
// Mentor type definition


export type Mentor = {
    id: number
    name: string
    role: string
    company: string
    skills: string[]
    rating: number
    reviews: number 
    roleCategory?: 'SE/SDE' | 'DS/AI/ML' | 'Product Management' | 'Project Management' | 'Consulting' | 'Quantitative Finance'
    companyCategory?: 'FAANG' | 'Startups' | 'MNC' | 'Others'
    availability?: 'This week' | 'Next week' | 'Anytime'
}

export const MENTORS: Mentor[] = [
    {
        id: 1,
        name: "Jonny Rose",
        role: "Sr. Software Engineering at Google",
        company: "Google",
        skills: ["Project Management", "Growth Management", "Full Stack"],
        rating: 4.8,
        reviews: 13, 
        roleCategory: 'SE/SDE',
        companyCategory: 'FAANG',
        availability: 'This week',
        
    },
    {
        id: 2,
        name: "Dev Jain",
        role: "Sr. Software Engineering at Microsoft",
        company: "Microsoft",
        skills: ["Growth Management", "SRE"],
        rating: 4.5,
        reviews: 8, 
        roleCategory: 'DS/AI/ML',
        companyCategory: 'FAANG',
        availability: 'Anytime'
    },
    {
        id: 3,
        name: "Rishi Mehta",
        role: "Sr. Software Engineering at JP Morgan",
        company: "JP Morgan",
        skills: ["Backend Engineering"],
        rating: 4.7,
        reviews: 10, 
        roleCategory: 'SE/SDE',
        companyCategory: 'FAANG',
        availability: 'This week'
    },
    {
        id: 4,
        name: "Hest Mistry",
        role: "Sr. Software Engineering at IQnext",
        company: "IQnext",
        skills: ["Growth Management", "SRE"],
        rating: 4.6,
        reviews: 9, 
        roleCategory: 'SE/SDE',
        companyCategory: 'Startups',
        availability: 'Next week'

    },
    {
        id: 5,
        name: "john  ",
        role: "Sr. Software Engineering at cisco",
        company: "cisco",
        skills: ["Growth Management", "SRE"],
        rating: 4.6,
        reviews: 9, 
        roleCategory: 'Product Management',
        companyCategory: 'Startups',
        availability: 'Next week'
    }
]