function HeaderComponent() {
  return (
    <div className="fixed top-5 left-5 right-5 z-50">
    <div className="navbar bg-base-100 rounded-2xl border-2 border-primary shadow-primary shadow-[0_5px_30px_0px] hover:shadow-primary/80 transition">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="#hakkimda" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Hakkımda</a></li>
            <li><a href="https://github.com/DoritosLover1" target="_blank" rel="noopener noreferrer" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Projelerim</a></li>
            <li><a href="#öneçıkanlar" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Öne Çıkanlar</a></li>
            <li><a href="#yeteneklerim" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Yeteneklerim</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-primary hover:btn-primary hover:text-primary-content">İhsan DEMİRCİ</a>
      </div>

      <div className="navbar-center hidden lg:flex text-base-content font-medium">
        <ul className="menu menu-horizontal px-1 gap-x-2 text-primary">
          <li><a href="#hakkimda" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Hakkımda</a></li>
          <li><a href="https://github.com/DoritosLover1" target="_blank" rel="noopener noreferrer" className="btn btn-ghost hover:bg-primary hover:text-primary-content">
              Projelerim
            </a>
          </li>
          <li><a href="#öneçıkanlar" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Öne Çıkanlar</a></li>
          <li><a href="#yeteneklerim" className="btn btn-ghost hover:bg-primary hover:text-primary-content">Yeteneklerim</a></li>
        </ul>
      </div>

      <div className="navbar-end font-medium">
        <a href={"https://www.linkedin.com/in/ihsan-demirci-408846335/"} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-error hover:btn-error hover:text-error-content">İletişim</a>
      </div>
    </div>

    </div>
  );
}

export default HeaderComponent;