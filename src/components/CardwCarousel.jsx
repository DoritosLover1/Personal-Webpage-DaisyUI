function CardwCarousel({ image1, image2, image3, image4, image5, title, description, buttonLink, carouselId }) {
  return (
    <div className="card bg-base-300 rounded-2xl border-2 border-primary 
                    shadow-primary shadow-[0_6px_30px_0px] 
                    hover:shadow-lg transition">
      <figure>
        <div className="carousel w-full rounded-t-2xl overflow-hidden">
          {/* Slide 1 */}
          <div id={`${carouselId}-slide1`} className="carousel-item relative w-full">
            <div className="aspect-square w-full">
              <img src={image1} alt={`${title} - Görsel 1`} 
                   className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#${carouselId}-slide5`} className="btn btn-circle">❮</a>
              <a href={`#${carouselId}-slide2`} className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id={`${carouselId}-slide2`} className="carousel-item relative w-full">
            <div className="aspect-square w-full">
              <img src={image2} alt={`${title} - Görsel 2`} 
                   className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#${carouselId}-slide1`} className="btn btn-circle">❮</a>
              <a href={`#${carouselId}-slide3`} className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id={`${carouselId}-slide3`} className="carousel-item relative w-full">
            <div className="aspect-square w-full">
              <img src={image3} alt={`${title} - Görsel 3`} 
                   className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#${carouselId}-slide2`} className="btn btn-circle">❮</a>
              <a href={`#${carouselId}-slide4`} className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id={`${carouselId}-slide4`} className="carousel-item relative w-full">
            <div className="aspect-square w-full">
              <img src={image4} alt={`${title} - Görsel 4`} 
                   className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#${carouselId}-slide3`} className="btn btn-circle">❮</a>
              <a href={`#${carouselId}-slide5`} className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 5 */}
          <div id={`${carouselId}-slide5`} className="carousel-item relative w-full">
            <div className="aspect-square w-full">
              <img src={image5} alt={`${title} - Görsel 5`} 
                   className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#${carouselId}-slide4`} className="btn btn-circle">❮</a>
              <a href={`#${carouselId}-slide1`} className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </figure>

      <div className="card-body space-y-4">
        {/* Başlık */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary-content dark:text-white leading-tight">
          {title} <span className="text-primary">Projesi</span>
        </h3>

        {/* Açıklama */}
        <p className="text-base dark:text-slate-400 leading-relaxed">
          {description}
        </p>

        {/* Buton */}
        <div className="card-actions justify-end pt-2">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            Detayları Gör
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardwCarousel;
