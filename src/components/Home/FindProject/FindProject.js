import React, { useState } from "react";
import {
  BiChevronUpCircle,
  BiChevronDownCircle,
  BiSearch,
} from "react-icons/bi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SingleProject from "./SingleProject/SingleProject";
import styles from "./FindProject.module.css";
import { icon1, icon2, icon3, project } from "../../../images/image";

import "@splidejs/react-splide/css";

const FindProject = () => {
  const [sortBy, setSortBy] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const allSortByItems = ["ALL", "Live", "SuccessFul", "Upcoming"];
  const [dropDown, setDropDown] = useState(false);
  const projects = [
    {
      status: "live",
      feature: ["Kyc+", "audit"],
      image: project,
      icon: icon1,
      title: "About Meta Network",
      info: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      web: "#",
      twitter: "#",
      linkedin: "#",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 70,
      wlSpot: 100,
      progress: 85,
      startPrice: 8500,
      endPrice: 10000,
      closedIn: "Jun 01 2023 05:30:01",
    },
    {
      status: "successful",
      feature: ["Kyc+", "audit"],
      image: project,
      icon: icon2,
      title: "About Optimus Network",
      info: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      web: "#",
      twitter: "#",
      linkedin: "#",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 70,
      wlSpot: 100,
      progress: 100,
      startPrice: 100000,
      endPrice: 10000,
      closedIn: "Jun 01 2023 07:30:01",
    },
    {
      status: "Upcoming",
      feature: ["Kyc+", "audit"],
      image: project,
      icon: icon3,
      title: "About Lyopay",
      info: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      web: "#",
      twitter: "#",
      linkedin: "#",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 70,
      wlSpot: 100,
      progress: 0,
      startPrice: 0.0,
      endPrice: 10000,
      closedIn: "Jun 01 2023 04:30:01",
    },
    {
      status: "live",
      feature: ["Kyc+", "audit"],
      image: project,
      icon: icon1,
      title: "About Meta Network1",
      info: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      web: "#",
      twitter: "#",
      linkedin: "#",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 70,
      wlSpot: 100,
      progress: 85,
      startPrice: 8500,
      endPrice: 10000,
      closedIn: "Jun 01 2023 05:30:01",
    },
    {
      status: "successful",
      feature: ["Kyc+", "audit"],
      image: project,
      icon: icon2,
      title: "About Optimus Network1",
      info: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      web: "#",
      twitter: "#",
      linkedin: "#",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 70,
      wlSpot: 100,
      progress: 100,
      startPrice: 100000,
      endPrice: 10000,
      closedIn: "Jun 01 2023 07:30:01",
    },
    {
      status: "Upcoming",
      feature: ["Kyc+", "audit"],
      image: project,
      icon: icon3,
      title: "About Lyopay1",
      info: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      web: "#",
      twitter: "#",
      linkedin: "#",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 70,
      wlSpot: 100,
      progress: 0,
      startPrice: 0.0,
      endPrice: 10000,
      closedIn: "Jun 01 2023 04:30:01",
    },
  ];
  let filteredItems =
    sortBy.toLocaleLowerCase() === "all"
      ? projects.filter((el, _) =>
          el.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : projects
          .filter(
            (el, _) =>
              el.status.toLocaleLowerCase() === sortBy.toLocaleLowerCase()
          )
          .filter((el, _) =>
            el.title.toLowerCase().includes(searchValue.toLowerCase())
          );

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.wrapper}>
        {" "}
        <div className={styles.header}>
          <p className={styles.heading}>Find the project you want</p>
          <div className={styles.searchAndFilter}>
            {" "}
            <div className={styles.inputContainer}>
              <BiSearch className={styles.searchIcon} />
              <input
                type="text"
                className={styles.input}
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search here"
              />
            </div>
            <div className={styles.filter}>
              <div className={styles.dropdown}>
                <p className={styles.sortValue}>
                  {" "}
                  <span className={styles.sort}>Sort by: </span>{" "}
                  <span className={styles.sortBy}>{sortBy}</span>
                </p>
                {dropDown ? (
                  <BiChevronUpCircle
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                ) : (
                  <BiChevronDownCircle
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                )}
                {dropDown && (
                  <div className={styles.dropDownItems}>
                    {allSortByItems.map((el, i) => (
                      <p
                        key={i}
                        className={styles.dropDownItem}
                        onClick={() => {
                          setDropDown(false);
                          setSortBy(el);
                        }}
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          <Splide
            options={{
              autoWidth: false,
              perPage: 3,
              perMove: 1,
              drag: true,
              pagination: true,
              arrows: false,
              type: "",
              gap: "10px",
              breakpoints: {
                1280: {
                  perPage: 2.3,
                },
                991: {
                  perPage: 2,
                },
                767: {
                  perPage: 1.3,
                },
                520: {
                  perPage: 1,
                },
              },
            }}
          >
            {filteredItems.map((el, i) => (
              <SplideSlide key={i}>
                <SingleProject {...el} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default FindProject;
