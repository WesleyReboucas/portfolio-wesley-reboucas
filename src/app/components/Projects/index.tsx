import React, { useState } from 'react'
import { SlideElement, SlideImage, SlideItem, ButtonPanel } from './style'
import { Subtitle } from '@/app/styles/global-style'
import { images, ImageItem } from '../../../utils/data'
import Button from '../Button'
import Link from 'next/link'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div>
      <Subtitle $upperCaseColor>Projects</Subtitle>
      <SlideElement>
        {images.map((item: ImageItem, index: number) => (
          <SlideItem
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {hoveredIndex === index && (
              <ButtonPanel>
                <Link href={item.githubLink || '#'}>
                  <Button icon='github' description='Github' />
                </Link>
                <Link href={item.siteLink || '#'}>
                  <Button icon='code' description='Demo' />
                </Link>
              </ButtonPanel>
            )}
            <SlideImage
              isHovered={hoveredIndex === index}
              src={item.src}
              alt={item.alt}
              width={398}
              height={224}
            />
          </SlideItem>
        ))}
      </SlideElement>
    </div>
  )
}
