import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";
import {Projects} from "../components/work/Projects";

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
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="center" paddingBottom="l">
            <Avatar src={person.avatar} size="xl" />
          </RevealFx>
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

      <h1>sample projects</h1>
      {/* ✅ Projects section now sits outside the narrow column */}
      <RevealFx translateY="20" delay={0.8}>
        <Projects range={[2, 3]} />
      </RevealFx>
    </Column>
  );
}

