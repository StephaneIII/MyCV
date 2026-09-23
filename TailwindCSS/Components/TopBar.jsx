function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__circuit topbar__circuit--left" aria-hidden="true" />
      <div className="topbar__content mx-auto w-full max-w-7xl">
        <p className="topbar__name">STÉPHANE <span>KARLSEN</span></p>
        <p className="topbar__line">Webudvikler <b>|</b> <strong>Datamatiker</strong> <b>|</b></p>
        <p className="topbar__line">Professionsbachelorstuderende i <span>Webudvikling</span></p>
      </div>
      <div className="topbar__circuit topbar__circuit--right" aria-hidden="true" />
    </header>
  );
}

export default TopBar;
