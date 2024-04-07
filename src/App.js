import './App.css';

import {useState} from 'react';

export default function App() {
  // 👇️ Initialize checked state to true
  const [isSubscribed, setIsSubscribed] = useState(true);

  const handleChange = () => {
    setIsSubscribed(current => !current);
  };

  return (
    <div>
      <label htmlFor="subscribe">
        <input
          type="checkbox"
          defaultChecked={true}
          value={isSubscribed}
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
        />
        Subscribe
      </label>
    </div>
  );
}
