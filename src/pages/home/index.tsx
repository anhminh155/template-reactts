import CIconsSVG from '../../components/CIconsSVG'

function Home() {

  return (
    <div className='flex h-screen items-center justify-center'>
      <CIconsSVG
      className='cursor-pointer'
        style={{ background: 'red' }}
        name='home'
        svgSize='default'
        tooltip={{
          title: 'Hello',
          placement: 'top',
        }}
        rotateDeg={180}
      />
    </div>
  )
}

export default Home
