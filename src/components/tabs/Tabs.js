import { useState } from "react";
import "./Tabs.scss";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const handleShowTab = (index) => {
    setTabIndex(index);
  };

  return (
    <section className="tabs-section --100vh --flex-center">
      <div className="container">
        <div className="tabs-heading --text-center">
          <h2 className="--line">More about Us</h2>
          <p className="--text-sm">Click the Tab buttons to learn more.</p>
        </div>
        <div className="tabs --flex-start --bg-light">
          <div className="tabs-title">
            <button
              className={tabIndex === 1 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(1)}
            >
              Who we are...
            </button>
            <button
              className={tabIndex === 2 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(2)}
            >
              What we do...
            </button>
            <button
              className={tabIndex === 3 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(3)}
            >
              Get in touch...
            </button>
          </div>

          <div className="tabs-content">
            <article
              className={tabIndex === 1 ? "content active-content" : "content"}
            >
              <h4>Who we are</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit, lorem sit amet vestibulum rutrum, neque diam tristique
                sapien, vel ullamcorper erat tellus sed massa. Morbi fermentum
                pellentesque faucibus. Quisque tortor magna, volutpat eu mauris
                non, rutrum luctus sem. Vestibulum.
              </p>
            </article>
            <article
              className={tabIndex === 2 ? "content active-content" : "content"}
            >
              <h4>What we do</h4>
              <p>
                Fusce tincidunt lobortis auctor. Phasellus eros nulla, tempor et
                suscipit quis, mattis id dui. Mauris finibus cursus fermentum.
                Pellentesque laoreet et odio mollis posuere. Proin vel
                pellentesque purus. Donec in tortor molestie, commodo est et,
                accumsan eros. Fusce rutrum congue diam quis pellentesque.
                Integer sit amet nisi sodales, iaculis enim pretium, viverra
                metus.
              </p>
            </article>
            <article
              className={tabIndex === 3 ? "content active-content" : "content"}
            >
              <h4>Get in touch</h4>
              <p>
                Nunc sodales sodales congue. Vestibulum pellentesque rhoncus
                augue. Praesent in vehicula orci. Aliquam id dui nisl.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Phasellus consectetur, dolor
                et cursus semper, augue elit euismod nibh, et tincidunt nulla
                sapien eget dolor. Morbi bibendum odio suscipit, sodales sapien.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
