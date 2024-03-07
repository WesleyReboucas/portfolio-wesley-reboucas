import React, { useState } from 'react'
import {
  SlideElement,
  SlideImage,
  SlideItem,
  ButtonPanel,
  Container,
  Ribbon,
} from './style'
import { Subtitle, Text } from '@/app/styles/global-style'
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
                <Link href={item.githubLink || '#'}>
                  <Button icon='github' description='Github' />
                </Link>
                {/* <Link href={item.siteLink || '#'}>
                  <Button icon='code' description='Demo' />
                </Link> */}
              </ButtonPanel>
            )}
            <SlideImage
              isHovered={hoveredIndex === index}
              src={item.src}
              alt={item.alt}
            />
            {/* <Ribbon>
              <Text color='white' size={0.8}>
                {item.ribbon}
              </Text>
            </Ribbon> */}
          </SlideItem>
        ))}
      </SlideElement>
    </Container>
  )
}