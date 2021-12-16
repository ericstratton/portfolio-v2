import React from 'react';

import Section from './../../components/Section';
import Column from './../../components/Column';
import SectionHeading from './../../components/SectionHeading';
import Card from './../../components/Card';
import FadeInUp from './../../components/FadeInUp';
import {
  ExperienceWrapper,
  ExperienceColumnWrapper,
  ExperienceTimelineContainer,
  ExperienceTimelineTextContainer,
  SchoolIcon,
  WorkIcon,
  ExperienceTimeline,
} from './ExperienceElements';

const ExperienceSection = () => {
  return (
    <>
      <Section id={'experience'}>
        <ExperienceWrapper>
          <SectionHeading delay={100}>Experience</SectionHeading>
          <ExperienceColumnWrapper>
            <Column>
              <Card>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <h3>Bachelor's Degree</h3>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <SchoolIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <h3>Epicodus</h3>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <SchoolIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimeline />
              </Card>
            </Column>
            <Column>
              <Card>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <h3>GiftRibbn</h3>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <WorkIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <h3>EnviroIssues</h3>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <WorkIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimeline />
              </Card>
            </Column>
          </ExperienceColumnWrapper>
        </ExperienceWrapper>
      </Section>
    </>
  )
}

export default ExperienceSection;
