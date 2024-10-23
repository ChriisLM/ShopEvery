import '../assets/css/SliderHome.css'


export function SliderHome () {
  const imagesPath = []
  return (
    <section className='slider-section'>
      <div className='slider-container'>
        <div className='slider-button button-left'>&lt;</div>
        <div className='slider-image-container'>
          {imagesPath.map((image,index) => {
            <img src={image} key={index}/>
          })}
        </div>
        <div className='slider-button button-right'>&gt;</div>
      </div>
    </section>
  );
};