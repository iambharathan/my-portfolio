"use client";

import styles from "./FeaturedWork.module.scss";
import { Project } from "./Project";

const projects = [
  { title1: "NeedA", title2: "Roomie", src: "/images/needaroomie.png", href: "https://needaroomie.com" },
];

export const FeaturedWork = () => {
  return (
    <section className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.heading}>Featured Work</p>
        {projects.map((project) => (
          <Project key={`${project.title1}-${project.title2}`} project={project} />
        ))}
      </div>
    </section>
  );
};