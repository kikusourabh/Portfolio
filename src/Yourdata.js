import AI_project from "./Assets/Projects/Home screen-captions.png";
import Finance_project from "./Assets/Projects/Sc-1.jpg";
import Thumnail_v1 from "./Assets/Projects/Thumnailv1.jpg";
import Thumnail_v2 from "./Assets/Projects/Thumnailv2.jpg";
import profile from "./Assets/user-profile.jpg";
export default {
  name: "sourov karmakar",
  passion: ["Developer", "UI/UX designer", "Youtuber", "Freelancer"],
  hire_me_link:
    "https://www.upwork.com/freelancers/~01b4ca45ee1a991b88?viewMode=1",
  Profile_path: profile,
  introPara1: {
    light: "Hi I'm a",
    dark: "Mobile & Web Developer with UI/UX Prototyping experience",
  },
  introPara2: {
    light: "I've experienced with",
    dark: "agile methodology",
  },
  introPara3: {
    light: "and different",
    dark: "version controls.",
  },
  introPara4:
    "I am a quick learner, hard worker, problem-solving mindset and excited to accept new challenges to expand my skills and improve on them, and always looking forward to learning new technologies.",
  projects: [
    {
      name: "sagy",
      image_path:
        "https://play-lh.googleusercontent.com/-K-8-nKNG-UNyoyQrd7ktKnmCg02TMiySd-7wtMaTip8hQZAnzwBtIoNp5AoM22PMLk=w1920-h1007-rw",
      description:
        "SANSlAD ADARSH GRAM YOJNA-The vision of our Hon'ble Prime Minister is If we have to build the nation we have to start from the villages and he believes that If every MP transforms villages in his/her constituency into model villages, large number of villages in the country would have seen holistic development. This application offers the list of MPS, villages adopted, schemes, institutes.",
      link: "https://play.google.com/store/apps/details?id=app.shi.com.sagy",
    },
    {
      name: "Snape screen recorder",
      image_path:
        "https://play-lh.googleusercontent.com/CxpT4kNU-tHRHWENGm6xbrC8CXwt4rPPWj1RsV0XRy6YNKVUJGuqWcxCsagz6siDhg=w1920-h1007-rw",
      description:
        "This app will help you to record your device screen and save as videos. you can customize the video output by changing the core setting of the app which contains the",
      link: "https://play.google.com/store/apps/details?id=com.goodwillapps.snaprecorder",
    },
    {
      name: "Meme studio",
      image_path:
        "https://play-lh.googleusercontent.com/vre-FIKlNF9VgKDAYbtye6mD854d6eZqjyBLp3LirW56mJnz26MpZxRdySakjHdYiY8=w1920-h1007-rw",
      description:
        "With Meme studio, you can create your own high-quality memes from the latest trending templates provided in the app or import your own images for creating the meme in the apps.",
      link: "https://play.google.com/store/apps/details?id=com.goodwilldev.memestudio",
    },
    {
      name: "Ai auto caption genretor",
      image_path: AI_project,
      description:
        "I've designed this prototype a part of a learning experience of adobe xd, as well as Flutter and react-native implementation.",
      link: "https://xd.adobe.com/view/6de5bab5-5405-4704-82ff-7aafae0b6cfb-38b6/?fullscreen",
    },
    {
      name: "finance management app",
      image_path: Finance_project,
      description:
        "I've designed this prototype where it show how this app can handle you monthly finance",
      link: "https://xd.adobe.com/view/65a3440e-ac03-40c0-a7b1-87b98ef7edde-30f0/screen/812b18b3-a115-4495-86c4-b3a4b82312be",
    },
  ],
  youtube_videos: [
    {
      thumbnail: Thumnail_v2,
      title:
        "Introduction to Motion Layout and motion editor in android studio 4.0 tutorial with example",
      link: "https://www.youtube.com/watch?v=ryqUDryE5LU",
    },
    {
      thumbnail: Thumnail_v1,
      title:
        "How to use ViewModel, live data and data binding (MVVM) — android tutorial using kotlin",
      link: "https://www.youtube.com/watch?v=T3cD8XSBalI&t=5s",
    },
    {
      link: "https://youtu.be/UrzOO7_7hC0",
    },
    {
      link: "https://www.youtube.com/watch?v=7sF1C_WczOM",
    },
  ],
  resume: {
    Experience: [
      {
        title: "La Net Team Software Solution Pvt Ltd",
        company: "Full-stack software developer",
        date: "Augst 2020 - Present",
        description: [
          "Playing a major role in building and maintaining frontend react-native android | ios apps",
          "as well as have experience in building node js backend support of restful API for the apps",
        ],
      },
      {
        title: "Escrow Infotech",
        company: "Full-stack software developer",
        date: "June 2018 - Augst 2020",
        description: [
          "Playing a major role in building and maintaining frontend android apps",
          "as well as have experience in building node js backend support of restful API for the apps",
        ],
      },
      {
        title: "Smart India Hackathon 2018, Ministry of AICTE",
        company: "DURATION OF HACKATHON – 36 HOUR",
        date: "MARCH 2018",
        description: [
          "Mobile App for Sansad Adarsh Gram Yojana (SAGY), Android App with Firebase Authentication and etc",
          "responsible for building JSON based API in PHP JSON Parsing in Android using OKHTTP request Response, UI/UX Design",
        ],
      },
      {
        title: "VAH info – solution",
        company: "Internship trainee",
        date: "JULY 2015 - MAY 2016",
        description: [
          "Task Management and Analytic for the educational institute (performance Analyzer), Android and Web based Application",
          "Front end – android, Back end – java",
        ],
      },
    ],
    Education: [
      {
        title: "Bachelor of Computer Engineering",
        date: "2016 - 2019",
        content: ["Qualified with 7.46 CGPA"],
      },
      {
        title: "Diploma in computer engineering",
        date: "2013 - 2016",
        content: ["Qualified with 9.32 CGPA"],
      },
    ],
    Achivement: [
      "Launch  of “SAGY” android APP in the Play store under the supervision of gov. Of india",
      "Hackathon SIH18 Achieved 3rd rank",
    ],
    pdf_link:
      "https://drive.google.com/file/d/1J5Gz0SDOku1SwsxZSkSPgakR0fCsbsWf/view?usp=sharing",
  },
};
