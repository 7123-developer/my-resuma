import toDo from '../assets/toDo.png'
import commingSoon from '../assets/commingSoon.png'

export const api = {
  main: {
    address: {
      city: "Hoshiarpur",
      state: "Punjab",
      zip: "146001",
    },
    name: "Nikhil Tiwari",
    bio:
      "I am fond of challenging myself in order to grow and further impronve my techniical skill. Allways in the search of learning",
      // "Success is about dedication. You may not be where you want to be or do what you want to do when you're on the journey. But you've got to be willing to have vision and foresight that leads you to an incredible end. ",
    contactmessage:
      "Here is where you should write your message to readers to have them get in contact with you.",
    description:
      "Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
    email: "nikhiltiwari7123@gmail.com",
    image: "",
    occupation: "React",
    phone: "+91 8437904258, +91 7009426785",
    resumedownload: "",
    social: [
      {
        name: "facebook",
        url: "https://www.facebook.com/nikhil.tiwari.9803150",
        className: "fa fa-facebook",
      },
      {
        name: "twitter",
        url: "https://twitter.com/NikhilT94103233?s=09",
        className: "fa fa-twitter",
      },
      // {
      //    name: "google-plus",
      //    url: "http://googleplus.com/tbakerx",
      //    className: "fa fa-google-plus"
      // },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/nikhil-tiwari-56422718b",
        className: "fa fa-linkedin",
      },
      {
        name: "instagram",
        url:
          "https://www.instagram.com/invites/contact/?i=1m3llzshfi8i7&utm_content=1kl3lnc",
        className: "fa fa-instagram",
      },
      {
        name: "github",
        url: "https://github.com/7123-developer",
        className: "fa fa-github",
      },
      {
        name: "skype",
        url: "https://join.skype.com/invite/YOUIdjRkLt7U",
        className: "fa fa-skype",
      },
    ],
    website: "",
  },
  portfolio: {
    projects: [
      {
        title: "ToDo list",
        category: "ToDo Items",
        image: "toDo.png",
        url: {toDo},
      },
      {
        title: "Comming Soon",
        category: "Comming Soon",
        image: "commingSoon.png",
        url: {commingSoon},
      },
    ],
  },
  resume: {
    education: [
      {
        degree: "Bachlor of Computer Science",
        description: "",
        graduated: "June 2020",
        school:
          "Rayat Bahra Institute Of Engineering and Nanotechnology(IKJPTU)",
      },
      // {
      //   degree: "What did you study 101",
      //   description: "Describe your experience at school, what you learned, what useful skills you have acquired etc.",
      //   graduated: "March 2003",
      //   school: "School #1 Maybe College?"
      // }
    ],
    skillmessage:
      "I enjoy working in fast-paced environments and can adapt to new processes by quickly learning new skills.",
    skills: [
      { name: "Git", level: "60%" },
      { name: "React Native", level: "65%" },
      { name: "React Js", level: "70%" },
      { name: "CSS", level: "90%" },
      { name: "HTML5", level: "90%" },
      { name: "Shopify", level: "50%" },
      { name: "Node Js", level: "40%" },
    ],
    work: [
      {
        company: "Recraft Ralic",
        description: "Working as React developer",
        title: "Jr. Softwear Enginner",
        years: "Nov 2020 - Present",
      },
      {
        company: "Alliance Ecommerce",
        description: "Woking as Frontend develooper",
        title: "Jr. Frontend developwer",
        years: "Jan 2020 - April 2020",
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        text:
          "Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
        user: "Kareem Abdul Jabbar",
      },
      {
        text:
          "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of Un",
        user: "Steve Wozniak... impersonator",
      },
    ],
  },
};
