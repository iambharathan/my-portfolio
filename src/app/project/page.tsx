"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Column, Flex, Heading, Text, Button, RevealFx, Badge, Icon } from "@once-ui-system/core";
import { person } from "@/resources";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "NeedARoomie",
      category: "fullstack",
      description:
        "A full-stack platform that automates room and roommate discovery for students and professionals. Built with structured workflows for profile creation, verification, matching, and communication, powered by database triggers and event-driven email automation, and designed to scale across cities and organizations.",
      image: "/images/needaroomie.png",
      tags: ["Next.js", "Full-Stack", "Database", "Automation"],
      stats: { workflow: "End-to-end", automation: "Email triggers", scale: "Multi-city" },
      link: "https://needaroomie.com",
      caseStudyLink: "/work/needaroomie-case-study", // You'll create this later
      featured: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "grid" },
    { id: "web", label: "Web", icon: "globe" },
    { id: "fullstack", label: "Full-Stack", icon: "server" },
    { id: "ai", label: "AI/ML", icon: "cpu" },
    { id: "design", label: "Design", icon: "palette" },
    { id: "automation", label: "Automation", icon: "zap" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);
  const featuredProject = filteredProjects.find((project) => project.featured);

  return (
    <Column className="projects-page" maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Hero Section */}
      <Column className="projects-hero" fillWidth paddingY="24" gap="l">
        <RevealFx translateY="4" fillWidth>
          <Column className="projects-hero-content" gap="m" align="center" horizontal="center" fillWidth style={{ textAlign: "center" }}>
            <Badge
              background="brand-alpha-weak"
              onBackground="brand-strong"
              textVariant="label-default-l"
              style={{
                paddingLeft: "clamp(20px, 3vw, 32px)",
                paddingRight: "clamp(20px, 3vw, 32px)",
                paddingTop: "clamp(10px, 2vw, 14px)",
                paddingBottom: "clamp(10px, 2vw, 14px)",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 600,
                letterSpacing: "0.5px"
              }}
            >
              Portfolio Showcase
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center" style={{ width: "100%" }}>
              Featured Projects
            </Heading>
            <Column maxWidth="s" horizontal="center" style={{ margin: "0 auto" }}>
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center" style={{ textAlign: "center" }}>
                Innovative solutions built with modern technologies. From full-stack applications to AI-powered systems.
              </Text>
            </Column>
          </Column>
        </RevealFx>

        {/* Category Filter */}
        <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
          <Flex className="projects-filter" gap="8" wrap horizontal="center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "primary" : "secondary"}
                size="m"
                prefixIcon={cat.icon as any}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </Flex>
        </RevealFx>
      </Column>

      {/* Featured Projects Grid */}
      <Column fillWidth gap="l">
        <RevealFx translateY="8" delay={0.2} fillWidth>
          <Heading variant="heading-strong-l">Featured Work</Heading>
        </RevealFx>

        {/* Large Featured Project */}
        {featuredProject && (
          <RevealFx translateY="8" delay={0.25} fillWidth>
            <Column
              className="projects-featured-card"
              fillWidth
              gap="l"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${featuredProject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Column gap="m" fillWidth>
                <Flex gap="8" wrap>
                  {featuredProject.tags.map((tag, i) => (
                    <Badge key={i} background="brand-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
                <Heading variant="display-strong-m" style={{ color: "white" }}>
                  {featuredProject.title}
                </Heading>
                <Text variant="body-default-l" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {featuredProject.description}
                </Text>
                <Flex className="projects-featured-stats" gap="l" wrap>
                  {Object.entries(featuredProject.stats).map(([key, value], i) => (
                    <Column key={i} gap="4">
                      <Text variant="heading-strong-l" style={{ color: "white" }}>
                        {value}
                      </Text>
                      <Text variant="label-default-s" style={{ color: "rgba(255,255,255,0.6)", textTransform: "capitalize" }}>
                        {key}
                      </Text>
                    </Column>
                  ))}
                </Flex>
                {featuredProject.link && (
                  <Button
                    variant="primary"
                    size="m"
                    href={featuredProject.link ?? undefined}
                    prefixIcon="externalLink"
                    style={{ width: "fit-content" }}
                  >
                    View Project
                  </Button>
                )}
              </Column>
            </Column>
          </RevealFx>
        )}

        {/* Projects Grid */}
        <Flex className="projects-grid" gap="m" wrap fillWidth>
          {filteredProjects.map((project, index) => {
            const isApex = project.title === "Apex Motion Website";
            return (
            <RevealFx key={index} translateY="8" delay={0.3 + index * 0.05} fillWidth>
              <Column
                gap="m"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 320px", minWidth: "320px", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Project Image */}
                {isApex ? (
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      borderRadius: "12px",
                      background: "var(--neutral-alpha-weak)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      padding: "12px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      style={{
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "8px",
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}

                {/* Project Info */}
                <Column gap="8">
                  <Flex gap="8" wrap>
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} background="neutral-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                  <Heading variant="heading-strong-m">{project.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {project.description}
                  </Text>
                </Column>

                {/* Stats */}
                <Flex gap="l" wrap>
                  {Object.entries(project.stats).slice(0, 2).map(([key, value], i) => (
                    <Column key={i} gap="4">
                      <Text variant="heading-strong-m">{value}</Text>
                      <Text variant="label-default-s" onBackground="neutral-weak" style={{ textTransform: "capitalize" }}>
                        {key}
                      </Text>
                    </Column>
                  ))}
                </Flex>

                {/* CTA */}
                <Flex gap="8" wrap>
                  {project.caseStudyLink && (
                    <Button
                      variant="secondary"
                      size="s"
                      href={project.caseStudyLink}
                      prefixIcon="book"
                      style={{ flex: "1 1 auto" }}
                    >
                      Case Study
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      variant="primary"
                      size="s"
                      href={project.link}
                      prefixIcon="globe"
                      style={{ flex: "1 1 auto" }}
                    >
                      Live Project
                    </Button>
                  )}
                </Flex>
              </Column>
            </RevealFx>
          )})}
        </Flex>
      </Column>

      {/* Stats Section */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="l" padding="xl" radius="l" background="brand-alpha-weak" border="brand-alpha-medium">
          <Column gap="8" align="center">
            <Heading variant="heading-strong-l" align="center">
              Proven Track Record
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" align="center">
              Numbers that showcase the impact of my work
            </Text>
          </Column>
          <Flex gap="l" wrap horizontal="center">
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">10+</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">Projects Delivered</Text>
            </Column>
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">10K+</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">Users Impacted</Text>
            </Column>
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">95%</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">Client Satisfaction</Text>
            </Column>
          </Flex>
        </Column>
      </RevealFx>

      {/* CTA Section */}
      <RevealFx translateY="8" delay={0.5} fillWidth>
        <Column fillWidth gap="m" padding="xl" radius="l" background="surface" border="neutral-alpha-weak" align="center">
          <Icon name="rocket" size="l" onBackground="brand-strong" />
          <Heading variant="heading-strong-l" align="center">
            Have a project in mind?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" align="center">
              Let&apos;s collaborate and build something extraordinary together.
          </Text>
          <Flex gap="8" wrap horizontal="center">
            <Button variant="secondary" size="m" href="/work">
              View all work
            </Button>
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
