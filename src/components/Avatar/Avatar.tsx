import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

export default function Avatar({ src, hasBorder, alt, ...rest }: AvatarProps) {
  return (
    <img
      src={src}
      className={`${styles.avatar} ${hasBorder ? styles.hadBorder : null}`}
      alt={alt}
      {...rest}
    />
  )
}
