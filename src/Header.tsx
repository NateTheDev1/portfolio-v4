import { useWindowSize } from "./useWindowSize";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export const Header = () => {
  const { width, height } = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (width && height) {
      if (width < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [width, height]);

  return (
    <>
      {!isMobile ? (
        <nav className="header">
          <a href="#about">
            <span>01.</span> About
          </a>
          <a href="#experience">
            <span>02.</span> Experience
          </a>
          <a href="#work">
            <span>03.</span> Work
          </a>
          <a href="#contact">
            <span>04.</span> Contact
          </a>
          <a href="/resume2023.pdf" className="btn">
            Resume
          </a>
        </nav>
      ) : (
        <>
          <svg
            onClick={() => setDrawerOpen(true)}
            className="menu-open-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
            />
          </svg>

          <Drawer
            direction="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            className="drawer"
            overlayClassName="drawer-overlay"
          >
            <svg
            className="menu-close-btn"
              onClick={() => setDrawerOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
              />
            </svg>
            <nav className="header">
              <a href="#about">
                <span>01.</span> About
              </a>
              <a href="#experience">
                <span>02.</span> Experience
              </a>
              <a href="#work">
                <span>03.</span> Work
              </a>
              <a href="#contact">
                <span>04.</span> Contact
              </a>
              <a href="/resume2023.pdf" className="btn">
                Resume
              </a>
            </nav>
          </Drawer>
        </>
      )}
    </>
  );
};
