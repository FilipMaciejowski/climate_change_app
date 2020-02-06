import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



const RightSide = ({switchValue}) => {
  
const history = useHistory();
const changeRoute = (route) => {
  history.push(route);
};


const changeRoute2 = () => {
  history.push('/map');
};

  return (
    <aside className="right__side">
      <div className="right__side-content">
        <div className="right__side-text">
          <div className="main__text-mobile">
            <h2>Climate's</h2>
            <h3>stethoscope</h3>
          </div>
          <svg viewBox="0 0 240 80" className="main__text-svg">
            <title>Climate's stethoscope</title>
            <text
              x="-1"
              y="5"
              className={switchValue ? "text-up-dark" : "text-up"}
            >
              Climate´s
            </text>
            <text
              x="-1"
              y="40"
              className={switchValue ? "text-up-dark" : "text-up"}
            >
              stethoscope
            </text>
            <text
              x="-1"
              y="70"
              className={switchValue ? "text-down-dark" : "text-down"}
            >
              Let´s check us all up.
            </text>
            <text
              x="-1"
              y="85"
              className={switchValue ? "text-down-dark" : "text-down"}
            >
              For healthier future of our planet.
            </text>
            <svg
              x="55"
              y="-12"
              viewBox="0 0 5 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stethoscope"
            >
              <path
                d="M53.9779 94.9277C38.8644 94.792 25.837 84.4737 22.9706 70.3799L11.3434 26.8215C11.3304 26.7726 11.3192 26.7234 11.3089 26.6737C9.89937 19.6505 14.5242 12.8778 21.8368 11.255L34.7575 8.38748C36.1818 8.07171 37.6117 8.91218 37.9564 10.2641C38.3011 11.616 37.4277 12.9677 36.0056 13.2835L23.0846 16.151C18.5449 17.1585 15.6652 21.3459 16.5005 25.7039L28.1255 69.2562C28.1385 69.3052 28.1501 69.3544 28.16 69.4038C30.5205 81.1676 41.3806 89.7876 53.9834 89.9009C66.5865 90.0142 77.4674 81.5893 79.8553 69.8684C79.8651 69.8189 79.8768 69.7699 79.89 69.7214L91.619 26.3788C92.4645 22.0359 89.595 17.7968 85.0576 16.7078L72.1442 13.6082C70.7228 13.2672 69.8525 11.8995 70.2003 10.5538C70.5478 9.20808 71.9786 8.39298 73.4034 8.73468L86.3172 11.8343C93.6258 13.5884 98.2344 20.4441 96.808 27.442C96.7979 27.4911 96.7869 27.5401 96.7734 27.589L85.0429 70.9373C82.1427 84.9791 69.0911 95.0638 53.9779 94.9277Z"
                fill="#CADDEA"
              />
              <path
                d="M27.9391 12.6086C28.427 16.6359 35.1407 19.2612 39.3816 18.8318C43.6229 18.4024 46.6654 14.7893 46.1776 10.7619C45.6894 6.73445 41.8556 3.81761 37.6147 4.247C33.3735 4.67639 27.4508 8.58114 27.9391 12.6086Z"
                fill="#65DB57"
              />
              <path
                d="M80.2123 13.0782C79.7151 17.0968 72.9952 19.6013 68.7553 19.0957C64.5153 18.5901 61.4815 14.9225 61.9791 10.9039C62.4764 6.88536 66.3172 4.03743 70.5571 4.54304C74.797 5.04862 80.7103 9.0597 80.2123 13.0782Z"
                fill="#65DB57"
              />
              <path
                d="M91.8569 171.253C68.3417 171.042 49.2315 152.72 49.2583 130.411L49.2999 97.346C49.3002 96.8606 48.9312 96.443 48.4266 96.3583C37.8301 94.5799 28.8434 88.0382 24.0641 78.8558C23.3569 77.4978 23.2384 75.9154 24.0691 74.6259C24.9109 73.3193 26.3754 72.5309 27.9874 72.5165L28.0721 72.5167C29.8253 72.5323 31.4854 73.5435 32.3019 75.0921C36.45 82.9585 44.7588 87.8968 53.9857 87.9797C63.1432 88.0619 71.696 83.1013 75.7743 75.3421C76.5359 73.8929 78.1658 72.9665 79.927 72.9824C81.5605 72.9971 83.0496 73.7988 83.9102 75.1271C84.7608 76.4392 84.8399 78.0346 84.1218 79.3952C79.3209 88.4912 70.126 94.8696 59.5251 96.4579L59.3577 96.4728C58.8231 96.5198 58.4161 96.9435 58.4155 97.4534L58.3901 130.487C58.3693 148.026 73.387 162.424 91.8674 162.59L104.14 162.7C122.65 162.866 137.672 148.766 137.693 131.205L137.782 56.5051L146.914 56.587L146.825 131.287C146.798 153.632 127.682 171.575 104.129 171.363L91.8569 171.253Z"
                fill="#2C5871"
              />
              <path
                d="M141.777 73.8779C152.337 73.9727 160.908 65.9283 160.92 55.91C160.932 45.8916 152.381 37.6931 141.821 37.5983C131.261 37.5035 122.69 45.5479 122.679 55.5663C122.667 65.5846 131.217 73.7831 141.777 73.8779Z"
                fill="#5D6D7D"
              />
              <path
                d="M143.584 37.6934L143.541 73.8128C153.274 73.0546 160.907 65.3621 160.918 55.9088C160.929 46.4551 153.315 38.6262 143.584 37.6934Z"
                fill="#35495D"
              />
              <path
                d="M141.791 62.8053C145.905 62.8423 149.244 59.7081 149.249 55.8051C149.253 51.902 145.922 48.708 141.808 48.6713C137.694 48.6343 134.355 51.7682 134.35 55.6712C134.346 59.5743 137.677 62.7683 141.791 62.8053Z"
                fill="#E1EFFB"
              />
            </svg>
          </svg>
        </div>

        <div className="right__side-buttons">
          {switchValue ? (
            <button
              className={"right__side-btn1-night"}
              onClick={() => changeRoute("/map")}
            >
              Map
              <span class="right__side-btn1-night__inner">
                <span class="right__side-btn1-night__blobs">
                  <span class="right__side-btn1-night__blob"></span>
                  <span class="right__side-btn1-night__blob"></span>
                  <span class="right__side-btn1-night__blob"></span>
                  <span class="right__side-btn1-night__blob"></span>
                </span>
              </span>
            </button>
          ) : (
            <button
              className={"right__side-btn1"}
              onClick={() => changeRoute("/map")}
            >
              Map
              <span class="right__side-btn1__inner">
                <span class="right__side-btn1__blobs">
                  <span class="right__side-btn1__blob"></span>
                  <span class="right__side-btn1__blob"></span>
                  <span class="right__side-btn1__blob"></span>
                  <span class="right__side-btn1__blob"></span>
                </span>
              </span>
            </button>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="0"
          height="0"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </aside>
  );
};

export default RightSide;
