"use client";

import styles from "./SkillsMarquee.module.scss";

const skillsLine =
  "• LINUX   AWS   CI/CD   GITHUB ACTIONS   JENKINS   TERRAFORM   KUBERNETES   DOCKER   ANSIBLE   PYTHON   BASH   GIT   AZURE   GCP   PROMETHEUS   GRAFANA   ELK STACK";

export const SkillsMarquee = () => {
  return (
    <section className={styles.main}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          style={{ "--marquee-duration": "70s" } as React.CSSProperties}
        >
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            <p key={`${skillsLine}-${repeatIndex}`}>{skillsLine}</p>
          ))}
        </div>
      </div>
    </section>
  );
};