"use client";
import React from "react";
import {
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";
import { Projects } from "../components/work/Projects";

// 🟢 Import TextRevealCard components
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      <Column fillWidth paddingY="l" gap="m" horizontal="center">
        <Column maxWidth="s" horizontal="center">
          {/* 🔥 TextRevealCard replacing RevealFx + Heading */}
                  <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="m">
            <Text
              wrap="balance"
              align="center"
              variant="display-strong-l"
            >
              {home.headline}
            </Text>
          </RevealFx>

          {/* Avatar */}
          <RevealFx translateY="12" delay={0.4} horizontal="center" paddingBottom="l">
            <Avatar src={person.avatar} size="xl" className="w-80 h-80"/>
          </RevealFx>
          <div className="flex items-center justify-center h-[20rem] w-full">
            <TextRevealCard
  text=""
  revealText=""
/>
          </div>

          {/* Subline */}
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {home.subline}
            </Text>
          </RevealFx>

          {/* About Button */}
          <RevealFx translateY="16" delay={0.6} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
