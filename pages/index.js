import * as React from 'react'
import Slider from 'rc-slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [value, setValue] = React.useState(0)

  return (
    <div className={styles.container}>
      <Rating value={value / 2} />
      <Slider min={0} max={10} value={value} onChange={setValue} />
    </div>
  )
}

function Rating(props) {
  const { value } = props

  const wholeValue = value * 2

  return (
    <span className="rating-display">
      {Array.from(Array(10)).map((_, i) => (
        <span
          key={i}
          className={`rating-star rating-star--${i < wholeValue ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      ))}
    </span>
  )
}
