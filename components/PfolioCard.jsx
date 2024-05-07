import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { BiSolidLike } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import Link from 'next/link'

const PfolioCard = ({ url, title, category, des }) => {
  return (
    <Card className='relative rounded-xl overflow-hidden group'>
      <CardHeader>
        <div>
          <Badge className='mb-3 capitalize'>{category}</Badge>
        </div>
        <div className='rounded-lg !inline-flex relative overflow-hidden'>
          <Image 
            src={url}
            alt=''
            height={299}
            width={444}
            className='rounded-lg'
          />
          {/* overlay */}
          <div></div>
          {/* icons */}
          <div>
            <Link href={'/portfolio'}>
              <MdOutlineZoomOutMap />
            </Link>
            <Link href={''}>
              <BiSolidLike />
              <p>112</p>
            </Link>
            <Link href={''}>
              <FaEye />
              <p>222</p>
            </Link>
          </div>
        </div>
      </CardHeader>
      {/* info */}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{des}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default PfolioCard