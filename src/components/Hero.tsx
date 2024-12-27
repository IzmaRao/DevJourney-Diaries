import Image from 'next/image';
import bg from '../../public/herobg.svg'

export default function Home() {
  return (
    <div>
      <div className='hero'>
        <Image className='hero-img' src={bg} alt="bg" layout="fill" objectFit="cover" />
        <div className='hero-content'>
          <h1 className='hero-content-h'>DevJourney Diaries</h1>
          <p className='hero-content-p'>Embark on the adventure of a lifetime in the world of development.</p>
        </div>
      </div>
    </div>
  )
}


