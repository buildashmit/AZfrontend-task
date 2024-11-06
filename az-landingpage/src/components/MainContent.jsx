import React, { useState } from 'react';
import './MainContent.css';
import { FaCalendarAlt, FaBriefcase, FaInfoCircle, FaClock, FaTimes } from 'react-icons/fa'; 
import { TfiBarChart } from "react-icons/tfi";
import { VscFiles } from "react-icons/vsc";
import { IoPlayCircleOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Mentor Sessions');
  const [activeChapter, setActiveChapter] = useState(null); 
  const [isPartVisible, setIsPartVisible] = useState(false); 

  const handleChapterClick = (chapter) => {
    if (chapter === 'Chapter 1') {
      setIsPartVisible(!isPartVisible);
    } else {
      setIsPartVisible(false);
    }
    setActiveChapter(chapter);
  };

  const togglePartVisibility = () => {
    setIsPartVisible(!isPartVisible);
  };

  return (
    <div className="main-content">
      <div className="tabs-container">
        <div className={`tab ${activeTab === 'Mentor Sessions' ? 'active' : ''}`}
          onClick={() => setActiveTab('Mentor Sessions')}>
          <FaCalendarAlt className="tab-icon" /> Mentor Sessions
        </div>
        <div className={`tab ${activeTab === 'Learning Materials' ? 'active' : ''}`}
          onClick={() => setActiveTab('Learning Materials')}>
          <FaBriefcase className="tab-icon" /> Learning Materials
        </div>
        <div className={`tab ${activeTab === 'How It Works' ? 'active' : ''}`}
          onClick={() => setActiveTab('How It Works')}>
          <FaInfoCircle className="tab-icon" /> How It Works
        </div>
      </div>
      <div className="content-container">
        {activeTab === 'Learning Materials' && (
          <div className="chapters-container">
            <div className={`chapter ${activeChapter === 'Chapter 1' ? 'active' : ''}`} onClick={() => handleChapterClick('Chapter 1')}>
              <span>Chapter 1</span>
              {activeChapter === 'Chapter 1' && (
                <span className="timestamp"><FaClock className="clock-icon" /> 02:30:00</span>
              )}
            </div>
            <div className={`chapter ${activeChapter === 'Chapter 2' ? 'active' : ''}`} onClick={() => handleChapterClick('Chapter 2')}>
              <span>Chapter 2</span>
              {activeChapter === 'Chapter 2' && (
                <span className="timestamp"><FaClock className="clock-icon" /> 01:15:20</span>
              )}
            </div>
            <div className={`chapter ${activeChapter === 'Chapter 3' ? 'active' : ''}`} onClick={() => handleChapterClick('Chapter 3')}>
              <span>Chapter 3</span>
              {activeChapter === 'Chapter 3' && (
                <span className="timestamp"><FaClock className="clock-icon" /> 00:30:10</span>
              )}
            </div>
            <div className={`chapter ${activeChapter === 'Chapter 4' ? 'active' : ''}`} onClick={() => handleChapterClick('Chapter 4')}>
              <span>Chapter 4</span>
              {activeChapter === 'Chapter 4' && (
                <span className="timestamp"><FaClock className="clock-icon" /> 00:30:10</span>
              )}
            </div>
            <div className={`chapter ${activeChapter === 'Chapter 5' ? 'active' : ''}`} onClick={() => handleChapterClick('Chapter 5')}>
              <span>Chapter 5</span>
              {activeChapter === 'Chapter 5' && (
                <span className="timestamp"><FaClock className="clock-icon" /> 00:30:10</span>
              )}
            </div>
          </div>
        )}
        {activeTab === 'Learning Materials' && activeChapter === 'Chapter 1' && isPartVisible && (
          <div className="part-info">
            <div className="part-header">
            <h2>Part 1</h2>
              <div className="part-details">
                <span><FaClock /> 02:30:00</span>
                <span><TfiBarChart/> medium</span>
                <span><VscFiles/> 5</span>
              </div>
              <button className="toggle-button" onClick={togglePartVisibility}>
                <MdExpandMore />
              </button>
            </div>
          
            <p>Introduction to Algorithms</p>
            <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: '45%' }}></div>
            </div>
            <div className="progress-text">45% completed</div>
            </div>
            <div className="subdetails">
            <div className="video-files">
              <p><IoPlayCircleOutline className="play-icon"/> Video 1 <span className="video-timestamp"><LuClock4 /> 00:40:00</span></p>
              <hr className='line'></hr>
            </div>
            <div className="article">
              <p><AiOutlineQuestionCircle className="play-icon"/> Article 1<span className="video-timestamp"><LuClock4 /> 00:20:00</span></p>
              <hr className='line'></hr>
              </div>

              <div className="quiz">
              <p><AiOutlineQuestionCircle className="play-icon"/> Quiz 1 <span className="quiz-timestamp"><LuClock4 /> 00:40:00</span></p>
              <hr className='line'></hr>
              </div>

              <div className="coding">
              <p><IoCodeSlashOutline className="play-icon"/> Coding Exercise 1 <span className="coding-timestamp"><LuClock4 /> 00:40:00</span></p>
              <hr className='line'></hr>
              </div>

              <div className="resourse">
              <p><VscFiles className="play-icon"/> Combined Resourse 1<span className="resourse-timestamp"><LuClock4 /> 00:40:00</span></p>
              <hr className='line'></hr>
              </div>
              </div>
              
              <div className="part-header">
            <h2>Part 2</h2>
              <div className="part-details">
                <span><FaClock /> 02:00:00</span>
                <span><TfiBarChart/> medium</span>
                <span><VscFiles/> 12</span>
              </div>
              <button className="toggle-button" onClick={togglePartVisibility}>
                <MdExpandMore />
              </button>
            </div>

            <p>Introduction to Sorting</p>
            <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: '20%' }}></div>
            </div>
            <div className="progress-text">20% completed</div>
            </div>





          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;