import CIconsSVG from '../../components/CIconsSVG'

function Home() {
  return (
    <div className='pt-10 h-full ' >
      <input type="text" />
      <span style={{ fontSize: 14}}>Text   </span>
      <CIconsSVG
        style={{ background: 'red' }}
        name='home'
        svgSize='large'
        // rotateDeg={180}
      />
    </div>
  )
}

export default Home
