import React, { useEffect, useState } from 'react';
import "../api/ApiPostData.css";
import { PostsData } from './PostApi';

export const ApiPostData = () => {

      const [posts, setPosts] = useState([]);


      const PostDataFetch=async()=>{
            try {
                  const res = await PostsData();
                  setPosts(res.data);
                  console.log(res.data);
            } catch (error) {
                  console.log('Error fetching data:', error);
                  
            }
      }
      useEffect(()=>{
            PostDataFetch();
      })
    return (
        <div className="homecards-container">
            {/* Left Section: Festivals */}
            <div className="homecards-left-section">
                <h2>Festivals</h2>
                <div className="homecards-festivals-container">
                    <div className="homecards-festival-card">
                        <img src="./s1.webp" alt="Festival Image" />
                        <div className="homecards-festival-content">
                            <h3>CHILDREN'S CORNER</h3>
                            <p>Itanagar, November 13-15, 2024 Parents, get ready to spark your child’s imagination as the Arunachal Literature Festival introduces an enchanting new feature.</p>
                            <a href="/singlepostPage">View More →</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: News and Events */}
            <div className="homecards-middle-section">
      <h2>Government News and Events</h2>
      <h3>Daily News Updates</h3>
      <div className="homecards-news-container">
        {posts.map((post) => (
          <div className="homecards-news-item" key={post.id}>
            <p>{post.title}</p>
            <a href="/singlepostPage">Read More »</a>
          </div>
        ))}
      </div>
    </div>

            {/* Right Section: Links */}
            <div className="homecards-right-section">
                <h2>State Government Websites</h2>
                <ul>
                    <li><a href="https://arunachalpradesh.gov.in/department.html" target="_blank" rel="noopener noreferrer">Departments</a></li>
                    <li><a href="https://igod.gov.in/index.php/sg/AR/E004/organizations" target="_blank" rel="noopener noreferrer">Directorates</a></li>
                    <li><a href="https://igod.gov.in/index.php/sg/AR/E011/organizations" target="_blank" rel="noopener noreferrer">Organizations & Boards List</a></li>
                    <li><a href="https://education.arunachal.gov.in/" target="_blank" rel="noopener noreferrer">Universities</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Tenders</a></li>
                </ul>
                <h2>Documents for Citizens</h2>
                <ul>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Government Orders</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Gazettes</a></li>
                </ul>
            </div>
        </div>
    );
};
