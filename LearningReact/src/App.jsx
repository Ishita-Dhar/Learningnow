import React from "react"
import Card from "./Components/Card"


function App() {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: "$85/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    payPerHour: "$55/hr",
    location: "Remote (India)"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer (Full Stack)",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: "$80/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Intern",
    tag1: "Internship",
    tag2: "Junior Level",
    payPerHour: "$35/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "Cloud Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: "$65/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: "$100/hr",
    location: "Hyderabad, India"
  }
];

  

  return (
    <>
    <div className="parent">
       {
        jobOpenings.map(function(elem){
          return <Card 
          company={elem.companyName} 
          post={elem.post} 
          tag1={elem.tag1} 
          tag2={elem.tag2} 
          pay={elem.payPerHour}
          brandLogo={elem.brandLogo}
          location={elem.location}
          datePosted={elem.datePosted}
          />
        })
       }
    </div>
    </>
  )
}

export default App
