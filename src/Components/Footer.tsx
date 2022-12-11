import React, { memo, FC, useState, useEffect } from "react";
import moment from "moment";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <div className="App__footer">
        Footer Text
        <div>{moment(currentTime).format("DD-MM-YYYY hh:mm:ss")}</div>
      </div>
    </footer>
  );
};

export default memo(Footer);
