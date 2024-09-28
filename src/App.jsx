import React, { useState } from 'react';
import Story from './components/Story'; 
import news_feed from './sample_news_stories.json'; 

function App() {
  
  const [stories, setStories] = useState(news_feed.results); 

  
  const removeStory = (title) => {
    setStories(stories.filter(story => story.title !== title));
  };

  return (
    <div className="App">
      <h1 className="main_title">News Stories</h1>
      <div className="stories-list">
        {stories.map(story => (
          <Story key={story.id} story={story} onRemove={removeStory} />
        ))}
      </div>
    </div>
  );
}

export default App;