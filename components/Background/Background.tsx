import Image from 'next/image';

const Background = () => (
  <Image
    id='background-image'
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
    }}
    src="/docs@30.8b9a76a2.avif"
    alt='Background styled image'
    width={2000}
    height={2000}
  />
)

export { Background }