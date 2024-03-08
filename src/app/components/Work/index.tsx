import React, { useState } from 'react'
import {
  SlideElement,
  SlideImage,
  SlideItem,
  ButtonPanel,
  Container,
} from './style'
import { Subtitle } from '@/app/styles/global-style'
import { workImages, WorkImageItemProps } from '../../../utils/data'
import Button from '../Button'
import Link from 'next/link'

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Container>
      <Subtitle $upperCaseColor>Work</Subtitle>
      <SlideElement>
        {workImages.map((item: WorkImageItemProps, index: number) => (
          <SlideItem
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {hoveredIndex === index && (
              <ButtonPanel>
                <Button
                  link={item.githubLink}
                  icon='github'
                  description='Github'
                />
              </ButtonPanel>
            )}
            <SlideImage
              $isHovered={hoveredIndex === index}
              src={item.src}
              alt={item.alt}
            />
          </SlideItem>
        ))}
      </SlideElement>
    </Container>
  )
}
