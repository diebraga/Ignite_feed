import styles from './Avatar.module.css'

type AvatarProps = {
  src: string;
  hasBorder: boolean;
}

export default function Avatar({ src, hasBorder }: AvatarProps) {
  return (
    <img src={src} className={`${styles.avatar} ${hasBorder ? styles.hadBorder : null}`} />
  )
}
