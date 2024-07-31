import React, { useState } from 'react'
import InformationComponent from './Information/InformationComponent'
import TourPlan from './TourPlan/TourPlan'
import Location from './Location/Location'
import Gallery from './Gallery/Gallery'
import Reviews from './Reviews'

// Buttons that appear on the top of product detail page
const TabButton = (props) => {
  // Props
  const { visible, setVisible, tabName } = props;

  // Variables
  const title = tabName[0].toUpperCase() + tabName.slice(1).toLowerCase();

  // Css
  const commonBtnCss = "h-16 w-1/5 p-2 rounded-lg text-xl hover:bg-white hover:text-black shadow-lg";
  const btnColor = visible === tabName ? "bg-blue-500 text-white" : "bg-slate-50 text-black";
  const className = `${commonBtnCss} ${btnColor}`;

  // Action when the button tab is clicked
  const onClick = () => {
    setVisible(tabName);
    localStorage.setItem("visible-tab", tabName)
  }

  // Custom props for button
  const btnProps = { className, onClick }

  // return <button className={className} onClick={onClick}>{title}</button>
  return <button {...btnProps}>{title}</button>
}
// Main
const Information = ({ product }) => {
  // States
  const [visible, setVisible] = useState(localStorage.getItem("visible-tab"));

  // Variables
  const ALL_TABS = ["information", "tourplan", "location", "gallery", "reviews"];

  // Custom props for TabButton
  const tabProps = { visible, setVisible };

  return (
    <div className='relative w-4/5 mx-auto'>
      <div className='flex space-x-2'>
        {ALL_TABS?.map((tab, index) => <TabButton key={index} tabName={tab} {...tabProps} />)}
      </div>
      {visible === "information" && <InformationComponent product={product} />}
      {visible === "tourplan" && <TourPlan product={product} />}
      {visible === "location" && <Location product={product} />}
      {visible === "gallery" && <Gallery product={product} />}
      {visible === "reviews" && <Reviews product={product} />}
    </div>
  )
}

export default Information

