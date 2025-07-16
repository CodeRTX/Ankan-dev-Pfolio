import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  User
} from 'lucide-react'
import './App.css'

function App() {
  const resumeData = {
    contact: {
      name: "ANKAN DEBNATH",
      email: "ankan355@gmail.com",
      phone: "+91-7896017510",
      address: "Guwahati, Assam, 781012",
      linkedin: "https://www.linkedin.com/in/ankan-debnath-009804b1",
      github: "https://github.com/CodeRTX",
      kaggle: "https://www.kaggle.com/ankandebnath"
    },
    objective: [
      "Detail-oriented and motivated ECE-graduate seeking an entry-level position to apply technical skills in software development, system analysis, and problem-solving. Proficient in modern programming languages, passionate about learning and contributing to innovative IT solutions, Machine Learning, and IoT. I also enjoy listening to music, playing video games, staying updated with the latest gadgets and computer hardware, and participating in Hackathons & coding contests.",
      "I am currently pursuing my MTech Degree at Gauhati University in ECE and working on my Final Year Project on 'Image Captioning using LSTM + Attention-Mechanism + CNN'."
    ],
    academic_details: [
      {
        year: "2017",
        degree: "Bachelor of Technology (ECE)",
        institute: "NIT Silchar",
        grade: "6.05/10.0"
      },
      {
        year: "2013",
        degree: "Intermediate (Class XII)",
        institute: "DPS Guwahati",
        grade: "83.4%"
      },
      {
        year: "2011",
        degree: "Matriculation (Class X)",
        institute: "DPS Guwahati",
        grade: "8.4/10.0"
      }
    ],
    technical_skills: {
      programming_languages: ["C", "C++", "Python", "HTML", "CSS", "JavaScript"],
      operating_systems: ["Windows", "Linux"],
      development_tools: ["Arduino IDE", "VS Code", "ARM Kiel", "STM32 Cube MX", "Microsoft Office", "GitHub"],
      iot_embedded_systems: ["MQTT", "Node-Red", "ThingSpeak", "Blynk", "Raspberry Pi", "Arduino", "NodeMCU", "STM32"],
      databases: ["MongoDB"],
      ai_data_analytics: ["Edge Impulse", "Machine Learning", "Data Analytics", "Jupyter Notebook", "Kaggle", "Hugging Face", "Google Colab"],
      core_concepts: ["Data Structures"],
      soft_skills: ["Problem-Solving", "Communication", "Time Management", "Team Collaboration"],
      spoken_languages: ["English", "Bengali", "Hindi", "Assamese"]
    },
    work_experience: [
      {
        title: "Industrial IoT and Edge AI Analyst (Trainee)",
        company: "IIT Guwahati",
        duration: "Guwahati, Assam (Oct 2024 – January 2025)",
        responsibilities: [
          "Configured and programmed IoT systems using Raspberry Pi, NodeMCU, and STM32 for data collection and management.",
          "Designed and implemented automation workflows using Node-RED for efficient device communication and task automation.",
          "Deployed Edge AI models on IoT devices to enable real-time data processing and local decision-making.",
          "Utilized platforms such as ThingSpeak for real-time monitoring and visualization of sensor data.",
          "Integrated and configured sensors, actuators, and controllers to develop functional and scalable IoT solutions."
        ]
      },
      {
        title: "Fraud Analyst",
        company: "TTEC",
        duration: "Ahmedabad, Gujrat (Dec 2019 – March 2020)",
        responsibilities: [
          "Analyzed large volumes of user profiles and their data to identify fraudulent accounts.",
          "Collaborated with team members to discuss and address issues encountered during the analysis."
        ]
      },
      {
        title: "Floor Supervisor",
        company: "French Motors",
        duration: "Guwahati, Assam (Sept 2019 – Dec 2019)",
        responsibilities: [
          "Monitored and enhanced employee performance to boost productivity.",
          "Developed and maintained weekly spreadsheets using Microsoft Excel to track performance metrics."
        ]
      }
    ],
    projects: [
      {
        name: "Google-Generative-AI-Colab",
        description: [
            "Demonstrates how to authenticate and configure Google Cloud credentials within a Colab environment to access Vertex AI generative models.",
            "Includes notebooks for text completion, code generation, chat‐based Q&A, and image synthesis using Google’s GenAI APIs, with practical prompt‐engineering examples.",
            "Visualizes outputs directly in Colab and provides guidance on best practices, rate limits, and cost management for generative AI workflows."
    ],
        url: "https://github.com/CodeRTX/Google-Generative-AI-Colab"
  },
      {
        name: "Drowsiness-Detector",
        description: [
          "Utilizes facial landmarks and head tilt detection to continuously monitor user alertness. Detects signs of drowsiness, such as yawning and head tilting.",
          "Provides sound alerts when drowsiness is detected and logs events with timestamps for tracking and analysis.",
          "Plots drowsiness states over time, offering visual insights into the user's alertness levels."
        ],
        url: "https://github.com/CodeRTX/drowsiness-detector"
      },
  {
       name: "Wine-Quality-Analysis",
       description: [
            "Performs exploratory data analysis on the UCI Wine Quality dataset, featuring distribution plots, correlation heatmaps, and feature‐importance insights.",
            "Builds and evaluates machine learning models (Random Forest, XGBoost) to predict wine quality, employing hyperparameter tuning and strategies to handle class imbalance.",
            "Deploys the trained model via a FastAPI backend and a Streamlit frontend, enabling real‐time quality predictions through an interactive web interface."
    ],
        url: "https://github.com/CodeRTX/Wine-Quality-Analysis"
  },
      {
        name: "ESP32 Weather-Notifier",
        description: [
          "[MTech Mini-Project] Supervisor: Dr. Lachit Dutta, Asst. Professor, Dept. of Electronics and Communication Engineering, Gauhati University.",
          "ESP32-based asynchronous web server that monitors real-time temperature and humidity data using the DHT11 sensor, with WhatsApp notification integration."
        ],
        url: "https://github.com/CodeRTX/ESP32_Weather_Notifier"
      },
      {
        name: "TicTacToe-Challenge",
        description: [
          "This repository showcases various implementations of the classic Tic-Tac-Toe game, including console-based and graphical user interface (GUI) versions in Java, as well as a web-based version using HTML, CSS, and JavaScript.",
          "Each implementation supports both human vs. human and human vs. AI gameplay."
        ],
        url: "https://github.com/CodeRTX/TicTacToe-Challenge"
      },
      {
        name: "WebCrawler",
        description: [
          "A simple web crawler built using Node.js, Axios, and Cheerio. This tool crawls web pages starting from a specified URL and collects links up to a specified depth.",
          "The results are saved in a JSON file."
        ],
        url: "https://github.com/CodeRTX/WebCrawler"
      }
    ],
    certifications: [
      {
        title: "MASTER CLASS on Machine Learning (5 days)",
        issuer: "Pantech Solutions",
        date: "May 2020",
        description: "Completed an intensive 5-day course on Machine Learning, covering fundamental concepts and essential data analytics techniques. Additionally, gained proficiency in Python programming."
      }
    ],
    other_achievements: [
      "Participated successfully in 'The Great Indian Hiring Hackathon 2024' by MachineHack.",
      "Published an article, \"Perceptual Autoencoder: Enhancing Image Reconstruction with Deep Learning,\" on GeeksforGeeks.",
      "Got a rank of 1359 in Code Gladiators 2017 by Techgig.",
      "Qualified GATE 2017 with a GATE Score of 450.",
      "Completed a 2-days hands-on workshop on \"Embedded Systems in the IoT era\".",
      "Qualified JEE Main exam in 2013."
    ]
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <div className="bg-white dark:bg-slate-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                {resumeData.contact.name}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                ECE Graduate | IoT & AI Enthusiast | Software Developer
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${resumeData.contact.email}`} className="hover:text-blue-600 transition-colors">
                    {resumeData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{resumeData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{resumeData.contact.address}</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                <a 
                  href={resumeData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={resumeData.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                    href={resumeData.contact.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors" >
                    <img
                      src="/favicon.ico"
                      alt="Kaggle"
                      className="w-5 h-5 object-contain"
                   />
                   <span>Kaggle</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        {/* Objective Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <User className="w-6 h-6 text-blue-600" />
              Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
                {resumeData.objective.map((para, i) => (
                  <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
        </CardContent>
        </Card>

        {/* Academic Details */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="w-6 h-6 text-green-600" />
              Academic Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resumeData.academic_details.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">{edu.institute}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">
                        {edu.year}
                      </Badge>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {edu.grade}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

{/* Skills Summary Section */}
<Card className="shadow-lg hover:shadow-xl transition-shadow">
  <CardHeader>
    <CardTitle className="flex items-center gap-2 text-2xl">
      <Code className="w-6 h-6 text-purple-600" />
      Skills Summary
    </CardTitle>
  </CardHeader>
  <CardContent>

    {/* 1. Programming Languages */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      1. Programming Languages
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {resumeData.technical_skills.programming_languages.map(lang => (
        <Badge
          key={lang}
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300"
        >
          {lang}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />

    {/* 2. IoT & Embedded Systems */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      2. IoT & Embedded Systems
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {resumeData.technical_skills.iot_embedded_systems.map(item => (
        <Badge
          key={item}
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300"
        >
          {item}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />

    {/* 3. AI & Data Analytics */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      3. AI & Data Analytics
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {resumeData.technical_skills.ai_data_analytics.map(item => (
        <Badge
          key={item}
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300"
        >
          {item}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />

    {/* 4. Development Tools */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      4. Development Tools
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {resumeData.technical_skills.development_tools.map(tool => (
        <Badge
          key={tool}
          variant="outline"
          className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900 dark:text-orange-300"
        >
          {tool}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />

    {/* 5. Operating Systems */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      5. Operating Systems
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {resumeData.technical_skills.operating_systems.map(os => (
        <Badge
          key={os}
          variant="outline"
          className="bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300"
        >
          {os}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />

    {/* 6. Databases */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      6. Databases
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {resumeData.technical_skills.databases.map(db => (
        <Badge
          key={db}
          variant="outline"
          className="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900 dark:text-teal-300"
        >
          {db}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />

    {/* 7. Core Concepts */}
    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
      7. Core Concepts
    </h3>
    <div className="flex flex-wrap gap-2 mb-8">
      {resumeData.technical_skills.core_concepts.map(cc => (
        <Badge
          key={cc}
          variant="outline"
          className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900 dark:text-indigo-300"
        >
          {cc}
        </Badge>
      ))}
    </div>

  </CardContent>
</Card>



        {/* Work Experience */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Briefcase className="w-6 h-6 text-blue-600" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {resumeData.work_experience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {job.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        • {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Code className="w-6 h-6 text-green-600" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {resumeData.projects.map((project, index) => (
                <Card key={index} className="border-2 hover:border-green-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 hover:underline">
                          {project.name}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {project.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="w-6 h-6 text-yellow-600" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-4 py-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-yellow-600 font-medium">{cert.issuer}</p>
                  </div>
                  <Badge variant="secondary">
                    {cert.date}
                  </Badge>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Other Achievements */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="w-6 h-6 text-red-600" />
              Other Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {resumeData.other_achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Ankan Debnath. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built with React, Tailwind CSS, and deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App;
